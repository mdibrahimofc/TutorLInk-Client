import React, { useState } from 'react';
import UseAxios from '../../Hooks/UseAxios';
import toast from 'react-hot-toast';

const SearchFilter = ({ setTutors }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const secureAxios = UseAxios()

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = async () => {
    // Send search query to the server and update the tutors state
    console.log(searchQuery);
    try {
      const data = await secureAxios.get(`/api/tutors?language=${searchQuery}`);
      setTutors(data.data);
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching tutors:', error);
    }
  };

  const handleFilterPrice = async (e) => {
    // Send filter query to the server and update the tutors state
    if(e.target.value === 'low'){
      toast.success("Sorting by price low to high. Please wait...");
      const data = await secureAxios.get("/sort/price/low");
      setTutors(data.data);
      console.log(data.data);
    } else if(e.target.value === 'high'){
      toast.success("Sorting by price high to low. Please wait...");
      const data = await secureAxios.get("/sort/price/high");
      setTutors(data.data);
    }
  }

  const handleFilterRating = async (e) => {
    // Send filter query to the server and update the tutors state
    if(e.target.value === '5'){
      toast.success("Filtering by 5 review and above. Please wait...");
      const data = await secureAxios.get("/sort/rating/5");
      setTutors(data.data);
    } else if(e.target.value === '4'){
      toast.success("Filtering by 4 reviwe and above. Please wait...");
      const data = await secureAxios.get("/sort/rating/4");
      setTutors(data.data);
    } else if(e.target.value === '3'){
      toast.success("Filtering by 3 reviwe and above. Please wait...");
      const data = await secureAxios.get("/sort/rating/3");
      setTutors(data.data);
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Find Your Tutor</h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Search by language..." 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500"
            onClick={handleSearchClick}
          >
            🔍
          </button>
        </div>

        {/* Filter Dropdown for Price */}
        <div className="flex-1">
          <select
            name='filterPrice'
            onChange={handleFilterPrice}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="">Filter by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        {/* Filter by Rating */}
        <div className="flex-1">
          <select
            onChange={handleFilterRating}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="">Filter by Reviw</option>
            <option value="5">5 or Above</option>
            <option value="4">4 or Above</option>
            <option value="3">3 or Above</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
