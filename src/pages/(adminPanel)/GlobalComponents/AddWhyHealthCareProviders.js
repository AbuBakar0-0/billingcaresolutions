import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const AddWhyHealthCareProviders = () => {
  const { id: sectionId } = useParams();

  const [iconData, setIconData] = useState({
    section_id: sectionId,
    title: "",
    image: "", // Adjusted for "image" instead of "icon"
    description: "", // New description field
  });
  const [icons, setIcons] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingIconId, setEditingIconId] = useState(null);

  useEffect(() => {
    // Fetch existing healthcare icons from Supabase
    const fetchIcons = async () => {
      const { data, error } = await supabase.from("healthcare").select("*");
      if (error) {
        console.error("Error fetching icons:", error.message);
      } else {
        setIcons(data || []);
      }
    };

    fetchIcons();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIconData({ ...iconData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIconData({ ...iconData, image_file: file });
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
      let imageUrl = iconData.image;

      // Upload image to Cloudinary if a new file is selected
      if (iconData.image_file) {
        imageUrl = await uploadToCloudinary(iconData.image_file);
      }

      const payload = {
        section_id: sectionId,
        title: iconData.title,
        image: imageUrl, // Adjusted for "image"
        description: iconData.description, // Add description to payload
      };

      if (editingIconId) {
        // Update an existing healthcare icon
        const { error } = await supabase
          .from("healthcare")
          .update(payload)
          .eq("id", editingIconId);

        if (error) {
          throw error;
        }

        // Update the local list
        setIcons((prev) =>
          prev.map((icon) =>
            icon.id === editingIconId ? { ...icon, ...payload } : icon
          )
        );
        setEditingIconId(null);
      } else {
        // Insert a new healthcare icon
        const { data, error } = await supabase
          .from("healthcare")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new icon to the local list
        setIcons((prev) => [...prev, ...data]);
      }

      // Reset the form
      setIconData({ section_id: sectionId, title: "", image: "", description: "" });
    } catch (error) {
      console.error("Error saving icon:", error.message);
      alert("Failed to save icon. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (icon) => {
    setIconData({ title: icon.title, image: icon.image, description: icon.description });
    setEditingIconId(icon.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("healthcare").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted icon from the local list
      setIcons((prev) => prev.filter((icon) => icon.id !== id));
    } catch (error) {
      console.error("Error deleting icon:", error.message);
      alert("Failed to delete icon. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Healthcare Icons</h1>

        {/* Icon Form */}
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
              value={iconData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              required
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
              name="image_file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={iconData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a description (optional)"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white px-4 py-2 rounded-md transition`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : editingIconId ? "Update Icon" : "Add Icon"}
          </button>
        </form>

        {/* Icon List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Icons</h2>
          {icons.length === 0 ? (
            <p>No icons added yet.</p>
          ) : (
            <ul className="space-y-4">
              {icons.map((icon) => (
                <li
                  key={icon.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{icon.title}</p>
                    {icon.image && (
                      <img
                        src={icon.image}
                        alt={icon.title}
                        className="h-12 mt-2"
                      />
                    )}
                    {icon.description && (
                      <p className="text-sm text-gray-500 mt-2">{icon.description}</p>
                    )}
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(icon)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(icon.id)}
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

export default AddWhyHealthCareProviders;
