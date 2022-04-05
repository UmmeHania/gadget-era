import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-xl text-black' to='/'>
                    Gadget Era
                </Link>
            </div>
            <div className='font-sans flex gap-4 text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>

            </div>
        </div>
    )
}

export default Header