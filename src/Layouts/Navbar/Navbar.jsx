import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const menu = [
        <li key="home"><Link to="/" className="hover:text-orange-500">Home</Link></li>,
        <li key="books"><Link to="/books" className="hover:text-orange-500">Books</Link></li>,
        <li key="about"><Link to="/about" className="hover:text-orange-500">About</Link></li>,
        <li key="contact"><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>,
        <li key="dashboard">
            {user ? <Link to="/dashboard" className="hover:text-orange-500">Dashboard</Link> : null}
        </li>
    ];

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">BooksHouse</Link>
                </div>
                <div className="flex-none hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center space-x-4">
                        {menu}
                    </ul>
                    <div className="ml-4">
                        {user ? (
                            <button onClick={handleLogout} className="btn btn-warning">LOGOUT</button>
                        ) : (
                            <Link to="/login"><button className="btn btn-warning">LOGIN</button></Link>
                        )}
                    </div>
                </div>
                <div className="flex-none lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                            <li>
                                {user ? (
                                    <button onClick={handleLogout} className="btn btn-warning w-full mt-2">LOGOUT</button>
                                ) : (
                                    <Link to="/login"><button className="btn btn-warning w-full mt-2">LOGIN</button></Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
