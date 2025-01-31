import React, { useState } from "react";
import DashboardLayout from "../layout";
import TextEditor from "../../../components/ui/TextEditor";
import axios from "axios";
import { supabase } from "../../../lib/supabase";


const AddBlogs = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    date: "",
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

  const handleQuillChange = (value, id) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Upload image to Cloudinary if provided
      let imageUrl = null;
      if (formData.image) {
        const imageformData = new FormData();
        imageformData.append("file", formData.image);
        imageformData.append("upload_preset", "ml_default");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dnfd5idsi/image/upload",
          imageformData
        );
        imageUrl = response.data.secure_url;
      }

      // Insert blog data into the 'blogs' table
      const { error: insertError } = await supabase.from("blogs").insert({
        title: formData.title,
        description: formData.description,
        image: imageUrl,
        date: formData.date,
      });

      if (insertError) {
        throw insertError;
      }

      alert("Blog added successfully!");
      setFormData({
        title: "",
        description: "",
        image: null,
        date: "",
      });
    } catch (error) {
      console.error("Error adding blog:", error.message);
      alert("Failed to add blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Add Blogs</h1>
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

          {/* Image */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <TextEditor
              type="description"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleQuillChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default AddBlogs;
