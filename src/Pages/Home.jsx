import React from 'react';
import Banner from '../Components/Home/Banner';
import { AboutBookHaven, BookOfTheWeek, TopGenres } from '../Components/Home/HomeSection';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <Banner/>
            <div>
            <TopGenres/>
            <BookOfTheWeek/>
            <AboutBookHaven/>
            </div>
        </div>
    );
};

export default Home;