import React from 'react'
import { Outlet } from 'react-router-dom';
import LoadingToRedirect from './loadingToRedirect';
import { isExpired,decodeToken } from "react-jwt";

const UserRoute = () => {
    const expired = isExpired(localStorage.getItem('token'));
    const decoded = decodeToken(localStorage.getItem('token'));

  return expired === false && (decoded.user.role === "admin" || decoded.user.role === "staff")
            ? <Outlet/>
            : <LoadingToRedirect/>
}

export default UserRoute