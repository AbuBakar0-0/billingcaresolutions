import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const AddRestOfSlides = () => {
  const { id: sectionId } = useParams();

  const [slideData, setSlideData] = useState({
    section_id: sectionId,
    slide_no: "",
    title: "",
    description: "",
    link: "",
    bg_image: "",
  });
  const [slides, setSlides] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingSlideId, setEditingSlideId] = useState(null);

  useEffect(() => {
    // Fetch existing slides from Supabase
    const fetchSlides = async () => {
      const { data, error } = await supabase.from("rest_of_slides").select("*");
      if (error) {
        console.error("Error fetching slides:", error.message);
      } else {
        setSlides(data || []);
      }
    };

    fetchSlides();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlideData({ ...slideData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSlideData({ ...slideData, bg_image_file: file });
    }
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dnfd5idsi/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let bgImageUrl = slideData.bg_image;

      // Upload background image to Cloudinary if a new file is selected
      if (slideData.bg_image_file) {
        bgImageUrl = await uploadToCloudinary(slideData.bg_image_file);
      }

      const payload = {
        section_id: sectionId,
        slide_no: slideData.slide_no,
        title: slideData.title,
        description: slideData.description,
        link: slideData.link,
        bg_image: bgImageUrl,
      };

      if (editingSlideId) {
        // Update an existing slide
        const { error } = await supabase
          .from("rest_of_slides")
          .update(payload)
          .eq("id", editingSlideId);

        if (error) {
          throw error;
        }

        // Update the local list
        setSlides((prev) =>
          prev.map((slide) =>
            slide.id === editingSlideId ? { ...slide, ...payload } : slide
          )
        );
        setEditingSlideId(null);
      } else {
        // Insert a new slide
        const { data, error } = await supabase
          .from("rest_of_slides")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new slide to the local list
        setSlides((prev) => [...prev, ...data]);
      }

      // Reset the form
      setSlideData({
        section_id: sectionId,
        slide_no: "",
        title: "",
        description: "",
        link: "",
        bg_image: "",
      });
    } catch (error) {
      console.error("Error saving slide:", error.message);
      alert("Failed to save slide. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (slide) => {
    setSlideData({
      slide_no: slide.slide_no,
      title: slide.title,
      description: slide.description,
      link: slide.link,
      bg_image: slide.bg_image,
    });
    setEditingSlideId(slide.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("rest_of_slides").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted slide from the local list
      setSlides((prev) => prev.filter((slide) => slide.id !== id));
    } catch (error) {
      console.error("Error deleting slide:", error.message);
      alert("Failed to delete slide. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Slide</h1>

        {/* Slide Form */}
        <form onSubmit={handleSubmit}>
          {/* Slide Number */}
          <div className="mb-4">
            <label
              htmlFor="slide_no"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Slide Number
            </label>
            <input
              type="number"
              id="slide_no"
              name="slide_no"
              value={slideData.slide_no}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter slide number"
              required
            />
          </div>

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
              value={slideData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
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
            <textarea
              id="description"
              name="description"
              value={slideData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
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
              type="url"
              id="link"
              name="link"
              value={slideData.link}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter link"
            />
          </div>

          {/* Background Image Upload */}
          <div className="mb-4">
            <label
              htmlFor="bg_image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Background Image
            </label>
            <input
              type="file"
              id="bg_image"
              name="bg_image_file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
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
            {isSubmitting
              ? "Submitting..."
              : editingSlideId
              ? "Update Slide"
              : "Add Slide"}
          </button>
        </form>

        {/* Slide List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Slides</h2>
          {slides.length === 0 ? (
            <p>No slides added yet.</p>
          ) : (
            <ul className="space-y-4">
              {slides.map((slide) => (
                <li
                  key={slide.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{slide.title}</p>
                    <p>{slide.description}</p>
                    {slide.bg_image && (
                      <img
                        src={slide.bg_image}
                        alt={slide.title}
                        className="h-12 mt-2"
                      />
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(slide)}
                      className="text-yellow-500 hover:text-yellow-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(slide.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddRestOfSlides;
