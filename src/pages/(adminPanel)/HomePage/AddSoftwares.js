import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const AddSoftwares = () => {
  const { id: sectionId } = useParams();

  const [softwareData, setSoftwareData] = useState({
    section_id: sectionId,
    image: "",
  });
  const [softwares, setSoftwares] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingSoftwareId, setEditingSoftwareId] = useState(null);

  useEffect(() => {
    // Fetch existing software from Supabase
    const fetchSoftwares = async () => {
      const { data, error } = await supabase.from("softwares").select("*");
      if (error) {
        console.error("Error fetching softwares:", error.message);
      } else {
        setSoftwares(data || []);
      }
    };

    fetchSoftwares();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoftwareData({ ...softwareData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSoftwareData({ ...softwareData, image_file: file });
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
      let imageUrl = softwareData.image;

      // Upload image to Cloudinary if a new file is selected
      if (softwareData.image_file) {
        imageUrl = await uploadToCloudinary(softwareData.image_file);
      }

      const payload = {
        section_id: sectionId,
        image: imageUrl,
      };

      if (editingSoftwareId) {
        // Update an existing software
        const { error } = await supabase
          .from("softwares")
          .update(payload)
          .eq("id", editingSoftwareId);

        if (error) {
          throw error;
        }

        // Update the local list
        setSoftwares((prev) =>
          prev.map((software) =>
            software.id === editingSoftwareId ? { ...software, ...payload } : software
          )
        );
        setEditingSoftwareId(null);
      } else {
        // Insert a new software
        const { data, error } = await supabase
          .from("softwares")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new software to the local list
        setSoftwares((prev) => [...prev, ...data]);
      }

      // Reset the form
      setSoftwareData({ section_id: sectionId, image: "" });
    } catch (error) {
      console.error("Error saving software:", error.message);
      alert("Failed to save software. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (software) => {
    setSoftwareData({ image: software.image });
    setEditingSoftwareId(software.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("softwares").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted software from the local list
      setSoftwares((prev) => prev.filter((software) => software.id !== id));
    } catch (error) {
      console.error("Error deleting software:", error.message);
      alert("Failed to delete software. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Software Icons</h1>

        {/* Software Form */}
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Software Image
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
              : editingSoftwareId
              ? "Update Software"
              : "Add Software"}
          </button>
        </form>

        {/* Software List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Softwares</h2>
          {softwares.length === 0 ? (
            <p>No software added yet.</p>
          ) : (
            <ul className="space-y-4">
              {softwares.map((software) => (
                <li
                  key={software.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    {software.image && (
                      <img
                        src={software.image}
                        alt="Software Icon"
                        className="h-12 mt-2"
                      />
                    )}
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(software)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(software.id)}
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

export default AddSoftwares;
