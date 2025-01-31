import React, { useState } from "react";
import DashboardLayout from "../layout";
import axios from "axios";
import { supabase } from '../../../lib/supabase';

const AddDomainArea = () => {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    img: null,
    flag: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const uploadToCloudinary = async (file) => {
    const imageFormData = new FormData();
    imageFormData.append("file", file);
    imageFormData.append("upload_preset", "ml_default");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dnfd5idsi/image/upload",
      imageFormData
    );
    return response.data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imgUrl = null;
      let flagUrl = null;

      // Upload img to Cloudinary if provided
      if (formData.img) {
        imgUrl = await uploadToCloudinary(formData.img);
      }

      // Upload flag to Cloudinary if provided
      if (formData.flag) {
        flagUrl = await uploadToCloudinary(formData.flag);
      }

      // Insert data into the 'domainAreas' table
      const { error: insertError } = await supabase.from("domainareas").insert({
        title: formData.title,
        link: formData.link,
        img: imgUrl,
        flag: flagUrl,
      });

      if (insertError) {
        throw insertError;
      }

      alert("Domain area added successfully!");
      setFormData({
        title: "",
        link: "",
        img: null,
        flag: null,
      });
    } catch (error) {
      console.error("Error adding domain area:", error.message);
      alert("Failed to add domain area. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Add Domain Area</h1>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              required
            />
          </div>

          {/* Link */}
          <div className="mb-4">
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Link
            </label>
            <input
              type="text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter link"
              required
            />
          </div>

          {/* Img File */}
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
              required
            />
          </div>

          {/* Flag File */}
          <div className="mb-4">
            <label
              htmlFor="flag"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Flag
            </label>
            <input
              type="file"
              id="flag"
              name="flag"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${
              isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded-md transition`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddDomainArea;
