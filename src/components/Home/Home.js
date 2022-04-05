import React from 'react';
import image from '../../Assets/Image/image.jpg'

const Home = () => {
    return (
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
            <div className=''>
                <h1 className='text-xl md:text-5xl font-bold'>Your Camera,Our <span className='text-xl md:text-5xl font-bold text-purple-500'>Concern</span> !</h1>

            </div>
            <div className=''>
                <img className='w-' src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;

