import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("date", { ascending: false });
        if (error) throw error;
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err.message || "An error occurred while fetching blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (blogId, imageUrl) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    setLoading(true);
    try {
      // Delete the blog entry from Supabase
      const { error } = await supabase.from("blogs").delete().eq("id", blogId);
      if (error) throw error;

      // Remove the blog from local state
      setBlogs((prev) => prev.filter((blog) => blog.id !== blogId));
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError(err.message || "An error occurred while deleting the blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">All Blogs</h1>
        <Link
          to="/addBlogs"
          className="bg-secondary rounded-lg px-4 py-2 text-white"
        >
          Add +
        </Link>
      </div>
      {loading ? (
        <p>Loading</p>
      ) : blogs.length > 0 ? (
        <ul className="w-full flex flex-wrap justify-start items-start gap-4">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="w-[24%] h-72 p-4 bg-gray-100 rounded shadow relative"
            >
              <div className="w-full flex justify-center items-center">
                <img src={blog.image} alt="" className="mb-4 h-32 w-auto" />
              </div>
              <h2 className="text-xl font-semibold h-20">{blog.title}</h2>
              <div className="flex space-x-2 mt-2">
                <Link
                  to={`/editBlog/${blog.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog.id, blog.image)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs found.</p>
      )}
    </DashboardLayout>
  );
};

export default AllBlogs;
