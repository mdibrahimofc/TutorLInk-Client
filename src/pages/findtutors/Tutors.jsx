import React, { useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";
import { Link } from "react-router-dom";

const Tutors = ({category}) => {
  const [tutors, setTutors] = useState([])
  console.log(category);
  const secureAxios = UseAxios()
  useEffect(()=> {
    if(category !== "all"){
      secureAxios.get(`/tutors/${category}`)
    .then(res=> {
      console.log(category);
      setTutors(res.data);
    })
    }else {
      secureAxios.get("/tutors")
      .then(res=> {
        console.log(category);
        setTutors(res.data);
      })
    }
    
  },[category])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        tutors.map((t, idx)=> <div key={idx} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src={t.image} alt={t.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {t.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                🗣️ Language: {t.language}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                💵 Price: ${t.price}/hour
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                ⭐ Reviews: {t.review}
              </p>
              <Link to={`/tutor/${t._id}`}><button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full">
                View Details
              </button></Link>
            </div>
          </div>)
      }
    </div>
  );
};

export default Tutors;
