import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";

const WhyBcsVisionMission = () => {
  const [formData, setFormData] = useState({
    tagline: "",
    visionDescription: "",
    visionIcon: null,
    missionDescription: "",
    missionIcon: null,
    centerImage: null,
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
        .from("vision_mission")
        .select("*")
        .single();

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      if (data) {
        setExistingData(data);
        setFormData({
          tagline: data.tagline || "",
          visionDescription: data.vision_description || "",
          visionIcon: data.vision_icon || null,
          missionDescription: data.mission_description || "",
          missionIcon: data.mission_icon || null,
          centerImage: data.center_image || null,
        });
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload files to Cloudinary if new files are selected
      const uploadedFiles = {};
      for (const field of ["visionIcon", "missionIcon", "centerImage"]) {
        if (formData[field] instanceof File) {
          uploadedFiles[field] = await uploadToCloudinary(formData[field]);
        }
      }

      const payload = {
        tagline: formData.tagline,
        vision_description: formData.visionDescription,
        vision_icon: uploadedFiles.visionIcon || formData.visionIcon,
        mission_description: formData.missionDescription,
        mission_icon: uploadedFiles.missionIcon || formData.missionIcon,
        center_image: uploadedFiles.centerImage || formData.centerImage,
      };

      if (existingData) {
        // Update the existing entry
        const { error } = await supabase
          .from("vision_mission")
          .update(payload)
          .eq("id", existingData.id);

        if (error) throw error;

        alert("Data updated successfully!");
      } else {
        // Insert a new entry
        const { error } = await supabase.from("vision_mission").insert(payload);

        if (error) throw error;

        alert("Data saved successfully!");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Vision & Mission</h1>
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
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Vision Description</label>
            <textarea
              name="visionDescription"
              value={formData.visionDescription}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              rows="5"
              placeholder="Enter vision description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Vision Icon</label>
            <input
              type="file"
              name="visionIcon"
              onChange={handleFileChange}
              className="mt-1"
              required={!existingData?.vision_icon}
            />
            {formData.visionIcon && !(formData.visionIcon instanceof File) && (
              <div className="mt-2">
                <img
                  src={formData.visionIcon}
                  alt="Vision Icon Preview"
                  className="h-20 rounded"
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Mission Description</label>
            <textarea
              name="missionDescription"
              value={formData.missionDescription}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              rows="5"
              placeholder="Enter mission description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Mission Icon</label>
            <input
              type="file"
              name="missionIcon"
              onChange={handleFileChange}
              className="mt-1"
              required={!existingData?.mission_icon}
            />
            {formData.missionIcon && !(formData.missionIcon instanceof File) && (
              <div className="mt-2">
                <img
                  src={formData.missionIcon}
                  alt="Mission Icon Preview"
                  className="h-20 rounded"
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Center Image</label>
            <input
              type="file"
              name="centerImage"
              onChange={handleFileChange}
              className="mt-1"
              required={!existingData?.center_image}
            />
            {formData.centerImage && !(formData.centerImage instanceof File) && (
              <div className="mt-2">
                <img
                  src={formData.centerImage}
                  alt="Center Image Preview"
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

export default WhyBcsVisionMission;
