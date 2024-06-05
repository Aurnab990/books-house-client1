import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Managestore = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("https://books-house-server1.onrender.com/books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to Delete?");
        if (proceed) {
            const url = `https://books-house-server1.onrender.com/books/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remainingBooks = books.filter(book => book._id !== id);
                    setBooks(remainingBooks);
                });
        }
    };

    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-5">
                   
                    <h1 className="text-3xl font-bold mb-5">Manage Store</h1>

                    <input
                        type="text"
                        placeholder="Search by books name"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="border w2/4 border-gray-300 rounded-lg p-2 mb-4"
                    />

                    <div className="grid gap-4">
                        {filteredBooks.map(book => (
                            <div key={book._id} className="grid grid-cols-7 gap-4 p-4 border rounded-lg shadow-lg bg-white">
                                <img className="w-20 h-20 object-cover" src={book.image} alt={book.name} />
                                <div className="col-span-2 flex flex-col justify-center">
                                    <h2 className="text-xl font-semibold">{book.name}</h2>
                                    <p className="text-gray-600">{book.description}</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-semibold">${book.price}</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg">{book.stocks} in stock</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Link to={`/dashboard/update/${book._id}`}>
                                    <button className="btn btn-success flex items-center gap-2">
                                        <FontAwesomeIcon icon={faEdit} />
                                        Edit
                                    </button>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        onClick={() => handleDelete(book._id)}
                                        className="btn btn-error flex items-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-5">Open drawer</label>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Managestore;
