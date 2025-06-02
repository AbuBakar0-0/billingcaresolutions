import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../layout";
import TextEditor from "../../../components/ui/TextEditor";
import axios from "axios";
import { supabase } from "../../../lib/supabase";

const EditBlogs = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    date: "",
  });
  const [initialImage, setInitialImage] = useState(null); // Store the initial image URL
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch blog data by ID
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        setFormData({
          title: data.title,
          description: data.description,
          image: null, // Image file will be handled separately
          date: data.date,
        });
        setInitialImage(data.image); // Set initial image URL
      } catch (err) {
        console.error("Error fetching blog:", err.message);
        alert("Failed to fetch blog data.");
      }
    };

    fetchBlog();
  }, [id]);

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
      let imageUrl = initialImage; // Use initial image by default

      if (formData.image) {
        // Upload new image to Cloudinary if provided
        const imageFormData = new FormData();
        imageFormData.append("file", formData.image);
        imageFormData.append("upload_preset", "ml_default");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dnfd5idsi/image/upload",
          imageFormData
        );
        imageUrl = response.data.secure_url;
      }

      // Update blog data in Supabase
      const { error: updateError } = await supabase
        .from("blogs")
        .update({
          title: formData.title,
          description: formData.description,
          image: imageUrl,
          date: formData.date,
          slug: slugify(formData.title)
        })
        .eq("id", id);

      if (updateError) throw updateError;

      alert("Blog updated successfully!");
      navigate("/allBlogs"); // Redirect to blogs list
    } catch (error) {
      console.error("Error updating blog:", error.message);
      alert("Failed to update blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
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
              Upload New Image
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
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditBlogs;
