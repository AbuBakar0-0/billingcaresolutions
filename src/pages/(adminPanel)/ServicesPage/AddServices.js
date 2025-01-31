import React, { useState } from "react";
import DashboardLayout from "../layout";
import axios from "axios";
import { supabase } from "../../../lib/supabase";
import { Link } from "react-router-dom";

const AddServices = () => {
  const [formData, setFormData] = useState({
    title: "",
    icon: null,
    image: null,
    header: null,
    description: "",
    content_title: "",
    content_description: "",
    service_no: "", // Added service_no to formData
    faqs_header_description: "", // New field added
  });
  const [serviceId, setServiceId] = useState("");
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
      let imageUrl = null;
      let headerUrl = null;

      if (formData.icon) {
        iconUrl = await uploadToCloudinary(formData.icon);
      }

      if (formData.image) {
        imageUrl = await uploadToCloudinary(formData.image);
      }

      if (formData.header) {
        headerUrl = await uploadToCloudinary(formData.header);
      }

      const { data: serviceData, error: insertError } = await supabase
        .from("services")
        .insert({
          title: formData.title,
          icon: iconUrl,
          image: imageUrl,
          header: headerUrl,
          description: formData.description,
          content_title: formData.content_title,
          content_description: formData.content_description,
          service_no: formData.service_no, // Insert the service_no
          faqs_header_description: formData.faqs_header_description, // Insert faqs_header_description
        })
        .select("*");

      if (insertError) {
        throw insertError;
      }

      alert("Service added successfully!");
      setFormData({
        title: "",
        icon: null,
        image: null,
        header: null,
        description: "",
        content_title: "",
        content_description: "",
        service_no: "", // Reset service_no field
        faqs_header_description: "", // Reset faqs_header_description field
      });

      setServiceId(serviceData[0].id);
    } catch (error) {
      console.error("Error adding service:", error.message);
      alert("Failed to add service. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Add Service</h1>
          {serviceId === "" ? (
            <></>
          ) : (
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
              placeholder="Enter description"
              required
            />
          </div>

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
              required
            />
          </div>

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
              required
            />
          </div>

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
              required
            />
          </div>

          <button
            type="submit"
            className={`bg-primary text-white px-4 py-2 rounded-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddServices;
