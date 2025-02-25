import { useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";

const Stats = () => {
    const [stats, setStats] = useState({})
    const secureAxios = UseAxios()

    useEffect(()=> {
        secureAxios.get("/stats")
        .then(res=> {
            setStats(res.data);
        })
    },[])

    return (
        <div className="dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                Our Achievements
            </h2>
            <div className='md:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{stats.tutors}</p>
                    <p className="text-gray-600 dark:text-gray-300">Experienced Tutors</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{stats.totalReviews}</p>
                    <p className="text-gray-600 dark:text-gray-300">5 Stars Reviews</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{stats.subjects}</p>
                    <p className="text-gray-600 dark:text-gray-300">Subjects Taught</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{stats.users}</p>
                    <p className="text-gray-600 dark:text-gray-300">Users Count</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;