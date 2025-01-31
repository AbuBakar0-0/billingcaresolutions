import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import axios from "axios";
import { supabase } from "../../../lib/supabase";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditServices = () => {
  const { id: serviceId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    icon: null,
    image: null,
    header: null,
    description: "",
    content_title: "",
    content_description: "",
    faqs_header_description: "", // Added the new field
    service_no: "", // Added service_no
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch the existing service data
    const fetchService = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("id", serviceId)
        .single();

      if (error) {
        console.error("Error fetching service:", error.message);
        return;
      }

      setFormData({
        title: data.title,
        icon: data.icon,
        image: data.image,
        header: data.header,
        description: data.description,
        content_title: data.content_title,
        content_description: data.content_description,
        faqs_header_description: data.faqs_header_description || "", // Make sure to handle this field
        service_no: data.service_no || "", // Make sure to handle this field
      });
    };

    fetchService();
  }, [serviceId]);

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
      let imageUrl = formData.image;
      let headerUrl = formData.header;

      // Upload new files to Cloudinary if they are updated
      if (formData.icon instanceof File) {
        iconUrl = await uploadToCloudinary(formData.icon);
      }

      if (formData.image instanceof File) {
        imageUrl = await uploadToCloudinary(formData.image);
      }

      if (formData.header instanceof File) {
        headerUrl = await uploadToCloudinary(formData.header);
      }

      // Update the service in the database
      const { error } = await supabase
        .from("services")
        .update({
          title: formData.title,
          icon: iconUrl,
          image: imageUrl,
          header: headerUrl,
          description: formData.description,
          content_title: formData.content_title,
          content_description: formData.content_description,
          faqs_header_description: formData.faqs_header_description, // Update the new field
          service_no: formData.service_no, // Update service_no
        })
        .eq("id", serviceId);

      if (error) {
        throw error;
      }

      alert("Service updated successfully!");
      navigate("/allServices"); // Redirect to the list page
    } catch (error) {
      console.error("Error updating service:", error.message);
      alert("Failed to update service. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Edit Service</h1>
          <div className="flex justify-end items-center gap-2">
            <Link
              to={`/addServiceFaqs/${serviceId}`}
              className="bg-secondary rounded-lg px-4 py-2 text-white"
            >
              Add Faqs
            </Link>
            <Link
              to={`/addServiceSubcontent/${serviceId}/1`}
              className="bg-secondary rounded-lg px-4 py-2 text-white"
            >
              Add Subcontent 1
            </Link>
            <Link
              to={`/addServiceSubcontent/${serviceId}/2`}
              className="bg-secondary rounded-lg px-4 py-2 text-white"
            >
              Add Subcontent 2
            </Link>
            <Link
              to={`/addServiceSubcontent/${serviceId}/3`}
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

          {/* Service Number */}
          <div className="mb-4">
            <label
              htmlFor="service_no"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service Number
            </label>
            <input
              type="text"
              id="service_no"
              name="service_no"
              value={formData.service_no}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service number"
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
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a description"
              required
            />
          </div>

          {/* FAQ Header Description */}
          <div className="mb-4">
            <label
              htmlFor="faqs_header_description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              FAQ Header Description
            </label>
            <input
              type="text"
              id="faqs_header_description"
              name="faqs_header_description"
              value={formData.faqs_header_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter FAQ header description"
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

          {/* Image File */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Card Background Image
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

          {/* Content Title */}
          <div className="mb-4">
            <label
              htmlFor="content_title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content Title
            </label>
            <input
              type="text"
              id="content_title"
              name="content_title"
              value={formData.content_title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter content title"
            />
          </div>

          {/* Content Description */}
          <div className="mb-4">
            <label
              htmlFor="content_description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content Description
            </label>
            <textarea
              id="content_description"
              name="content_description"
              value={formData.content_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter content description"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Service"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditServices;
