import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <div className="max-w-4xl w-full bg-white rounded-2xl mt-8 shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
                <p className="text-center text-gray-600 mb-8">
                    We would love to hear from you! Whether you have a question, feedback, or just want to say hello,
                    feel free to reach out.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label className="text-gray-600">Name</label>
                            <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:border-blue-500" 
                                placeholder="Your Name" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-600">Email</label>
                            <input 
                                type="email" 
                                className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:border-blue-500" 
                                placeholder="Your Email" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-600">Phone</label>
                            <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:border-blue-500" 
                                placeholder="Your Phone Number" 
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-600">Message</label>
                        <textarea 
                            className="w-full h-40 p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:border-blue-500" 
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
                        Send Message
                    </button>
                </div>
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Visit Us</h2>
                    <p className="text-gray-600">123 Book House Street, Reading City, 45678</p>
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                    <p className="text-gray-600">Email: contact@bookhouse.com</p>
                </div>
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
