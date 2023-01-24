import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-sky-600 flex items-center justify-between px-12 py-3'>
            <div><h1 className='text-white text-3xl font-semibold font-Montserrat'><Link to={'/'}>Curd</Link></h1></div>
            <div><Link to={'/adduser'} className='bg-white text-sky-400 text-xl font-Mulish font-semibold px-5 py-1 rounded'>Add User</Link></div>
        </div>
    );
};

export default Navbar;