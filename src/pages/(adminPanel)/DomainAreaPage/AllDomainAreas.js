import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";
import { Link } from "react-router-dom";

const AllDomainAreas = () => {
  const [domainAreas, setDomainAreas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("domainareas")
          .select("*")
          .order("title", { ascending: true });
        if (error) throw error;
        setDomainAreas(data);
      } catch (err) {
        console.error("Error fetching domainAreas:", err);
        setError(err.message || "An error occurred while fetching domainAreas.");
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
      const { error } = await supabase.from("domainareas").delete().eq("id", id);
      if (error) throw error;

      // Remove the blog from local state
      setDomainAreas((prev) => prev.filter((domainArea) => domainArea.id !== id));
    } catch (err) {
      console.error("Error deleting domainArea:", err);
      setError(err.message || "An error occurred while deleting the domainArea.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">All Domain Areas</h1>
        <Link
          to="/addDomainAreas"
          className="bg-secondary rounded-lg px-4 py-2 text-white"
        >
          Add +
        </Link>
      </div>
      {loading ? (
        <p>Loading</p>
      ) : domainAreas.length > 0 ? (
        <ul className="w-full flex flex-wrap justify-start items-start gap-4">
          {domainAreas.map((domainArea) => (
            <li
              key={domainArea.id}
              className="w-[24%] h-72 p-4 bg-gray-100 rounded shadow relative"
            >
              <div className="w-full flex justify-center items-center p-5" style={{ backgroundImage: `url("${domainArea.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <img src={domainArea.flag} alt="" className="mb-4 h-32 w-auto" />
              </div>
              <h2 className="text-xl font-semibold">{domainArea.title}</h2>
              <div className="flex space-x-2 mt-2">
                <Link
                  to={`/editDomainAreas/${domainArea.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(domainArea.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No domainAreas found.</p>
      )}
    </DashboardLayout>
  );
};

export default AllDomainAreas;
