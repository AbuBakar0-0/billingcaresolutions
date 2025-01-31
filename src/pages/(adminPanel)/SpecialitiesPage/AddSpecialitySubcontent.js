import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const AddSpecialitySubcontent = () => {
  const { id: specialitiesId, content_no: contentNo } = useParams();

  const [subcontentData, setSubcontentData] = useState({
    speciality_id: specialitiesId,
    content_no: parseInt(contentNo, 10),
    detail_title: "",
    subcontent_title: "",
    title: "",
    description: "",
  });
  const [subcontents, setSubcontents] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingSubcontentId, setEditingSubcontentId] = useState(null);

  useEffect(() => {
    // Fetch Subcontent from Supabase on component load
    const fetchSubcontents = async () => {
      const { data, error } = await supabase
        .from("specialities_content")
        .select("*")
        .eq("speciality_id", specialitiesId)
        .eq("content_no", contentNo);

      if (error) {
        console.error("Error fetching subcontents:", error.message);
      } else {
        setSubcontents(data || []);
      }
    };

    fetchSubcontents();
  }, [specialitiesId, contentNo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubcontentData({ ...subcontentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingSubcontentId) {
        // Update an existing subcontent
        const { error } = await supabase
          .from("specialities_content")
          .update(subcontentData)
          .eq("id", editingSubcontentId);

        if (error) {
          throw error;
        }

        // Update the local list
        setSubcontents((prev) =>
          prev.map((subcontent) =>
            subcontent.id === editingSubcontentId
              ? { ...subcontent, ...subcontentData }
              : subcontent
          )
        );
        setEditingSubcontentId(null);
      } else {
        // Insert a new subcontent
        const { data, error } = await supabase
          .from("specialities_content")
          .insert(subcontentData)
          .select();

        if (error) {
          throw error;
        }

        // Add the new subcontent to the local list
        setSubcontents((prev) => [...prev, ...data]);
      }

      // Reset the form
      setSubcontentData({
        speciality_id: specialitiesId,
        content_no: parseInt(contentNo, 10),

        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error saving subcontent:", error.message);
      alert("Failed to save subcontent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (subcontent) => {
    setSubcontentData({
      detail_title: subcontent.detail_title,
      subcontent_title: subcontent.subcontent_title,
      title: subcontent.title,
      description: subcontent.description,
    });
    setEditingSubcontentId(subcontent.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("specialities_content")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted subcontent from the local list
      setSubcontents((prev) =>
        prev.filter((subcontent) => subcontent.id !== id)
      );
    } catch (error) {
      console.error("Error deleting subcontent:", error.message);
      alert("Failed to delete subcontent. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Add Speciality Subcontent</h1>

        {/* Subcontent Form */}
        <form onSubmit={handleSubmit}>
          {/* Speciality Title */}
          <div className="mb-4">
            <label
              htmlFor="subcontent_title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content Title
            </label>
            <input
              type="text"
              id="subcontent_title"
              name="subcontent_title"
              value={subcontentData.subcontent_title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter speciality title"
              required
            />
          </div>

          {/* Detail Title */}
          <div className="mb-4">
            <label
              htmlFor="detail_title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Detail Title
            </label>
            <input
              type="text"
              id="detail_title"
              name="detail_title"
              value={subcontentData.detail_title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter detail title"
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Item Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={subcontentData.title}
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
              Item Description
            </label>
            <textarea
              id="description"
              name="description"
              value={subcontentData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
              required
            ></textarea>
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
              : editingSubcontentId
              ? "Update Subcontent"
              : "Add Subcontent"}
          </button>
        </form>

        {/* Subcontent List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Subcontents</h2>
          {subcontents.length === 0 ? (
            <p>No subcontents added yet.</p>
          ) : (
            <ul className="space-y-4">
              {subcontents.map((subcontent) => (
                <li
                  key={subcontent.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">Title: {subcontent.title}</p>
                    <p className="text-gray-700">
                      Description: {subcontent.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleEdit(subcontent)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(subcontent.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
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

export default AddSpecialitySubcontent;
