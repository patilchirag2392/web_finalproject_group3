import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Avatar, Menu, MenuItem, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Navbar() {
  const { isAuthenticated, role, userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ fullName: '', profilePhoto: null });
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchProfile = async () => {
      if (isAuthenticated) {
        try {
          const response = await axios.get(`/user/profile/${userId}`);
          setProfile({
            fullName: response.data.fullName,
            profilePhoto: response.data.profilePhoto,
          });
        } catch (error) {
          console.error('Error fetching profile:', error.message);
        }
      }
    };

    fetchProfile();
  }, [isAuthenticated, userId]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const NavButton = ({ to, icon, label }) => (
    <Button
      component={Link}
      to={to}
      startIcon={icon}
      style={{
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: 500,
        fontSize: '16px',
      }}
    >
      {label}
    </Button>
  );

  return (
    <AppBar
      position="static"
      style={{
        background: 'linear-gradient(90deg, #4b266e 0%, #6b2b92 100%)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        marginBottom: '20px',
      }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          style={{
            fontWeight: 700,
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/home')}
        >
          SkillPort
        </Typography>

        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            {isAuthenticated ? (
              <>
                <NavButton to="/home" icon={<HomeIcon />} label="Home" />
                <NavButton to="/about-us" icon={<InfoIcon />} label="About Us" />
                <NavButton to="/courses" icon={<SchoolIcon />} label="Courses" />
                {role === 'instructor' && (
                  <NavButton to="/add-course" icon={<AddIcon />} label="Add Course" />
                )}
                {role !== 'instructor' && (
                  <NavButton to="/dashboard" icon={<DashboardIcon />} label="Dashboard" />
                )}
                <Button
                  onClick={handleProfileMenuOpen}
                  style={{ padding: 0 }}
                >
                  <Avatar
                    alt={profile.fullName}
                    src={profile.profilePhoto}
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid white',
                      backgroundColor: '#4b266e',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    {!profile.profilePhoto && getInitials(profile.fullName)}
                  </Avatar>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleProfileMenuClose}
                >
                  <MenuItem component={Link} to="/profile" onClick={handleProfileMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={() => { handleLogout(); handleProfileMenuClose(); }}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  style={{
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: 500,
                    fontSize: '16px',
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  style={{
                    color: '#ffd700',
                    textTransform: 'capitalize',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                >
                  Signup
                </Button>
              </>
            )}
          </div>
        )}
      </Toolbar>
      <Menu
        anchorEl={mobileMenuAnchorEl}
        open={Boolean(mobileMenuAnchorEl)}
        onClose={handleMobileMenuClose}
      >
        <MenuItem component={Link} to="/home" onClick={handleMobileMenuClose}>Home</MenuItem>
        <MenuItem component={Link} to="/about-us" onClick={handleMobileMenuClose}>About Us</MenuItem>
        <MenuItem component={Link} to="/courses" onClick={handleMobileMenuClose}>Courses</MenuItem>
        {isAuthenticated && (
          <>
            {role === 'instructor' ? (
              <MenuItem component={Link} to="/add-course" onClick={handleMobileMenuClose}>Add Course</MenuItem>
            ) : (
              <MenuItem component={Link} to="/dashboard" onClick={handleMobileMenuClose}>Dashboard</MenuItem>
            )}
            <MenuItem component={Link} to="/profile" onClick={handleMobileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={() => { handleLogout(); handleMobileMenuClose(); }}>Logout</MenuItem>
          </>
        )}
        {!isAuthenticated && (
          <>
            <MenuItem component={Link} to="/login" onClick={handleMobileMenuClose}>Login</MenuItem>
            <MenuItem component={Link} to="/signup" onClick={handleMobileMenuClose}>Signup</MenuItem>
          </>
        )}
      </Menu>
    </AppBar>
  );
}

export default Navbar;