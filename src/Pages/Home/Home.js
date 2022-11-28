import React from 'react';
import Category from '../Category/Category/Category';
import FeaturePhone from '../FeaturePhone/FeaturePhone';
import Tab from '../Tab/Tab';
import Banner from './Banner/Banner';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-5xl text-center font-bold my-8'>Smartphone</h1>
            <Category></Category>
            <h1 className='text-5xl text-center font-bold my-8'>Tablet</h1>
            <Tab></Tab>
            <h1 className='text-5xl text-center font-bold my-8'>Feature Phone</h1>
            <FeaturePhone></FeaturePhone>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;