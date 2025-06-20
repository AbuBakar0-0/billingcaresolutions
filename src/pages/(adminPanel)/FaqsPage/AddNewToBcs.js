import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";

const AddNewToBcs = () => {
  const [serviceData, setServiceData] = useState({
    title: "",
    icon_file: null,
    link: "",
  });
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState(null);

  useEffect(() => {
    // Fetch existing services from Supabase
    const fetchServices = async () => {
      const { data, error } = await supabase.from("new_to_bcs").select("*");
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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setServiceData((prevData) => ({ ...prevData, [name]: files[0] }));
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
      const iconUrl = serviceData.icon_file
        ? await uploadToCloudinary(serviceData.icon_file)
        : null;

      const payload = {
        title: serviceData.title,
        icon: iconUrl,
        link: serviceData.link,
      };

      if (editingServiceId) {
        // Update an existing service
        const { error } = await supabase
          .from("new_to_bcs")
          .update(payload)
          .eq("id", editingServiceId);

        if (error) {
          throw error;
        }

        // Update the local list
        setServices((prev) =>
          prev.map((service) =>
            service.id === editingServiceId
              ? { ...service, ...payload }
              : service
          )
        );
        setEditingServiceId(null);
      } else {
        // Insert a new service
        const { data, error } = await supabase
          .from("new_to_bcs")
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
        title: "",
        icon_file: null,
        link: "",
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
      title: service.title,
      icon_file: service.icon,
      link: service.link,
    });
    setEditingServiceId(service.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("new_to_bcs").delete().eq("id", id);

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
        <h1 className="text-2xl font-bold mb-4">Add New To BCS</h1>

        {/* Service Form */}
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
              value={serviceData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              required
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
              name="icon_file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
          </div>

          {/* Link */}
          <div className="mb-4">
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Link
            </label>
            <input
              type="text"
              id="link"
              name="link"
              value={serviceData.link}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter link"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${
              isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white py-2 rounded-md`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Save Service"}
          </button>
        </form>

        {/* Services Table */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Services</h2>
          {services.length === 0 ? (
            <p>No services available.</p>
          ) : (
            <ul>
              {services.map((service) => (
                <li
                  key={service.id}
                  className="mb-4 flex items-center justify-between"
                >
                  <div>
                    <div className="flex gap-4">
                      <img
                        src={service.icon}
                        alt=""
                        className="size-8"
                      />
                    </div>
                    <h3 className="text-lg font-medium">{service.title}</h3>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEdit(service)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="text-red-500 hover:text-red-600"
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

export default AddNewToBcs;
