import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseAxios from "../../Hooks/UseAxios";
import { AuthContext } from "../../firebase/AuthProvider";
import toast from "react-hot-toast";

const TutorDetails = () => {
  const { details } = useParams(); // Extract tutor ID from route params
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const secureAxios = UseAxios();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)

  // Fetch tutor details
  useEffect(() => {
    const fetchTutorDetails = async () => {
      try {
        const res = await secureAxios.get(`/tutor/${details}`);
        setTutor(res.data);
        console.log(res.data, "data");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tutor details:", error);
        toast.error("Failed to load tutor details.");
        setLoading(false);
      }
    };
    fetchTutorDetails();
  }, [details, secureAxios]);

  // Book tutor
  const handleBookTutor = async () => {
    try {
      const bookingData = {
        tutorId: tutor._id,
        image: tutor.image,
        language: tutor.language,
        price: tutor.price,
        tutorEmail: tutor.email,
        email: user?.email, 
        review: tutor.review
      };
      console.log(bookingData);

      const res = await secureAxios.post("/bookings", bookingData);
      if (res.status === 200) {
        toast.success("Tutor booked successfully!");
        // navigate("/my-booked-tutors"); // Redirect to the My Booked Tutors page
      }
    } catch (error) {
      console.error("Error booking tutor:", error);
      toast.error("Failed to book tutor.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!tutor) {
    return (
      <div className="text-center py-10">
        <h1 className="text-xl text-gray-600 dark:text-gray-300">Tutor not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-3">
      <img
        src={tutor.image}
        alt={tutor.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {tutor.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          🗣️ Language: {tutor.language}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          💵 Price: ${tutor.price}/hour
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          ⭐ Reviews: {tutor.review}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          {tutor.description}
        </p>
        <button
          onClick={handleBookTutor}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TutorDetails;
