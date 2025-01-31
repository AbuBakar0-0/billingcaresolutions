import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const AddLetUsHandle = () => {
  const { id: sectionId } = useParams();

  const [formData, setFormData] = useState({
    section_id: sectionId,
    title: "",
    item: "", // Updated to item field
  });
  const [entries, setEntries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingEntryId, setEditingEntryId] = useState(null);

  useEffect(() => {
    // Fetch existing entries from Supabase
    const fetchEntries = async () => {
      const { data, error } = await supabase.from("let_us_handle").select("*");
      if (error) {
        console.error("Error fetching entries:", error.message);
      } else {
        setEntries(data || []);
      }
    };

    fetchEntries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        section_id: sectionId,
        title: formData.title,
        item: formData.item, // Updated to item field
      };

      if (editingEntryId) {
        // Update an existing entry
        const { error } = await supabase
          .from("let_us_handle")
          .update(payload)
          .eq("id", editingEntryId);

        if (error) {
          throw error;
        }

        // Update the local list
        setEntries((prev) =>
          prev.map((entry) =>
            entry.id === editingEntryId ? { ...entry, ...payload } : entry
          )
        );
        setEditingEntryId(null);
      } else {
        // Insert a new entry
        const { data, error } = await supabase
          .from("let_us_handle")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new entry to the local list
        setEntries((prev) => [...prev, ...data]);
      }

      // Reset the form
      setFormData({ section_id: sectionId, title: "", item: "" });
    } catch (error) {
      console.error("Error saving entry:", error.message);
      alert("Failed to save entry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (entry) => {
    setFormData({ title: entry.title, item: entry.item });
    setEditingEntryId(entry.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("let_us_handle").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted entry from the local list
      setEntries((prev) => prev.filter((entry) => entry.id !== id));
    } catch (error) {
      console.error("Error deleting entry:", error.message);
      alert("Failed to delete entry. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Let Us Handle Entries</h1>

        {/* Entry Form */}
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
            />
          </div>

          {/* Item */}
          <div className="mb-4">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Item
            </label>
            <input
              type="text"
              id="item"
              name="item"
              value={formData.item}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter item"
              required
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
            {isSubmitting
              ? "Submitting..."
              : editingEntryId
              ? "Update Entry"
              : "Add Entry"}
          </button>
        </form>

        {/* Entry List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Entries</h2>
          {entries.length === 0 ? (
            <p>No entries added yet.</p>
          ) : (
            <ul className="space-y-4">
              {entries.map((entry) => (
                <li
                  key={entry.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{entry.title}</p>
                    <p>{entry.item}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(entry)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(entry.id)}
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

export default AddLetUsHandle;
