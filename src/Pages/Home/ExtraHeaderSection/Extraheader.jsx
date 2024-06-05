import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Extraheader = () => {
    

    

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Discover your next
                            <br className="hidden md:block" />
                            favorite book
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Explore a world of imagination and knowledge with our curated collection of books. Whether you're a casual reader or a book enthusiast, we have something for everyone.
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                            <FontAwesomeIcon icon={faArrowRight} className="inline-block w-3 ml-2" />
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://static01.nyt.com/images/2023/12/10/books/review/10TenBest-COVER/10TenBest-COVER-videoLarge.jpg"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFVEakNNf3OIXFS_te70N4mSeXzsfUq8OBg&s"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://abeautifulmess.com/wp-content/uploads/2019/02/favorite-books.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extraheader;
