import React from 'react';
import Sidebar from './Sidebar';

const Updatebooks = () => {
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const stocks = form.stocks.value;

        const data = {name,price,stocks};

        
    }
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center p-6 bg-gray-100 min-h-screen">
                    <h1 className="text-4xl font-semibold text-orange-600 mt-12 mb-6">Update Books Information</h1>

                    <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-4">
                        <div className="form-control">
                            <label className="label font-semibold">Book Name</label>
                            <input type="text" name="name" className="input input-bordered w-full" placeholder="User Name" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label font-semibold">Price</label>
                            <input type="text" name="price" className="input input-bordered w-full" placeholder="Phone" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">Stocks</label>
                            <textarea name="stocks" className="textarea textarea-bordered w-full" placeholder="Address" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-success w-full">Update Book</button>
                    </form>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-4">Open drawer</label>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Updatebooks;