import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import axios from "axios";
import DashboardLayout from "../layout";

// Cloudinary upload function
const uploadToCloudinary = async (file) => {
  const imageFormData = new FormData();
  imageFormData.append("file", file);
  imageFormData.append("upload_preset", "ml_default"); // Use your preset

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/dnfd5idsi/image/upload",
    imageFormData
  );
  return response.data.secure_url; // Return the secure URL of the uploaded image
};

const AddSpecialtiesWeOffer = () => {
  const [specialtyData, setSpecialtyData] = useState({
    icon: "",
    title: "",
    description: "",
    speciality_no: "",
  });
  const [specialties, setSpecialties] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingSpecialtyId, setEditingSpecialtyId] = useState(null);
  const [iconFile, setIconFile] = useState(null); // State for the uploaded icon file

  useEffect(() => {
    // Fetch existing specialties from Supabase
    const fetchSpecialties = async () => {
      const { data, error } = await supabase.from("specialities_we_offer").select("*").order("speciality_no");
      if (error) {
        console.error("Error fetching specialties:", error.message);
      } else {
        setSpecialties(data || []);
      }
    };

    fetchSpecialties();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpecialtyData({ ...specialtyData, [name]: value });
  };

  const handleFileChange = (e) => {
    setIconFile(e.target.files[0]); // Set the uploaded file in the state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let iconUrl = specialtyData.icon;

      // If there is an icon file selected, upload it to Cloudinary
      if (iconFile) {
        iconUrl = await uploadToCloudinary(iconFile); // Get the secure URL after upload
      }

      const payload = {
        icon: iconUrl,
        title: specialtyData.title,
        description: specialtyData.description,
        speciality_no: specialtyData.speciality_no,
      };

      if (editingSpecialtyId) {
        // Update an existing specialty
        const { error } = await supabase
          .from("specialities_we_offer")
          .update(payload)
          .eq("id", editingSpecialtyId);

        if (error) {
          throw error;
        }

        // Update the local list
        setSpecialties((prev) =>
          prev.map((specialty) =>
            specialty.id === editingSpecialtyId ? { ...specialty, ...payload } : specialty
          )
        );
        setEditingSpecialtyId(null);
      } else {
        // Insert a new specialty
        const { data, error } = await supabase
          .from("specialities_we_offer")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new specialty to the local list
        setSpecialties((prev) => [...prev, ...data]);
      }

      // Reset the form
      setSpecialtyData({
        icon: "",
        title: "",
        description: "",
        speciality_no: "",
      });
      setIconFile(null); // Reset the file input
    } catch (error) {
      console.error("Error saving specialty:", error.message);
      alert("Failed to save specialty. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (specialty) => {
    setSpecialtyData({
      icon: specialty.icon,
      title: specialty.title,
      description: specialty.description,
      speciality_no: specialty.speciality_no,
    });
    setEditingSpecialtyId(specialty.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("specialities_we_offer").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted specialty from the local list
      setSpecialties((prev) => prev.filter((specialty) => specialty.id !== id));
    } catch (error) {
      console.error("Error deleting specialty:", error.message);
      alert("Failed to delete specialty. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Specialties We Offer</h1>

        {/* Specialty Form */}
        <form onSubmit={handleSubmit}>
          {/* Icon Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              value={specialtyData.title}
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
            <input
              type="text"
              id="description"
              name="description"
              value={specialtyData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>

          {/* Speciality Number */}
          <div className="mb-4">
            <label
              htmlFor="speciality_no"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Specialty Number
            </label>
            <input
              type="text"
              id="speciality_no"
              name="speciality_no"
              value={specialtyData.speciality_no}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter specialty number"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white px-4 py-2 rounded-md transition`}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : editingSpecialtyId
              ? "Update Specialty"
              : "Add Specialty"}
          </button>
        </form>

        {/* Specialty List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Specialties</h2>
          {specialties.length === 0 ? (
            <p>No specialties added yet.</p>
          ) : (
            <ul className="space-y-4">
              {specialties.map((specialty) => (
                <li
                  key={specialty.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <img src={specialty.icon} alt={specialty.title} className="w-8 h-8 object-cover" />
                    <p className="font-medium">{specialty.title}</p>
                    <p>{specialty.description}</p>
                    <p className="text-sm text-gray-500">{specialty.speciality_no}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(specialty)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(specialty.id)}
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

export default AddSpecialtiesWeOffer;
