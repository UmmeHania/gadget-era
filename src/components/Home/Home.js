import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/Image/image.jpg'

const Home = () => {
    return (
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
            <div className=''>
                <h1 className='text-xl md:text-5xl font-bold'>Your Camera,Our <span className='text-xl md:text-5xl font-bold text-purple-500 mb-5'>Concern</span> !</h1>
                <p className='text-lg mt-5 font-normal text-gray-700 mb-10'>Are you a Camera freak and looking for the best budget camera? Then you are in the right place. Discover pur Camera and find your desire one. </p>
                <Link
                    to='/'
                    className='py-2 px-3 text-white rounded-full bg-purple-500'
                >
                    Discover Now
                </Link>
            </div>
            <div className=''>
                <img className='w-' src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;

