import React from 'react';

const Review = () => {
  const reviews = [
    { text: "Sed ut perspiciatis unde omnis iste", rating: 5, name: "John Doe" },
    { text: "Well, the way they make shows is", rating: 4, name: "Jane Smith" },
    { text: "Some don't, become nothing again", rating: 3, name: "Alice Johnson" },
    { text: "Pommy ipsum smeg head whizz morris", rating: 5, name: "Bob Brown" },
    { text: "Taking the mick middle class bog", rating: 4, name: "Charlie Davis" },
    { text: "Sportacus andrew weatherall goose", rating: 3, name: "Eve Martinez" },
    { text: "Semi beard cream bun disaster alpha", rating: 4, name: "Franklin Lee" },
    { text: "Bro ipsum dolor sit amet gaper dart", rating: 5, name: "Grace White" },
];
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <div className="max-w-6xl w-full bg-white rounded-2xl mt-8 shadow-lg">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-gray-300"
                        >
                            <circle
                                fill="currentColor"
                                fillOpacity="0.4"
                                cx="44"
                                cy="44"
                                r="15.5"
                            />
                            <circle
                                fillOpacity="0.1"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="44"
                            />
                            <circle
                                fillOpacity="0.1"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="37.5"
                            />
                            <circle
                                fillOpacity="0.1"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="29.5"
                            />
                            <circle
                                fillOpacity="0.1"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="22.5"
                            />
                        </svg>
                    </div>
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review, index) => (
                            <div key={index} className="px-6 py-8 text-center transition duration-300 transform bg-blue-600 rounded-lg shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-white mb-4">{review.text}</p>
                                <div className="flex justify-center items-center mb-2">
                                    {Array(review.rating).fill(0).map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.368 2.45a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118l-3.368-2.45a1 1 0 00-1.175 0l-3.368 2.45c-.784.57-1.839-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.118l-3.368-2.45c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.95z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-200 text-sm">{review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Review;
