import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";
import ReactQuillEditor from "../../../components/ui/TextEditor";

const AddSpecialityFaqs = () => {
  const { id: specialityId } = useParams();

  const [faqData, setFaqData] = useState({
    speciality_id: specialityId,
    question: "",
    answer: "",
  });
  const [faqs, setFaqs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingFaqId, setEditingFaqId] = useState(null);

  useEffect(() => {
    // Fetch FAQs from Supabase on component load
    const fetchFaqs = async () => {
      const { data, error } = await supabase
        .from("speciality_faqs")
        .select("*")
        .eq("speciality_id", specialityId);
      if (error) {
        console.error("Error fetching FAQs:", error.message);
      } else {
        setFaqs(data || []);
      }
    };

    fetchFaqs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaqData({ ...faqData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingFaqId) {
        // Update an existing FAQ
        const { error } = await supabase
          .from("speciality_faqs")
          .update(faqData)
          .eq("id", editingFaqId);

        if (error) {
          throw error;
        }

        // Update the local list
        setFaqs((prev) =>
          prev.map((faq) =>
            faq.id === editingFaqId ? { ...faq, ...faqData } : faq
          )
        );
        setEditingFaqId(null);
      } else {
        // Insert a new FAQ
        const { data, error } = await supabase
          .from("speciality_faqs")
          .insert(faqData)
          .select();

        if (error) {
          throw error;
        }

        // Add the new FAQ to the local list
        setFaqs((prev) => [...prev, ...data]);
      }

      // Reset the form
      setFaqData({ speciality_id: specialityId, question: "", answer: "" });
    } catch (error) {
      console.error("Error saving FAQ:", error.message);
      alert("Failed to save FAQ. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (faq) => {
    setFaqData({ question: faq.question, answer: faq.answer });
    setEditingFaqId(faq.id);
  };

  const handleQuillChange = (value) => {
    setFaqData((prevData) => ({
      ...prevData,
      answer: value,
    }));
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("speciality_faqs")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the deleted FAQ from the local list
      setFaqs((prev) => prev.filter((faq) => faq.id !== id));
    } catch (error) {
      console.error("Error deleting FAQ:", error.message);
      alert("Failed to delete FAQ. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Add Speciality FAQs</h1>

        {/* FAQ Form */}
        <form onSubmit={handleSubmit}>
          {/* Question */}
          <div className="mb-4">
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Question
            </label>
            <input
              type="text"
              id="question"
              name="question"
              value={faqData.question}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter question"
              required
            />
          </div>

          {/* Answer */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Answer
            </label>
            <ReactQuillEditor
              value={faqData.answer}
              onChange={handleQuillChange}
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
              : editingFaqId
              ? "Update FAQ"
              : "Add FAQ"}
          </button>
        </form>

        {/* FAQ List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Added FAQs</h2>
          {faqs.length === 0 ? (
            <p>No FAQs added yet.</p>
          ) : (
            <ul className="space-y-4">
              {faqs.map((faq) => (
                <li
                  key={faq.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">Q: {faq.question}</p>
                    <p className="text-gray-700">A: {faq.answer}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(faq)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(faq.id)}
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

export default AddSpecialityFaqs;
