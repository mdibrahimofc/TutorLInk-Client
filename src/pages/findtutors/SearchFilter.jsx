import React, { useState } from 'react';
import UseAxios from '../../Hooks/UseAxios';

const SearchFilter = ({ setTutors }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const secureAxios = UseAxios()

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = async () => {
    // Send search query to the server and update the tutors state
    try {
      const data = await secureAxios.get(`/api/tutors?language=${searchQuery}`);
      setTutors(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching tutors:', error);
    }
  };

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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="">Filter by Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & Above</option>
            <option value="3">3 Stars & Above</option>
          </select>
        </div>

        {/* Search Button */}
        <div>
          <button 
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
