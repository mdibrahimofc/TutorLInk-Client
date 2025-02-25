import React from 'react';
import toast from 'react-hot-toast';

const featuredTutors = [
  {
    id: 1,
    name: 'Sophia Brown',
    profileImage: 'https://i.ibb.co.com/b3mRPsr/istockphoto-1388648617-2048x2048.jpg', 
    specialization: 'English Language',
    rating: 4.9,
    price: '$25/hr',
  },
  {
    id: 2,
    name: 'Liam Davis',
    profileImage: 'https://i.ibb.co.com/L6Nx99k/Steve-Jobs-Headshot-2010-CROP-cropped-2.jpg', 
    specialization: 'Japan Language',
    rating: 4.8,
    price: '$30/hr',
  },
  {
    id: 3,
    name: 'Olivia Smith',
    profileImage: 'https://i.ibb.co.com/zbSnthX/Bundesarchiv-Bild-183-D0116-0041-019-Albert-Schweitzer.jpg', 
    specialization: 'Urdu Language',
    rating: 4.7,
    price: '$28/hr',
  },
  {
    id: 4,
    name: 'Noah Johnson',
    profileImage: 'https://i.ibb.co.com/6DXbhfF/istockphoto-1485546774-2048x2048.jpg', 
    specialization: 'Hindi Language',
    rating: 4.6,
    price: '$26/hr',
  },
];

const FeaturedTutors = () => {
  return (
    <section className="bg-white pb-8 md:pb-12 lg:pb-16 dark:bg-gray-900 transition-colors duration-300">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Featured Tutors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-300"
            >
              <img
                src={tutor.profileImage}
                alt={tutor.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {tutor.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {tutor.specialization}
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-bold">{tutor.price}</p>
              <p className="text-yellow-500 mt-2">Rating: {tutor.rating} ⭐</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
                onClick={() => toast.success('Feature coming soon!')}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutors;
