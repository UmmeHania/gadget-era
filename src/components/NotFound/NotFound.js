import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../Assets/Image/error.jpg'

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <p className='mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase'>
                        Error 404
                    </p>
                    <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                        Sorry!Your desire page is not found.
                    </h1>

                    <Link
                        to='/'
                        className='w-full mb-2 py-2 px-3 text-white mt-3 bg-purple-500 sm:w-auto sm:mb-0'
                    >
                        Back to Home
                    </Link>

                </div>
                <div>
                    <div className='w-full h-full bg-gray-200 rounded-lg'>
                        <img src={error} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound