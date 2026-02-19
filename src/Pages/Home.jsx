import React from 'react';
import Banner from '../Components/Home/Banner';
import { BookOfTheWeek, TopGenres } from '../Components/Home/HomeSection';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <Banner/>
            <div>
            <TopGenres/>
            <BookOfTheWeek/>
           
            </div>
        </div>
    );
};

export default Home;