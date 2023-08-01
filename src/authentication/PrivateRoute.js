import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function PrivateRoute() {
    const user = false;
    const location = useLocation()
    if(!user){
        return<Navigate to='/login' state={{state:location}} replace/>
    }
  return <Outlet/>
}
