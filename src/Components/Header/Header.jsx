import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 gap-2 w-30 p-2 shadow">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/'}>Listed Books</Link>
                        <Link to={'/'}>Pages-Read</Link>
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-bold">Book Vibes</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu gap-6 cursor-pointer menu-horizontal px-1">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    {/* <Link to={'/'}>Pages-Read</Link> */}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn text-white  bg-[#23BE0A]">Log In</a>
                <a className="btn text-white bg-blue-400">Sing Up</a>
            </div>
        </div>
    );
};

export default Header;