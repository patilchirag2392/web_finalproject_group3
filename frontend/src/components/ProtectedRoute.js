import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check if user has the required role
  if (allowedRoles && !allowedRoles.includes(role)) {
    // If role is not allowed, redirect to a default page based on role
    return role === 'instructor' ? <Navigate to="/home" /> : <Navigate to="/courses" />;
  }

  return children;
}

export default ProtectedRoute;
