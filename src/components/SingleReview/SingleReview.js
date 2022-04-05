import React from 'react';

const SingleReview = (props) => {
    const { name, comment, ratings } = props.review;
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
            <h1 className='font-bold text-center'>{name}</h1>
            <blockquote className='text-center'> {comment}</blockquote>
            <p className='text-center'> Ratings: {ratings}</p>

        </div>
    );
};

export default SingleReview;

