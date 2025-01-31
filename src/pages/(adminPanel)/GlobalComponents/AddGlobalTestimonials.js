import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "./../../../lib/supabase";

const AddGlobalTestimonials = () => {
  const [testimonialData, setTestimonialData] = useState({
    author: "",
    quote: "",
  });
  const [testimonials, setTestimonials] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);

  useEffect(() => {
    // Fetch Testimonials from Supabase on component load
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("global_testimonials")
        .select("*");
      if (error) {
        console.error("Error fetching testimonials:", error.message);
      } else {
        setTestimonials(data || []);
      }
    };

    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData({ ...testimonialData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingTestimonialId) {
        // Update an existing Testimonial
        const { error } = await supabase
          .from("global_testimonials")
          .update(testimonialData)
          .eq("id", editingTestimonialId);

        if (error) {
          throw error;
        }

        // Update the local list
        setTestimonials((prev) =>
          prev.map((testimonial) =>
            testimonial.id === editingTestimonialId
              ? { ...testimonial, ...testimonialData }
              : testimonial
          )
        );
        setEditingTestimonialId(null);
      } else {
        // Insert a new Testimonial
        const { data, error } = await supabase
          .from("global_testimonials")
          .insert(testimonialData)
          .select();

        if (error) {
          throw error;
        }

        // Add the new Testimonial to the local list
        setTestimonials((prev) => [...prev, ...data]);
      }

      // Reset the form
      setTestimonialData({ author: "", quote: "" });
    } catch (error) {
      console.error("Error saving Testimonial:", error.message);
      alert("Failed to save Testimonial. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (testimonial) => {
    setTestimonialData({ author: testimonial.author, quote: testimonial.quote });
    setEditingTestimonialId(testimonial.id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("global_testimonials")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted Testimonial from the local list
      setTestimonials((prev) => prev.filter((testimonial) => testimonial.id !== id));
    } catch (error) {
      console.error("Error deleting Testimonial:", error.message);
      alert("Failed to delete Testimonial. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Add Global Testimonials</h1>

        {/* Testimonial Form */}
        <form onSubmit={handleSubmit}>
          {/* Author */}
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={testimonialData.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author"
              required
            />
          </div>

          {/* Quote */}
          <div className="mb-4">
            <label
              htmlFor="quote"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Quote
            </label>
            <textarea
              id="quote"
              name="quote"
              value={testimonialData.quote}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quote"
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
              : editingTestimonialId
              ? "Update Testimonial"
              : "Add Testimonial"}
          </button>
        </form>

        {/* Testimonial List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added Testimonials</h2>
          {testimonials.length === 0 ? (
            <p>No Testimonials added yet.</p>
          ) : (
            <ul className="space-y-4">
              {testimonials.map((testimonial) => (
                <li
                  key={testimonial.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">Author: {testimonial.author}</p>
                    <p className="text-gray-700">Quote: {testimonial.quote}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(testimonial)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(testimonial.id)}
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

export default AddGlobalTestimonials;
