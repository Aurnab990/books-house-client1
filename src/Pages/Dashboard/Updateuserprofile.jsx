import React from 'react';
import Sidebar from './Sidebar';

const Updateuserprofile = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center p-6 bg-gray-100 min-h-screen">
                    <h1 className="text-4xl font-semibold text-orange-600 mt-12 mb-6">Update Profile</h1>

                    <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-4">
                        <div className="form-control">
                            <label className="label font-semibold">User Name</label>
                            <input type="text" name="username" className="input input-bordered w-full" placeholder="User Name" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">User Email</label>
                            <input type="text" name="username" className="input input-bordered w-full" placeholder="User Name" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">Phone</label>
                            <input type="text" name="phone" className="input input-bordered w-full" placeholder="Phone" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">Address</label>
                            <textarea name="address" className="textarea textarea-bordered w-full" placeholder="Address" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-success w-full">Update Profile</button>
                    </form>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-4">Open drawer</label>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Updateuserprofile;
