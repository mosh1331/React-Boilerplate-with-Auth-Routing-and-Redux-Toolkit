import React from 'react';
import { Navigate, Outlet } from 'react-router';
import LandingLayout from '../layouts/LandingLayout';

const PublicRoute = () => {

  return (
    <LandingLayout>
      <Outlet />
    </LandingLayout>
  );
};
export default PublicRoute;
