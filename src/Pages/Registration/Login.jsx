import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Googlesignin from './Googlesignin';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signIn} = useAuth();
    const navigate = useNavigate();

    const handleSignin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result=>{
            const user = result.user;
            navigate("/")
        })
        .then(err => console.log(err));

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignin} className="card-body">
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
                                <label className="label">
                                    <Link to={"/signup"}><a href="#" className="label-text-alt link link-hover">Don't have an Account?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <Googlesignin></Googlesignin>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;