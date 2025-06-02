import React, { useState } from "react";
import DashboardLayout from "../layout";
import axios from "axios";
import { supabase } from "../../../lib/supabase";
import { Link } from "react-router-dom";

const AddSpecialities = () => {
  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    icon: null,
    card_image: null,
    header: null,
    background_image: null,
  });
 
  const [specialityId, setSpecialityId] = useState("");
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
      let iconUrl = null;
      let cardImageUrl = null;
      let headerUrl = null;
      let backgroundImageUrl = null;

      if (formData.icon) {
        iconUrl = await uploadToCloudinary(formData.icon);
      }

      if (formData.card_image) {
        cardImageUrl = await uploadToCloudinary(formData.card_image);
      }

      if (formData.header) {
        headerUrl = await uploadToCloudinary(formData.header);
      }

      if (formData.background_image) {
        backgroundImageUrl = await uploadToCloudinary(formData.background_image);
      }

      const { data: specialityData, error: insertError } = await supabase
        .from("specialities")
        .insert({
          title: formData.title,
          short_description: formData.short_description,
          icon: iconUrl,
          card_image: cardImageUrl,
          header: headerUrl,
          background_image: backgroundImageUrl,
          slug: slugify(formData.title)
        })
        .select("*");

      if (insertError) {
        throw insertError;
      }

      alert("Speciality added successfully!");
      setFormData({
        title: "",
        short_description: "",
        icon: null,
        card_image: null,
        header: null,
        background_image: null,
      });

      setSpecialityId(specialityData[0].id);
    } catch (error) {
      console.error("Error adding speciality:", error.message);
      alert("Failed to add speciality. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Add Speciality</h1>
          {specialityId === "" ? (
            <></>
          ) : (
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
          )}
        </div>
        <form onSubmit={handleSubmit}>
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
              required
            />
          </div>

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
              required
            />
          </div>

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
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="background_image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Background Image
            </label>
            <input
              type="file"
              id="background_image"
              name="background_image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
              required
            />
          </div>

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

export default AddSpecialities;
