/*import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/login';
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isAuthenticated && (
          <>
            <Button component={Link} to="/home" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/courses" color="inherit">
              View Courses
            </Button>

            <Button component={Link} to="/dashboard" color="inherit">
  Dashboard
</Button>
            {role === 'instructor' && (
              <Button component={Link} to="/add-course" color="inherit">
                Add Course
              </Button>
            )}
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>

            
          </>

        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;*/

import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/login';
  };

  return (
    <AppBar position="static" style={{ background: '#1976d2', marginBottom: '20px' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            SkillPort
          </Link>
        </Typography>
        {isAuthenticated ? (
          <>
            <Button component={Link} to="/home" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/courses" color="inherit">
              Courses
            </Button>
            {role === 'instructor' && (
              <Button component={Link} to="/add-course" color="inherit">
                Add Course
              </Button>
            )}
            <Button component={Link} to="/dashboard" color="inherit">
              Dashboard
            </Button>
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
