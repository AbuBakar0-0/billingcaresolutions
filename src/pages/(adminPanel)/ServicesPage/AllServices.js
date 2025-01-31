import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("services") // Update table name
          .select("*")
          .order("service_no", { ascending: true }); // Adjust field if needed
        if (error) throw error;
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err.message || "An error occurred while fetching services.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (!confirmDelete) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("services") // Update table name
        .delete()
        .eq("id", id);
      if (error) throw error;

      setServices((prev) => prev.filter((service) => service.id !== id));
    } catch (err) {
      console.error("Error deleting service:", err);
      setError(err.message || "An error occurred while deleting the service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">All Services</h1>
        <Link
          to="/addServices"
          className="bg-secondary rounded-lg px-4 py-2 text-white"
        >
          Add +
        </Link>
      </div>
      {loading ? (
        <p>Loading</p>
      ) : services.length > 0 ? (
        <ul className="w-full flex flex-wrap justify-start items-start gap-4">
          {services.map((service) => (
            <li
              key={service.id}
              className="w-[24%] p-4 bg-gray-100 rounded shadow relative"
            >
              <img src={service.icon} alt="" className="size-20" />
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <div className="flex space-x-2 mt-2">
                <Link
                  to={`/editServices/${service.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No services found.</p>
      )}
    </DashboardLayout>
  );
};

export default AllServices;
