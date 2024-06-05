import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">Welcome to Book House</h1>
                <p className="text-center text-gray-600 mt-4">
                    Your one-stop destination for all your reading needs!
                </p>
                
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
                    <p className="text-gray-600 leading-relaxed">
                        At Book Haven, we believe in the magic of books. From the moment you step into our store, you’ll be
                        surrounded by the enchanting aroma of new books and the rich history of beloved pre-owned titles.
                        Our journey started with a simple love for reading and has grown into a community hub for book
                        lovers of all ages.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800">New Books</h3>
                            <p className="text-gray-600 mt-2">
                                Discover the latest releases from all genres. Our curated selection of new books ensures
                                that there is always something fresh and exciting on our shelves.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800">Sell Your Books</h3>
                            <p className="text-gray-600 mt-2">
                                Have books you no longer need? Bring them to us! We offer competitive prices for your
                                pre-loved books and ensure they find a new home with other book enthusiasts.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800">Buy Pre-Owned Books</h3>
                            <p className="text-gray-600 mt-2">
                                Browse our extensive collection of pre-owned books. From classic literature to
                                contemporary bestsellers, you’ll find a wide range of affordable options.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Join Our Community</h2>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We are more than just a bookstore. Book Haven is a community of readers, writers, and dreamers.
                            Join us for author events, book signings, and reading clubs. Follow us on social media and sign up
                            for our newsletter to stay updated on all the latest happenings.
                        </p>
                        <div className="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
                                Follow Us on Social Media
                            </button>
                            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded hover:bg-green-700 transition duration-300">
                                Sign Up for Newsletter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default About;
