import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";

const FirstSlide = () => {
  const [id,setId]=useState(null);
  const [formData, setFormData] = useState({
    logo: null,
    tagline: "",
    bg_image: null,
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
        .from("first_slide")
        .select("*")
        .single();
      setId(data.id);
      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      if (data) {
        setExistingData(data);
        setFormData({
          logo: data.logo || null,
          tagline: data.tagline || "",
          bg_image: data.bg_image || null,
        });
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let logoUrl = formData.logo;
      let bgImageUrl = formData.bg_image;

      // Upload to Cloudinary if new files are selected
      if (formData.logo instanceof File) {
        logoUrl = await uploadToCloudinary(formData.logo);
      }
      if (formData.bg_image instanceof File) {
        bgImageUrl = await uploadToCloudinary(formData.bg_image);
      }

      const payload = {
        logo: logoUrl,
        tagline: formData.tagline,
        bg_image: bgImageUrl,
      };

      if (existingData) {
        // Update the existing entry
        const { error } = await supabase
          .from("first_slide")
          .update(payload)
          .eq("id", existingData.id);

        if (error) throw error;

        alert("Slide updated successfully!");
      } else {
        // Insert a new entry
        const { error } = await supabase.from("first_slide").insert(payload);

        if (error) throw error;

        alert("Slide created successfully!");
      }
    } catch (error) {
      console.error("Error saving slide:", error);
      alert("Failed to save slide.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">First Slide</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={formData.tagline}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter tagline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Logo</label>
            <input
              type="file"
              name="logo"
              onChange={handleFileChange}
              className="mt-1"
            />
            {formData.logo && !(formData.logo instanceof File) && (
              <div className="mt-2">
                <img
                  src={formData.logo}
                  alt="Logo Preview"
                  className="h-20 rounded"
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Background Image
            </label>
            <input
              type="file"
              name="bg_image"
              onChange={handleFileChange}
              className="mt-1"
            />
            {formData.bg_image && !(formData.bg_image instanceof File) && (
              <div className="mt-2">
                <img
                  src={formData.bg_image}
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

export default FirstSlide;
