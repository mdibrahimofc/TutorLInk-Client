import React, { useContext, useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";
import { AuthContext } from "../../firebase/AuthProvider";
import toast from "react-hot-toast";

const MyBookedTutors = () => {
  const [bookedTutors, setBookedTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const secureAxios = UseAxios();

  const {user} = useContext(AuthContext)
  console.log(user);
  console.log(user?.email);

  // Fetch all booked tutors for the logged-in user
  useEffect(() => {
    if(!user?.email){
        return
    }
    const fetchBookedTutors = async () => {
      try {
        const res = await secureAxios.get(`/bookings?email=${user?.email}`);
        setBookedTutors(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching booked tutors:", error);
        toast.error("Failed to load booked tutors.");
        setLoading(false);
      }
    };
    fetchBookedTutors();
  }, [user?.email]);

  console.log(bookedTutors);

  // Handle Review Button
  const handleAddReview = async (tutorId) => {
    try {
      await secureAxios.patch(`/tutors/review/${tutorId}`, { reviewIncrement: 1 });
      setBookedTutors((prev) =>
        prev.map((tutor) =>
          tutor.tutorId === tutorId ? { ...tutor, reviews: tutor.reviews + 1 } : tutor
        )
      );
      toast.success("Review count updated successfully!");
    } catch (error) {
      console.error("Error updating review count:", error);
      toast.error("Failed to update review count.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (bookedTutors.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-xl text-gray-600 dark:text-gray-300">
          No booked tutors found.
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        My Booked Tutors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookedTutors.map((tutor) => (
          <div
            key={tutor.tutorId}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {tutor.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                🗣️ Language: {tutor.language}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                💵 Price: ${tutor.price}/hour
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                ⭐ Reviews: {tutor.reviews}
              </p>
              <button
                onClick={() => handleAddReview(tutor.tutorId)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors w-full"
              >
                Add Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutors;
