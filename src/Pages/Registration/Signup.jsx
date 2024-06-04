import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';



const Signup = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;

        if (password !== confirmPass) {
            toast.error("Password didn't match");
            return;
        }
        createUser(email, password)
            .then((data) => {
                if (data?.user?.email) {
                    const userInfo = {
                        email: data?.user?.email,
                        name: name
                    };
                    return fetch("http://localhost:3000/user", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(response => {
                            if (response.ok) {
                                toast.success("Account Created, Wait a Sec");
                                navigate("/");
                            } else {
                                toast.error("Failed! to create user on server");
                            }
                        });
                } else {
                    toast.error("Account already created by this email");
                }
            })
            
            .catch (err => console.log(err));

    }
return (
    <div>
        <Toaster />
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name="confirmPass" className="input input-bordered" required />
                            <label className="label">
                                <Link to={"/login"}><a href="#" className="label-text-alt link link-hover">Already have an Account?</a></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create an Account</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
);
};

export default Signup;