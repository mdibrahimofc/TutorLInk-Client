import { useState } from "react";

const Stats = () => {
    const [stats, setStats] = useState({})
    return (
        <div className="dark:bg-gray-800">
            <div className='py-4 md:w-3/5 mx-auto  dark:bg-gray-800 grid grid-cols-2 sm:grid-cols-4'>
            <div className="flex shadow-lg flex-col items-center justify-center">
                <p className="text-xl md:text-2xl dark:text-white font-bold">000</p>
                <p className="font-medium dark:text-white">Experienced tutors</p>
            </div>
            <div className="flex shadow-lg flex-col items-center justify-center">
                <p className="text-xl md:text-2xl dark:text-white font-bold">000</p>
                <p className="font-medium dark:text-white">5 stars tutors review</p>
            </div>
            <div className="flex shadow-lg flex-col items-center justify-center">
                <p className="text-xl md:text-2xl dark:text-white font-bold">000</p>
                <p className="font-medium dark:text-white">Subject taughts</p>
            </div>
            <div className="flex shadow-lg flex-col items-center justify-center">
                <p className="text-xl md:text-2xl dark:text-white font-bold">000</p>
                <p className="font-medium dark:text-white">Users count</p>
            </div>
        </div>
        </div>
    );
};

export default Stats;