import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";

const AllHeaders = () => {
  const { type } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    miniHeading: "",  // Add miniHeading field
    description: "",
    backgroundImage: null,
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

  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("headers")
        .select("*")
        .eq("type", type)
        .single();

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      if (data) {
        setExistingData(data);
        setFormData({
          title: data.heading || "",
          miniHeading: data.mini_heading || "",  // Set mini_heading from existing data
          description: data.description || "",
          backgroundImage: data.background_image || null,
        });
      }
    };

    fetchData();
  }, [type]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, backgroundImage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let backgroundImageUrl = formData.backgroundImage;

      // Upload to Cloudinary if a new file is selected
      if (formData.backgroundImage instanceof File) {
        backgroundImageUrl = await uploadToCloudinary(formData.backgroundImage);
      }

      const payload = {
        heading: formData.title,
        mini_heading: formData.miniHeading,  // Add mini_heading field to payload
        description: formData.description,
        background_image: backgroundImageUrl,
        type,
      };

      if (existingData) {
        // Update the existing entry
        const { error } = await supabase
          .from("headers")
          .update(payload)
          .eq("id", existingData.id);

        if (error) throw error;

        alert("Header updated successfully!");
      } else {
        // Insert a new entry
        const { error } = await supabase.from("headers").insert(payload);

        if (error) throw error;

        alert("Header created successfully!");
      }
    } catch (error) {
      console.error("Error saving header:", error);
      alert("Failed to save header.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{type.toUpperCase()} Header</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Mini Header</label>
            <input
              type="text"
              name="miniHeading"
              value={formData.miniHeading}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter mini header (optional)"
            />
          </div>
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
            <label className="block text-sm font-medium">
              Background Image
            </label>
            <input type="file" onChange={handleFileChange} className="mt-1" />
            {formData.backgroundImage &&
              !(formData.backgroundImage instanceof File) && (
                <div className="mt-2">
                  <img
                    src={formData.backgroundImage}
                    alt="Background Preview"
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

export default AllHeaders;
