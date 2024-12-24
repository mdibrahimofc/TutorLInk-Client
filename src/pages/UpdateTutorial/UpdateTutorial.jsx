import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAxios from "../../Hooks/UseAxios";
import { toast } from "react-toastify";

const UpdateTutorial = () => {
  const [tutorial, setTutorial] = useState({
    name: "",
    image: "",
    language: "",
    price: "",
    description: "",
    reviews: 0,
  });
  const {id:ids} = useParams()
  const [loading, setLoading] = useState(true);
  const secureAxios = UseAxios();
  const { id } = useParams(); // Assuming the tutorial id is passed as a URL parameter
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch tutorial details to populate the form
    const fetchTutorial = async () => {
      try {
        const res = await secureAxios.get(`/tutor/${id}`);
        setTutorial(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tutorial:", error);
        toast.error("Failed to load tutorial details.");
        setLoading(false);
      }
    };
    fetchTutorial();
  }, [id, secureAxios]);

  const handleChange = (e) => {
    setTutorial({
      ...tutorial,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await secureAxios.put(`/tutorials/${id}`, tutorial);
      if (res.status === 200) {
        toast.success("Tutorial updated successfully!");
        navigate("/my-tutorials"); // Redirect to My Tutorials page after successful update
      }
    } catch (error) {
      console.error("Error updating tutorial:", error);
      toast.error("Failed to update tutorial.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Update Tutorial</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={tutorial.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-700 dark:text-gray-300">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={tutorial.image}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="language" className="block text-gray-700 dark:text-gray-300">
            Language
          </label>
          <input
            type="text"
            id="language"
            name="language"
            value={tutorial.language}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700 dark:text-gray-300">
            Price per Hour
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={tutorial.price}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={tutorial.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="reviews" className="block text-gray-700 dark:text-gray-300">
            Reviews (Initial Value)
          </label>
          <input
            type="number"
            id="reviews"
            name="reviews"
            value={tutorial.reviews}
            onChange={handleChange}
            disabled
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Update Tutorial
        </button>
      </form>
    </div>
  );
};

export default UpdateTutorial;
