import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/Image/image.jpg'
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5     lg:grid-cols-2 xl:gap-32'>
                <div className=''>
                    <h1 className='text-xl md:text-5xl font-bold'>Your Camera,Our <span className='text-xl md:text-5xl font-bold text-purple-500 mb-5'>Concern</span> !</h1>
                    <p className='text-lg mt-5 font-normal text-gray-700 mb-10'>Are you a Camera freak and looking for the best budget camera? Then you are in the right place. Discover our Camera and find your desire one. </p>
                    <Link
                        to='/'
                        className='py-2 px-3 text-white rounded-full bg-purple-500'
                    >
                        Discover Now
                    </Link>
                </div>
                <div className=''>
                    <img className='' src={image} alt="" />
                </div>
            </div>

            <div className='text-center my-10 mt-32'>
                <p className='text-3xl font-bold text-black'> Review from Customer(3) !</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center text-center'>
                    {reviews.slice(0, 3).map(review => (
                        <SingleReview key={review.id} review={review} />
                    ))}
                </div>

            </div>


        </div>
    );
};

export default Home;

