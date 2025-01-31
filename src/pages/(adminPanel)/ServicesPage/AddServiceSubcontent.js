import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const AddServiceSubcontent = () => {
  const { id: servicesId, content_no: contentNo } = useParams();

  const [subcontentData, setSubcontentData] = useState({
    service_id: servicesId,
    content_no: parseInt(contentNo, 10),
    subcontent_title: "",
    detail_title: "",
    detail_description: "",
    title: "",
    description: "",
  });
  const [subcontents, setSubcontents] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingSubcontentId, setEditingSubcontentId] = useState(null);

  useEffect(() => {
    const fetchSubcontents = async () => {
      const { data, error } = await supabase
        .from("service_content")
        .select("*")
        .eq("service_id", servicesId)
        .eq("content_no", contentNo);

      if (error) {
        console.error("Error fetching subcontents:", error.message);
      } else {
        setSubcontents(data || []);
      }
    };

    fetchSubcontents();
  }, [servicesId, contentNo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubcontentData({ ...subcontentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingSubcontentId) {
        const { error } = await supabase
          .from("service_content")
          .update(subcontentData)
          .eq("id", editingSubcontentId);

        if (error) {
          throw error;
        }

        setSubcontents((prev) =>
          prev.map((subcontent) =>
            subcontent.id === editingSubcontentId
              ? { ...subcontent, ...subcontentData }
              : subcontent
          )
        );
        setEditingSubcontentId(null);
      } else {
        const { data, error } = await supabase
          .from("service_content")
          .insert(subcontentData)
          .select();

        if (error) {
          throw error;
        }

        setSubcontents((prev) => [...prev, ...data]);
      }

      setSubcontentData({
        service_id: servicesId,
        content_no: parseInt(contentNo, 10),
        detail_description:"",
        detail_title:"",
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
      subcontent_title: subcontent.subcontent_title,
      detail_title: subcontent.detail_title,
      detail_description: subcontent.detail_description,
      title: subcontent.title,
      description: subcontent.description,
    });
    setEditingSubcontentId(subcontent.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("service_content")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

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
        <h1 className="text-2xl font-bold mb-4">Add Service Subcontent</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="subcontent_title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subcontent Title
            </label>
            <input
              type="text"
              id="subcontent_title"
              name="subcontent_title"
              value={subcontentData.subcontent_title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter subcontent title"
            />
          </div>

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

          <div className="mb-4">
            <label
              htmlFor="detail_description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Detail Description
            </label>
            <textarea
              id="detail_description"
              name="detail_description"
              value={subcontentData.detail_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter detail description"
            ></textarea>
          </div>

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
              value={subcontentData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
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
              value={subcontentData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

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
                    <button
                      onClick={() => handleEdit(subcontent)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>

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

export default AddServiceSubcontent;
