import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import axios from "axios";

const AddMilestone = () => {
  const [milestoneData, setMilestoneData] = useState({
    main_description: "",
    type: "",
    title: "",
    description: "",
    image: "", // Field to store the image URL
    points_title: "",
    points_description: "",
    points_percentage: "", // Text field for percentage
  });
  const [milestones, setMilestones] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingMilestoneId, setEditingMilestoneId] = useState(null);

  useEffect(() => {
    // Fetch existing milestones from Supabase
    const fetchMilestones = async () => {
      const { data, error } = await supabase.from("milestones").select("*");
      if (error) {
        console.error("Error fetching milestones:", error.message);
      } else {
        setMilestones(data || []);
      }
    };

    fetchMilestones();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMilestoneData({ ...milestoneData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const url = await uploadToCloudinary(file); // Upload image to Cloudinary
        setMilestoneData({ ...milestoneData, image: url }); // Set image URL
      } catch (error) {
        console.error("Error uploading image:", error.message);
        alert("Failed to upload image. Please try again.");
      }
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
    return response.data.secure_url; // Return the secure URL of the uploaded image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        main_description: milestoneData.main_description,
        type: milestoneData.type,
        title: milestoneData.title,
        description: milestoneData.description,
        image: milestoneData.image,
        points_title: milestoneData.points_title,
        points_description: milestoneData.points_description,
        points_percentage: milestoneData.points_percentage, // Store the points percentage
      };

      if (editingMilestoneId) {
        // Update an existing milestone
        const { error } = await supabase
          .from("milestones")
          .update(payload)
          .eq("id", editingMilestoneId);

        if (error) {
          throw error;
        }

        // Update the local list
        setMilestones((prev) =>
          prev.map((milestone) =>
            milestone.id === editingMilestoneId ? { ...milestone, ...payload } : milestone
          )
        );
        setEditingMilestoneId(null);
      } else {
        // Insert a new milestone
        const { data, error } = await supabase
          .from("milestones")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new milestone to the local list
        setMilestones((prev) => [...prev, ...data]);
      }

      // Reset the form
      setMilestoneData({
        type:milestoneData.type,
        points_title: "",
        points_description: "",
        points_percentage: "", // Reset points_percentage
      });
    } catch (error) {
      console.error("Error saving milestone:", error.message);
      alert("Failed to save milestone. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (milestone) => {
    setMilestoneData({
      main_description: milestone.main_description,
      type: milestone.type,
      title: milestone.title,
      description: milestone.description,
      image: milestone.image,
      points_title: milestone.points_title,
      points_description: milestone.points_description,
      points_percentage: milestone.points_percentage,
    });
    setEditingMilestoneId(milestone.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("milestones").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted milestone from the local list
      setMilestones((prev) => prev.filter((milestone) => milestone.id !== id));
    } catch (error) {
      console.error("Error deleting milestone:", error.message);
      alert("Failed to delete milestone. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Milestone</h1>

        {/* Milestone Form */}
        <form onSubmit={handleSubmit}>
          {/* Main Description */}
          <div className="mb-4">
            <label
              htmlFor="main_description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Main Description
            </label>
            <input
              type="text"
              id="main_description"
              name="main_description"
              value={milestoneData.main_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter main description"
              
            />
          </div>

          {/* Type */}
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={milestoneData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter type"
              
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
              value={milestoneData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              
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
              value={milestoneData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {milestoneData.image && (
              <div className="mt-2">
                <img
                  src={milestoneData.image}
                  alt="Milestone Image"
                  className="w-16 h-16 object-cover"
                />
              </div>
            )}
          </div>

          {/* Points Title */}
          <div className="mb-4">
            <label
              htmlFor="points_title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Points Title
            </label>
            <input
              type="text"
              id="points_title"
              name="points_title"
              value={milestoneData.points_title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter points title"
            />
          </div>

          {/* Points Description */}
          <div className="mb-4">
            <label
              htmlFor="points_description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Points Description
            </label>
            <textarea
              id="points_description"
              name="points_description"
              value={milestoneData.points_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter points description"
            />
          </div>

          {/* Points Percentage */}
          <div className="mb-4">
            <label
              htmlFor="points_percentage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Points Percentage
            </label>
            <input
              type="text"
              id="points_percentage"
              name="points_percentage"
              value={milestoneData.points_percentage}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter points percentage"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Milestone List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Existing Milestones</h2>
          <ul>
            {milestones.map((milestone) => (
              <li key={milestone.id} className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{milestone.points_title}</h3>
                    <p>{milestone.points_description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(milestone)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(milestone.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddMilestone;
