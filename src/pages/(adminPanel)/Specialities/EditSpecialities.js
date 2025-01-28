import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import axios from "axios";
import { supabase } from "../../../lib/supabase";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditSpecialities = () => {
  const { id: specialityId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    icon: null,
    card_image: null,
    header: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch the existing speciality data
    const fetchSpeciality = async () => {
      const { data, error } = await supabase
        .from("specialities")
        .select("*")
        .eq("id", specialityId)
        .single();

      if (error) {
        console.error("Error fetching speciality:", error.message);
        return;
      }

      setFormData({
        title: data.title,
        short_description: data.short_description,
        icon: data.icon,
        card_image: data.card_image,
        header: data.header,
      });
    };

    fetchSpeciality();
  }, [specialityId]);

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
      let iconUrl = formData.icon;
      let cardImageUrl = formData.card_image;
      let headerUrl = formData.header;

      // Upload new files to Cloudinary if they are updated
      if (formData.icon instanceof File) {
        iconUrl = await uploadToCloudinary(formData.icon);
      }

      if (formData.card_image instanceof File) {
        cardImageUrl = await uploadToCloudinary(formData.card_image);
      }

      if (formData.header instanceof File) {
        headerUrl = await uploadToCloudinary(formData.header);
      }

      // Update the speciality in the database
      const { error } = await supabase
        .from("specialities")
        .update({
          title: formData.title,
          short_description: formData.short_description,
          icon: iconUrl,
          card_image: cardImageUrl,
          header: headerUrl,
        })
        .eq("id", specialityId);

      if (error) {
        throw error;
      }

      alert("Speciality updated successfully!");
      navigate("/allSpecialities"); // Redirect to the list page
    } catch (error) {
      console.error("Error updating speciality:", error.message);
      alert("Failed to update speciality. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Edit Speciality</h1>
          <div className="flex justify-end items-center gap-2">
            <Link
              to={`/addSpecialityFaqs/${specialityId}`}
              className="bg-secondary rounded-lg px-4 py-2 text-white"
            >
              Add Faqs
            </Link>
            <Link
              to={`/addSpecialityTestimonials/${specialityId}`}
              className="bg-secondary rounded-lg px-4 py-2 text-white"
            >
              Add Testimonials
            </Link>
            <Link
              to={`/addSpecialitySubcontent/${specialityId}/1`}
              className="bg-secondary rounded-lg px-4 py-2 text-white"
            >
              Add Subcontent 1
            </Link>
            <Link
              to={`/addSpecialitySubcontent/${specialityId}/2`}
              className="bg-secondary rounded-lg px-4 py-2 text-white"
            >
              Add Subcontent 2
            </Link>
            <Link
              to={`/addSpecialitySubcontent/${specialityId}/3`}
              className="bg-secondary rounded-lg px-4 py-2 text-white"
            >
              Add Subcontent 3
            </Link>
          </div>
        </div>
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

          {/* Short Description */}
          <div className="mb-4">
            <label
              htmlFor="short_description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Short Description
            </label>
            <textarea
              id="short_description"
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a short description"
              required
            />
          </div>

          {/* Icon File */}
          <div className="mb-4">
            <label
              htmlFor="icon"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Icon
            </label>
            <input
              type="file"
              id="icon"
              name="icon"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
          </div>

          {/* Card Image File */}
          <div className="mb-4">
            <label
              htmlFor="card_image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Card Image
            </label>
            <input
              type="file"
              id="card_image"
              name="card_image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
          </div>

          {/* Header File */}
          <div className="mb-4">
            <label
              htmlFor="header"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Header
            </label>
            <input
              type="file"
              id="header"
              name="header"
              onChange={handleChange}
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
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditSpecialities;
