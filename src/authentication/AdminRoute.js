import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

export default function AdminRoute() {
  const [admin] = useAdmin()
  if(!admin){
    return<Navigate to='/' replace/>
  }
  return <Outlet/>
}
