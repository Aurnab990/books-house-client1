import React from 'react';
import Sidebar from './Sidebar';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router-dom';

const Updateuserprofile = () => {
    const { user } = useAuth();
    const { id } = useParams();

    const handleUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        

        const data = {name,email} ;
        console.log(data);

        fetch(`https://books-house-server1.onrender.com/user/${id}`, {
            method: 'PUT', // or 'POST'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Update Successfully", data);
                e.target.reset();

            })


    }
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center p-6 bg-gray-100 min-h-screen">
                    <h1 className="text-4xl font-semibold text-orange-600 mt-12 mb-6">Update Profile</h1>

                    <form onSubmit={handleUser} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-4">
                        <div className="form-control">
                            <label className="label font-semibold">User Name</label>
                            <input type="text" name="name" className="input input-bordered w-full" placeholder="User Name" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">User Email</label>
                            <input type="text" name="email" defaultValue={user?.email} className="input input-bordered w-full" placeholder="User Name" required />
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
