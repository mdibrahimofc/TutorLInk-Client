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
    // {tutors, totalReviews, users, subjects}
    
    return (
        <div className="dark:bg-gray-800">
            <div className='py-4 md:w-3/5 mx-auto  dark:bg-gray-800 grid grid-cols-2 sm:grid-cols-4'>
            <div className="flex shadow-lg flex-col items-center justify-center">
                <p className="text-xl md:text-2xl dark:text-white font-bold">{stats.tutors}</p>
                <p className="font-medium dark:text-white">Experienced tutors</p>
            </div>
            <div className="flex shadow-lg flex-col items-center justify-center">
                <p className="text-xl md:text-2xl dark:text-white font-bold">{stats.totalReviews}</p>
                <p className="font-medium dark:text-white">5 stars tutors review</p>
            </div>
            <div className="flex shadow-lg flex-col items-center justify-center">
                <p className="text-xl md:text-2xl dark:text-white font-bold">{stats.subjects}</p>
                <p className="font-medium dark:text-white">Subject taughts</p>
            </div>
            <div className="flex shadow-lg flex-col items-center justify-center">
                <p className="text-xl md:text-2xl dark:text-white font-bold">{stats.users}</p>
                <p className="font-medium dark:text-white">Users count</p>
            </div>
        </div>
        </div>
    );
};

export default Stats;