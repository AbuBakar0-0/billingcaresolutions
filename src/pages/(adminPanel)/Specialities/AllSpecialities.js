import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "./../layout";
import { Link } from "react-router-dom";

const AllSpecialities = () => {
  const [specialities, setSpecialities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("specialities")
          .select("*")
          .order("title", { ascending: true });
        if (error) throw error;
        setSpecialities(data);
      } catch (err) {
        console.error("Error fetching specialities:", err);
        setError(
          err.message || "An error occurred while fetching specialities."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this domain area?"
    );
    if (!confirmDelete) return;

    setLoading(true);
    try {
      // Delete the blog entry from Supabase
      const { error } = await supabase
        .from("specialities")
        .delete()
        .eq("id", id);
      if (error) throw error;

      // Remove the blog from local state
      setSpecialities((prev) =>
        prev.filter((specialities) => specialities.id !== id)
      );
    } catch (err) {
      console.error("Error deleting specialities:", err);
      setError(
        err.message || "An error occurred while deleting the specialities."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">All Specialities</h1>
        <Link
          to="/addSpecialities"
          className="bg-secondary rounded-lg px-4 py-2 text-white"
        >
          Add +
        </Link>
      </div>
      {loading ? (
        <p>Loading</p>
      ) : specialities.length > 0 ? (
        <ul className="w-full flex flex-wrap justify-start items-start gap-4">
          {specialities.map((speciality) => (
            <li
              key={speciality.id}
              className="w-[24%] p-4 bg-gray-100 rounded shadow relative"
            >
              <h2 className="text-xl font-semibold">{speciality.title}</h2>
              <div className="flex space-x-2 mt-2">
                <Link
                  to={`/editSpecialities/${speciality.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(speciality.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No specialities found.</p>
      )}
    </DashboardLayout>
  );
};

export default AllSpecialities;
