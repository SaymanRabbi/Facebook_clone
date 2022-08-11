import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const NotLoginRoutes = () => {
    const {user}= useSelector(state=>({...state}))
    return user ?<Navigate to="/"/> :<Outlet/>
};

export default NotLoginRoutes;