import React from "react";

const Tutors = () => {
    const {image, name, language, price, reviews} = {image:"s", name:"a", language:"a", price:"a", reviews:"a"}
    const tutor = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        tutor.map((t, idx)=> <div key={idx} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                🗣️ Language: {language}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                💵 Price: ${price}/hour
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                ⭐ Reviews: {reviews}
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full">
                View Details
              </button>
            </div>
          </div>)
      }
    </div>
  );
};

export default Tutors;
