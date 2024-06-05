import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shownewbook from './Shownewbook';
import Navbar from '../../Layouts/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer';

const Newbookspage = () => {
    const books = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) 
        
    );

    return (
        <div>
            <Navbar />
            <div className='container mx-auto px-4 py-8'>
                
                <input
                    type="text"
                    placeholder="Search by name, author."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-4"
                />
                
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 mb-10'>
                    {filteredBooks.map(book => (
                        <Shownewbook
                            key={book._id}
                            item={book}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Newbookspage;
