import React from 'react';
import Sidebar from './Sidebar';
import toast, { Toaster } from 'react-hot-toast';

const Addbook = () => {

    const handleAddbook = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const description = form.description.value;
        const price = form.price.value;
        const stocks = form.stocks.value;
        const image = form.imageUrl.value;
        
        const booksData = {name, author, description, price, stocks, image};

        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(booksData)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Book Added");
        })
        .catch(error => {
            console.error('Error:', error);
            toast.error('Failed to add. Please try again.');
        });
    };

    return (
        <div>
            <Toaster />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center p-6 bg-gray-100 min-h-screen">
                    <h1 className="text-4xl font-semibold text-orange-600 mt-12 mb-6">Add New Book</h1>

                    <form onSubmit={handleAddbook} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-4">
                        <div className="form-control">
                            <label className="label font-semibold">Title</label>
                            <input type="text" name="name" className="input input-bordered w-full" placeholder="Title" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">Author Name</label>
                            <input type="text" name="author" className="input input-bordered w-full" placeholder="Author Name" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">Description</label>
                            <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Description" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">Price</label>
                            <input type="number" name="price" className="input input-bordered w-full" placeholder="Price" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">Stocks</label>
                            <input type="number" name="stocks" className="input input-bordered w-full" placeholder="Stocks" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">Image URL</label>
                            <input type="text" name="imageUrl" className="input input-bordered w-full" placeholder="Image URL" />
                            <span className="text-sm text-gray-500 mt-1">Optional</span>
                        </div>
                        <button type="submit" className="btn btn-success w-full">Add New Book</button>
                    </form>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-4">Open drawer</label>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Addbook;
