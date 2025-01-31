import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import axios from "axios";

const AddBestServices = () => {
  const [serviceData, setServiceData] = useState({
    service_no: "", // New field for service number
    title: "",
    description: "",
    icon: "", // Field to store the icon URL
  });
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState(null);

  useEffect(() => {
    // Fetch existing services from Supabase
    const fetchServices = async () => {
      const { data, error } = await supabase.from("best_services").select("*").order("service_no");
      if (error) {
        console.error("Error fetching services:", error.message);
      } else {
        setServices(data || []);
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const url = await uploadToCloudinary(file); // Upload image to Cloudinary
        setServiceData({ ...serviceData, icon: url }); // Set icon URL
      } catch (error) {
        console.error("Error uploading icon:", error.message);
        alert("Failed to upload icon. Please try again.");
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
        service_no: serviceData.service_no, // Include the service number
        title: serviceData.title,
        description: serviceData.description,
        icon: serviceData.icon, // Store the icon URL in the payload
      };

      if (editingServiceId) {
        // Update an existing service
        const { error } = await supabase
          .from("best_services")
          .update(payload)
          .eq("id", editingServiceId);

        if (error) {
          throw error;
        }

        // Update the local list
        setServices((prev) =>
          prev.map((service) =>
            service.id === editingServiceId ? { ...service, ...payload } : service
          )
        );
        setEditingServiceId(null);
      } else {
        // Insert a new service
        const { data, error } = await supabase
          .from("best_services")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new service to the local list
        setServices((prev) => [...prev, ...data]);
      }

      // Reset the form
      setServiceData({
        service_no: "", // Reset service_no
        title: "",
        description: "",
        icon: "", // Clear the icon URL
      });
    } catch (error) {
      console.error("Error saving service:", error.message);
      alert("Failed to save service. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (service) => {
    setServiceData({
      service_no: service.service_no, // Include service_no when editing
      title: service.title,
      description: service.description,
      icon: service.icon, // Include the icon URL when editing
    });
    setEditingServiceId(service.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("best_services").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted service from the local list
      setServices((prev) => prev.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Error deleting service:", error.message);
      alert("Failed to delete service. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Best Service</h1>

        {/* Best Service Form */}
        <form onSubmit={handleSubmit}>
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
              value={serviceData.service_no}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service number"
              required
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={serviceData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service title"
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
              value={serviceData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>

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
            {serviceData.icon && (
              <div className="mt-2">
                <img
                  src={serviceData.icon}
                  alt="Service Icon"
                  className="w-16 h-16 object-cover"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white px-4 py-2 rounded-md transition`}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : editingServiceId
              ? "Update Service"
              : "Add Service"}
          </button>
        </form>

        {/* Service List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Services</h2>
          {services.length === 0 ? (
            <p>No services added yet.</p>
          ) : (
            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{service.title}</p>
                    <p>{service.description}</p>
                    <p className="text-sm text-gray-600">Service No: {service.service_no}</p>
                    {service.icon && (
                      <img
                        src={service.icon}
                        alt="Service Icon"
                        className="w-8 h-8 object-cover mt-2"
                      />
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="text-red-600 hover:underline"
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

export default AddBestServices;
