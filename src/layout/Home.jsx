import React from 'react';
import Banner from '../pages/home/Banner';
import Category from '../pages/home/Category';
import Stats from '../pages/home/Stats';
import Testimonials from '../pages/home/Testimonials';
import FeaturedTutors from '../pages/home/FeaturedTutors';

const Home = () => {
    return (
        <div className='space-y-8 md:space-y-12 lg:space-y-16'>
            <Banner/>
            <Category/>
            <Stats/>
            <Testimonials/>
            <FeaturedTutors/>
        </div>
    );
};

export default Home;