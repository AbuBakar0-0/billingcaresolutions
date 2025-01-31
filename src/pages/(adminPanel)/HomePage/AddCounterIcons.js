import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const AddCounterIcons = () => {
  const { id: sectionId } = useParams();

  const [counterData, setCounterData] = useState({
    section_id: sectionId,
    icon: "",
    number: 0,
    suffix: "",
  });
  const [counters, setCounters] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingCounterId, setEditingCounterId] = useState(null);

  useEffect(() => {
    // Fetch existing counters from Supabase
    const fetchCounters = async () => {
      const { data, error } = await supabase.from("counter").select("*");
      if (error) {
        console.error("Error fetching counters:", error.message);
      } else {
        setCounters(data || []);
      }
    };

    fetchCounters();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCounterData({ ...counterData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCounterData({ ...counterData, icon_file: file });
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
      let iconUrl = counterData.icon;

      // Upload icon to Cloudinary if a new file is selected
      if (counterData.icon_file) {
        iconUrl = await uploadToCloudinary(counterData.icon_file);
      }

      const payload = {
        section_id: sectionId,
        icon: iconUrl,
        number: counterData.number,
        suffix: counterData.suffix,
      };

      if (editingCounterId) {
        // Update an existing counter
        const { error } = await supabase
          .from("counter")
          .update(payload)
          .eq("id", editingCounterId);

        if (error) {
          throw error;
        }

        // Update the local list
        setCounters((prev) =>
          prev.map((counter) =>
            counter.id === editingCounterId ? { ...counter, ...payload } : counter
          )
        );
        setEditingCounterId(null);
      } else {
        // Insert a new counter
        const { data, error } = await supabase
          .from("counter")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new counter to the local list
        setCounters((prev) => [...prev, ...data]);
      }

      // Reset the form
      setCounterData({ section_id: sectionId, icon: "", number: 0, suffix: "" });
    } catch (error) {
      console.error("Error saving counter:", error.message);
      alert("Failed to save counter. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (counter) => {
    setCounterData({ icon: counter.icon, number: counter.number, suffix: counter.suffix });
    setEditingCounterId(counter.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("counter").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted counter from the local list
      setCounters((prev) => prev.filter((counter) => counter.id !== id));
    } catch (error) {
      console.error("Error deleting counter:", error.message);
      alert("Failed to delete counter. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Counter</h1>

        {/* Counter Form */}
        <form onSubmit={handleSubmit}>
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
              required
            />
          </div>

          {/* Number */}
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={counterData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter number"
              required
            />
          </div>

          {/* Suffix */}
          <div className="mb-4">
            <label
              htmlFor="suffix"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Suffix
            </label>
            <input
              type="text"
              id="suffix"
              name="suffix"
              value={counterData.suffix}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter suffix (optional)"
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
              : editingCounterId
              ? "Update Counter"
              : "Add Counter"}
          </button>
        </form>

        {/* Counter List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Counters</h2>
          {counters.length === 0 ? (
            <p>No counters added yet.</p>
          ) : (
            <ul className="space-y-4">
              {counters.map((counter) => (
                <li
                  key={counter.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{counter.number} {counter.suffix}</p>
                    {counter.icon && (
                      <img
                        src={counter.icon}
                        alt={`Counter ${counter.number}`}
                        className="h-12 mt-2"
                      />
                    )}
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(counter)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(counter.id)}
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

export default AddCounterIcons;
