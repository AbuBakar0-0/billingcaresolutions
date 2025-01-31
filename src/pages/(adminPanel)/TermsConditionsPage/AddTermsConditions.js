import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";

const AddPrivacyPolicy = () => {

  const [policyData, setPolicyData] = useState({
    title: "",
    description: "",
    point_title: "",
    point_description: "",
  });

  const [policies, setPolicies] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingPolicyId, setEditingPolicyId] = useState(null);

  // Fetch Privacy Policies on Component Load
  useEffect(() => {
    const fetchPolicies = async () => {
      const { data, error } = await supabase.from("terms_conditions").select("*");

      if (error) {
        console.error("Error fetching policies:", error.message);
      } else {
        setPolicies(data || []);
      }
    };

    fetchPolicies();
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPolicyData({ ...policyData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingPolicyId) {
        // Update an existing policy
        const { error } = await supabase
          .from("terms_conditions")
          .update(policyData)
          .eq("id", editingPolicyId);

        if (error) throw error;

        // Update local list
        setPolicies((prev) =>
          prev.map((policy) =>
            policy.id === editingPolicyId ? { ...policy, ...policyData } : policy
          )
        );

        setEditingPolicyId(null);
      } else {
        // Insert a new policy
        const { data, error } = await supabase
          .from("terms_conditions")
          .insert(policyData)
          .select();

        if (error) throw error;

        // Add to local list
        setPolicies((prev) => [...prev, ...data]);
      }

      // Reset the form
      setPolicyData({ point_title: "", point_description: "" });
    } catch (error) {
      console.error("Error saving policy:", error.message);
      alert("Failed to save policy. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Edit
  const handleEdit = (policy) => {
    setPolicyData({
      title: policy.title,
      description: policy.description,
      point_title: policy.point_title,
      point_description: policy.point_description,
    });
    setEditingPolicyId(policy.id);
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("terms_conditions").delete().eq("id", id);

      if (error) throw error;

      // Remove from local list
      setPolicies((prev) => prev.filter((policy) => policy.id !== id));
    } catch (error) {
      console.error("Error deleting policy:", error.message);
      alert("Failed to delete policy. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Add Terms & Conditions</h1>

        {/* Policy Form */}
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={policyData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={policyData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
              
            ></textarea>
          </div>

          {/* Point Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Point Title</label>
            <input
              type="text"
              name="point_title"
              value={policyData.point_title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter point title"
              
            />
          </div>

          {/* Point Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Point Description</label>
            <textarea
              name="point_description"
              value={policyData.point_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter point description"
              
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white px-4 py-2 rounded-md transition`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : editingPolicyId ? "Update Policy" : "Add Policy"}
          </button>
        </form>

        {/* Policies List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
          {policies.length === 0 ? (
            <p>No terms added yet.</p>
          ) : (
            <ul className="space-y-4">
              {policies.map((policy) => (
                <li
                  key={policy.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">Title: {policy.title}</p>
                    <p className="text-gray-700">Description: {policy.description}</p>
                    <p className="font-medium">Point Title: {policy.point_title}</p>
                    <p className="text-gray-700">Point Description: {policy.point_description}</p>
                  </div>
                  <div className="space-x-2">
                    <button className="text-blue-500 hover:underline" onClick={() => handleEdit(policy)}>
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline" onClick={() => handleDelete(policy.id)}>
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

export default AddPrivacyPolicy;
