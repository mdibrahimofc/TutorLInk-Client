import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAxios from "../../Hooks/UseAxios";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateTutorial = () => {
  const [tutorial, setTutorial] = useState({
    name: "",
    image: "",
    language: "",
    price: "",
    description: "",
    review: 0,
  });
  const { id: ids } = useParams();
  const [loading, setLoading] = useState(true);
  const secureAxios = UseAxios();
  const { id } = useParams(); // Assuming the tutorial id is passed as a URL parameter
  const navigate = useNavigate();
  console.log(id);

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
    console.log(tutorial);
    try {
      const res = await secureAxios.patch(`/tutorials/${id}`, tutorial);
      // const res = await axios.put(`http://localhost:5000/tutorials/${id}`, tutorial)
      console.log(tutorial);
      console.log(res.data);
      if (res.status === 200) {
        toast.success("Tutorial updated successfully!");
        // navigate("/my-tutorials"); // Redirect to My Tutorials page after successful update
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
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Update Tutorial
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300"
          >
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
          <label
            htmlFor="image"
            className="block text-gray-700 dark:text-gray-300"
          >
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
        {/* <div>
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
        </div> */}

        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-700 dark:text-gray-300">
              Language
            </span>
          </label>
          <select
            id="language"
            name="language"
            value={tutorial.language || ""}
            onChange={handleChange}
            className="select select-bordered w-full dark:bg-gray-700 dark:text-white"
            required
          >
            <option disabled value="">
              Select a language category
            </option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Italian</option>
            <option>Chinese</option>
            <option>Arabic</option>
            <option>Japanese</option>
            <option>Portuguese</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-gray-700 dark:text-gray-300"
          >
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
          <label
            htmlFor="description"
            className="block text-gray-700 dark:text-gray-300"
          >
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
          <label
            htmlFor="reviews"
            className="block text-gray-700 dark:text-gray-300"
          >
            Reviews (Initial Value)
          </label>
          <input
            type="number"
            id="reviews"
            name="reviews"
            value={tutorial.review}
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
