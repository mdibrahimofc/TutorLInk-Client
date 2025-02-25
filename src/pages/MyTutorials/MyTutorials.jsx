import React, { useContext, useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";
import toast from "react-hot-toast";
import { AuthContext } from "../../firebase/AuthProvider";
import { Link } from "react-router-dom";

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const secureAxios = UseAxios();

  const {user} = useContext(AuthContext)

  console.log(user?.email);

  // Fetch tutorials added by the logged-in user
  useEffect(() => {
    if(!user?.email){
      return
    }
    const fetchMyTutorials = async () => {
      try {
        const res = await secureAxios.get(`/tutorials?email=${user?.email}`);
        setTutorials(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tutorials:", error);
        toast.error("Failed to load your tutorials.");
        setLoading(false);
      }
    };
    fetchMyTutorials();
  }, [user?.email]);

  // Handle Delete
  const handleDelete = (tutorialId) => {
    toast(
      (t) => (
        <div className="p-4">
          <p className="text-lg">Are you sure you want to delete this tutorial?</p>
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={async () => {
                try {
                  await secureAxios.delete(`/tutorials/${tutorialId}`);
                  setTutorials((prev) => prev.filter((tutorial) => tutorial._id !== tutorialId));
                  toast.success("Tutorial deleted successfully!");
                } catch (error) {
                  console.error("Error deleting tutorial:", error);
                  toast.error("Failed to delete the tutorial.");
                }
                toast.dismiss(t.id);
              }}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Confirm
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        position: 'top-center',
        style: {
          maxWidth: '400px',
          borderRadius: '8px',
          background: '#fff',
        },
      }
    );
  };
  

  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (tutorials.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-xl text-gray-600 dark:text-gray-300">
          No tutorials added yet.
        </h1>
      </div>
    );
  }

  return (
    <div className="pb-8 md:pb-12 lg:pb-16 lg:pt-8 pt-4 md:pt-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        My Tutorials
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Image</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Name</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Language</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Price</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Reviews</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial) => (
              <tr key={tutorial._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 dark:text-white px-4 py-2">
                  <img
                    src={tutorial.image}
                    alt={tutorial.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300 dark:text-white dark:border-gray-600 px-4 py-2">
                  {tutorial.name}
                </td>
                <td className="border border-gray-300 dark:text-white dark:border-gray-600 px-4 py-2">
                  {tutorial.language}
                </td>
                <td className="border border-gray-300 dark:text-white dark:border-gray-600 px-4 py-2">
                  ${tutorial.price}
                </td>
                <td className="border border-gray-300 dark:text-white dark:border-gray-600 px-4 py-2">
                  {tutorial.description}
                </td>
                <td className="border border-gray-300 text-center text-xl md:text-2xl font-semibold dark:text-white dark:border-gray-600 px-4 py-2">
                  {tutorial.review}
                </td>
                <td className="border border-gray-300 dark:text-white dark:border-gray-600 px-4 py-2 space-y-2">
                  <Link to={`/update/${tutorial._id}`}>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
                  >
                    Update
                  </button>
                  </Link>
                  <button
                    onClick={()=> handleDelete(tutorial._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors w-full"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
