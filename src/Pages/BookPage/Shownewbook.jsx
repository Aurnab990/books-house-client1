import React from 'react';


const Shownewbook = ({ item }) => {
    const { image, name, author, description, price, stocks } = item;

    return (
        
                    <div>
                        
                        <div className="border rounded-lg overflow-hidden bg-white shadow-md">
                            <img className="w-full h-64 object-cover" src={image} alt={image} />
                            <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-red-500 font-semibold">{name}</h2>
                                <h2 className="text-xl font-semibold mb-2">{author}</h2>
                                <p className="text-gray-600 mb-4">{description}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-semibold">${price}</p>
                                    <p className="text-lg">{stocks} in stock</p>
                                </div>
                                <button className="btn btn-primary mt-4">Read more</button>
                            </div>
                        </div>
                        
                    </div>
                
    );
};

export default Shownewbook;
