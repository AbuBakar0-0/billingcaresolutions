import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import axios from "axios";

const AllStats = () => {
  const [statData, setStatData] = useState({
    icon: "",
    title: "",
    description: "",
  });
  const [stats, setStats] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingStatId, setEditingStatId] = useState(null);

  useEffect(() => {
    // Fetch existing stats from Supabase
    const fetchStats = async () => {
      const { data, error } = await supabase.from("stats").select("*");
      if (error) {
        console.error("Error fetching stats:", error.message);
      } else {
        setStats(data || []);
      }
    };

    fetchStats();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatData({ ...statData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const url = await uploadToCloudinary(file); // Upload image to Cloudinary
        setStatData({ ...statData, icon: url }); // Set image URL
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
        icon: statData.icon,
        title: statData.title,
        description: statData.description,
      };

      console.log(payload);
      if (editingStatId) {
        // Update an existing stat
        const { data, error } = await supabase
          .from("stats")
          .update(payload)
          .eq("id", editingStatId);

        if (error) {
          throw error;
        }

        // Update the local list
        setStats((prev) =>
          prev.map((stat) =>
            stat.id === editingStatId ? { ...stat, ...payload } : stat
          )
        );
        setEditingStatId(null);
      } else {
        // Insert a new stat
        const { data, error } = await supabase
          .from("stats")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new stat to the local list
        setStats((prev) => [...prev, ...data]);
      }

      // Reset the form
      setStatData({
        icon: "",
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error saving stat:", error.message);
      alert("Failed to save stat. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (stat) => {
    setStatData({
      icon: stat.icon,
      title: stat.title,
      description: stat.description,
    });
    setEditingStatId(stat.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("stats").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted stat from the local list
      setStats((prev) => prev.filter((stat) => stat.id !== id));
    } catch (error) {
      console.error("Error deleting stat:", error.message);
      alert("Failed to delete stat. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Stat</h1>

        {/* Stat Form */}
        <form onSubmit={handleSubmit}>
          {/* Icon Upload */}
          <div className="mb-4">
            <label
              htmlFor="icon"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Icon
            </label>
            <input
              type="file"
              id="icon"
              name="icon"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {statData.icon && (
              <div className="mt-2">
                <img
                  src={statData.icon}
                  alt="Stat Icon"
                  className="w-16 h-16 object-cover"
                />
              </div>
            )}
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
              value={statData.title}
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
              value={statData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
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

        {/* Stats List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Existing Stats</h2>
          <ul>
            {stats.map((stat) => (
              <li key={stat.id} className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{stat.title}</h3>
                    <p>{stat.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(stat)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(stat.id)}
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

export default AllStats;
