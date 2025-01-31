import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";

const AddPayoff = () => {
  const [payoffData, setPayoffData] = useState({
    description: "",
    point_title: "",
    point_description: "",
  });
  const [payoffs, setPayoffs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingPayoffId, setEditingPayoffId] = useState(null);

  useEffect(() => {
    // Fetch existing payoffs from Supabase
    const fetchPayoffs = async () => {
      const { data, error } = await supabase.from("payoff").select("*");
      if (error) {
        console.error("Error fetching payoffs:", error.message);
      } else {
        setPayoffs(data || []);
      }
    };

    fetchPayoffs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayoffData({ ...payoffData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        description: payoffData.description,
        point_title: payoffData.point_title,
        point_description: payoffData.point_description,
      };

      if (editingPayoffId) {
        // Update an existing payoff
        const { error } = await supabase
          .from("payoff")
          .update(payload)
          .eq("id", editingPayoffId);

        if (error) {
          throw error;
        }

        // Update the local list
        setPayoffs((prev) =>
          prev.map((payoff) =>
            payoff.id === editingPayoffId ? { ...payoff, ...payload } : payoff
          )
        );
        setEditingPayoffId(null);
      } else {
        // Insert a new payoff
        const { data, error } = await supabase
          .from("payoff")
          .insert(payload)
          .select();

        if (error) {
          throw error;
        }

        // Add the new payoff to the local list
        setPayoffs((prev) => [...prev, ...data]);
      }

      // Reset the form
      setPayoffData({
        point_title: "",
        point_description: "",
      });
    } catch (error) {
      console.error("Error saving payoff:", error.message);
      alert("Failed to save payoff. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (payoff) => {
    setPayoffData({
      description: payoff.description,
      point_title: payoff.point_title,
      point_description: payoff.point_description,
    });
    setEditingPayoffId(payoff.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("payoff").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted payoff from the local list
      setPayoffs((prev) => prev.filter((payoff) => payoff.id !== id));
    } catch (error) {
      console.error("Error deleting payoff:", error.message);
      alert("Failed to delete payoff. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Payoff</h1>

        {/* Payoff Form */}
        <form onSubmit={handleSubmit}>
          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={payoffData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>

          {/* Point Title */}
          <div className="mb-4">
            <label
              htmlFor="point_title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Point Title
            </label>
            <input
              type="text"
              id="point_title"
              name="point_title"
              value={payoffData.point_title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter point title"
              required
            />
          </div>

          {/* Point Description */}
          <div className="mb-4">
            <label
              htmlFor="point_description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Point Description
            </label>
            <input
              type="text"
              id="point_description"
              name="point_description"
              value={payoffData.point_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter point description"
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
              : editingPayoffId
              ? "Update Payoff"
              : "Add Payoff"}
          </button>
        </form>

        {/* Payoff List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Payoffs</h2>
          {payoffs.length === 0 ? (
            <p>No payoffs added yet.</p>
          ) : (
            <ul className="space-y-4">
              {payoffs.map((payoff) => (
                <li
                  key={payoff.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{payoff.point_title}</p>
                    <p>{payoff.point_description}</p>
                    <p className="text-sm text-gray-500">
                      {payoff.description}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(payoff)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(payoff.id)}
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

export default AddPayoff;
