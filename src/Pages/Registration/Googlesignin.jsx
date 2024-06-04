import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Googlesignin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignin = () => {
        googleLogin().then((data) => {
            if (data?.user?.email) {
                const userInfo = {
                    email: data?.user?.email,
                    name: data?.user?.displayName
                }
                fetch("http://localhost:3000/user", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
            }
        })
        navigate('/')

    }

    return (
        <div>
            <button className="w-full bg-orange-500 text-white font-semibold uppercase p-2 rounded-xl" onClick={handleGoogleSignin}>Google</button>
        </div>
    );
};

export default Googlesignin;