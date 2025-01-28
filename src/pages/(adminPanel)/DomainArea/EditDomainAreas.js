import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import axios from "axios";
import { supabase } from "./../../../lib/supabase";
import { useParams, useNavigate } from "react-router-dom";

const EditDomainAreas = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    link: "",
    img: null,
    flag: null,
  });

  const [existingData, setExistingData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchDomainArea = async () => {
      try {
        const { data, error } = await supabase
          .from("domainareas")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        setExistingData(data);
        setFormData({
          title: data.title,
          link: data.link,
          img: null,
          flag: null,
        });
      } catch (error) {
        console.error("Error fetching domain area:", error.message);
      }
    };

    fetchDomainArea();
  }, [id]);

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
      let imgUrl = existingData.img;
      let flagUrl = existingData.flag;

      // Upload img to Cloudinary if updated
      if (formData.img) {
        imgUrl = await uploadToCloudinary(formData.img);
      }

      // Upload flag to Cloudinary if updated
      if (formData.flag) {
        flagUrl = await uploadToCloudinary(formData.flag);
      }

      // Update data in the 'domainAreas' table
      const { error: updateError } = await supabase
        .from("domainareas")
        .update({
          title: formData.title,
          link: formData.link,
          img: imgUrl,
          flag: flagUrl,
        })
        .eq("id", id);

      if (updateError) {
        throw updateError;
      }

      alert("Domain area updated successfully!");
      navigate("/allDomainAreas");
    } catch (error) {
      console.error("Error updating domain area:", error.message);
      alert("Failed to update domain area. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <DashboardLayout>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Edit Domain Area</h1>
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
              value={formData.link}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter link"
              required
            />
          </div>

          {/* Img File */}
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload New Image (Optional)
            </label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
          </div>

          {/* Flag File */}
          <div className="mb-4">
            <label
              htmlFor="flag"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload New Flag (Optional)
            </label>
            <input
              type="file"
              id="flag"
              name="flag"
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

export default EditDomainAreas;
