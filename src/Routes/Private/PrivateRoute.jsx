import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const navigate = useNavigate();
    if(user){
        return children;
    }
    navigate('/login');
};

export default PrivateRoute;