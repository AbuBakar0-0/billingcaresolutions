import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";

const AllClientReasons = () => {

    const [formData, setFormData] = useState({
        description: "",
        image: null,
    });

    const [existingData, setExistingData] = useState(null);

    // Cloudinary upload function
    const uploadToCloudinary = async (file) => {
        const imageFormData = new FormData();
        imageFormData.append("file", file);
        imageFormData.append("upload_preset", "ml_default");

        const response = await fetch(
            "https://api.cloudinary.com/v1_1/dnfd5idsi/image/upload",
            {
                method: "POST",
                body: imageFormData,
            }
        );
        const data = await response.json();
        return data.secure_url;
    };

    // Fetch data from Supabase (client_reasons table)
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("client_reasons")
                .select("*")
                .single();

            if (error) {
                console.error("Error fetching data:", error);
                return;
            }

            if (data) {
                setExistingData(data);
                setFormData({
                    description: data.description || "",
                    image: data.image || null,
                });
            }
        };

        fetchData();
        
    },[]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = formData.image;

            // Upload to Cloudinary if a new file is selected
            if (formData.image instanceof File) {
                imageUrl = await uploadToCloudinary(formData.image);
            }

            const payload = {
                description: formData.description,
                image: imageUrl,
            };

            if (existingData) {
                // Update the existing entry
                const { error } = await supabase
                    .from("client_reasons")
                    .update(payload)
                    .eq("id", existingData.id);

                if (error) throw error;

                alert("Client reason updated successfully!");
            } else {
                // Insert a new entry
                const { error } = await supabase.from("client_reasons").insert(payload);

                if (error) throw error;

                alert("Client reason created successfully!");
            }
        } catch (error) {
            console.error("Error saving client reason:", error);
            alert("Failed to save client reason.");
        }
    };

    return (
        <DashboardLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Client Reason</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded"
                            rows="5"
                            placeholder="Enter description"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Image</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-1"
                        />
                        {formData.image && !(formData.image instanceof File) && (
                            <div className="mt-2">
                                <img
                                    src={formData.image}
                                    alt="Image Preview"
                                    className="h-40 rounded"
                                />
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default AllClientReasons;
