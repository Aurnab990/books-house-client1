import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faEdit, faBook, faStore, faHome } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-72 min-h-full bg-gradient-to-b from-orange-400 to-red-500 text-white shadow-lg">
                {/* Sidebar content here */}
                <li className='font-bold text-lg mb-4 hover:bg-orange-500 transition duration-300 rounded-lg'>
                    <a className="flex items-center p-3">
                        <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" /> Dashboard
                    </a>
                </li>
                <Link className='font-bold text-lg mb-4 hover:bg-orange-500 transition duration-300 rounded-lg' to={"/dashboard/profile"}>
                    <li>
                        <a className="flex items-center p-3">
                            <FontAwesomeIcon icon={faUser} className="mr-3" /> User Profile
                        </a>
                    </li>
                </Link>
                <Link className='font-bold text-lg mb-4 hover:bg-orange-500 transition duration-300 rounded-lg' to={"/dashboard/profile/edit"}>
                    <li>
                        <a className="flex items-center p-3">
                            <FontAwesomeIcon icon={faEdit} className="mr-3" /> Edit Profile
                        </a>
                    </li>
                </Link>
                <Link className='font-bold text-lg mb-4 hover:bg-orange-500 transition duration-300 rounded-lg' to={"/dashboard/addbooks"}>
                    <li>
                        <a className="flex items-center p-3">
                            <FontAwesomeIcon icon={faBook} className="mr-3" /> Add New Book
                        </a>
                    </li>
                </Link>
                <Link className='font-bold text-lg mb-4 hover:bg-orange-500 transition duration-300 rounded-lg' to={"/dashboard/managestore"}>
                    <li>
                        <a className="flex items-center p-3">
                            <FontAwesomeIcon icon={faStore} className="mr-3" /> Manage Your Store
                        </a>
                    </li>
                </Link>
                <Link className='font-bold text-lg mb-4 hover:bg-orange-500 transition duration-300 rounded-lg' to={"/"}>
                    <li>
                        <a className="flex items-center p-3">
                            <FontAwesomeIcon icon={faHome} className="mr-3" /> Go to Home
                        </a>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
