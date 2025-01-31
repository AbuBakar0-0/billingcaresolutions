import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import DashboardLayout from "../layout";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("articles").select("*");
        if (error) throw error;
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err.message || "An error occurred while fetching articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (articleId, imageUrl) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );
    if (!confirmDelete) return;

    setLoading(true);
    try {
      // Delete the article entry from Supabase
      const { error } = await supabase
        .from("articles")
        .delete()
        .eq("id", articleId);
      if (error) throw error;

      // Remove the article from local state
      setArticles((prev) => prev.filter((article) => article.id !== articleId));
    } catch (err) {
      console.error("Error deleting article:", err);
      setError(err.message || "An error occurred while deleting the article.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold mb-4">All Articles</h1>
        <Link
          to="/addArticles"
          className="bg-secondary rounded-lg px-4 py-2 text-white"
        >
          Add +
        </Link>
      </div>
      {loading ? (
        <p>Loading</p>
      ) : articles.length > 0 ? (
        <ul className="w-full flex flex-wrap justify-start items-start gap-4">
          {articles.map((article) => (
            <li
              key={article.id}
              className="w-[24%] h-72 p-4 bg-gray-100 rounded shadow relative"
            >
              <div className="w-full flex justify-center items-center">
                <img src={article.image} alt="" className="mb-4 h-32 w-auto" />
              </div>
              <h2 className="text-xl font-semibold h-20">{article.title}</h2>
              <div className="flex space-x-2 mt-2">
                <Link
                  to={`/editArticle/${article.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(article.id, article.image)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles found.</p>
      )}
    </DashboardLayout>
  );
};

export default AllArticles;
