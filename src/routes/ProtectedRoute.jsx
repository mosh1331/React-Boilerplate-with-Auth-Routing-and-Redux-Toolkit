import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';

const ProtectedRoute = ({ redirectPath = '/' }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated,'isAuthenticated')
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <AuthenticatedLayout>
      <Outlet />
    </AuthenticatedLayout>
  );
};
export default ProtectedRoute;
