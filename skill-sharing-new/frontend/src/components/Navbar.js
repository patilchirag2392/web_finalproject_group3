





// import React from 'react';
// import { AppBar, Toolbar, Button, Typography } from '@mui/material';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../slices/authSlice';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const { isAuthenticated, role } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//     window.location.href = '/login';
//   };

//   return (
//     <AppBar
//       position="static"
//       style={{
//         background: 'linear-gradient(90deg, #4b266e 0%, #6b2b92 100%)',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
//         marginBottom: '20px',
//       }}
//     >
//       <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Typography
//           variant="h6"
//           style={{
//             fontWeight: 700,
//             color: 'white',
//             fontSize: '24px',
//           }}
//         >
//           <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
//             SkillPort
//           </Link>
//         </Typography>
//         <div style={{ display: 'flex', gap: '15px' }}>
//           {isAuthenticated ? (
//             <>
//               <Button
//                 component={Link}
//                 to="/home"
//                 style={{
//                   color: 'white',
//                   textTransform: 'capitalize',
//                   fontWeight: 500,
//                   fontSize: '16px',
//                 }}
//               >
//                 Home
//               </Button>
//               <Button
//                 component={Link}
//                 to="/courses"
//                 style={{
//                   color: 'white',
//                   textTransform: 'capitalize',
//                   fontWeight: 500,
//                   fontSize: '16px',
//                 }}
//               >
//                 Courses
//               </Button>
//               {role === 'instructor' && (
//                 <Button
//                   component={Link}
//                   to="/add-course"
//                   style={{
//                     color: 'white',
//                     textTransform: 'capitalize',
//                     fontWeight: 500,
//                     fontSize: '16px',
//                   }}
//                 >
//                   Add Course
//                 </Button>
//               )}
//               {/* Render Dashboard only if the role is not "instructor" */}
//               {role !== 'instructor' && (
//                 <Button
//                   component={Link}
//                   to="/dashboard"
//                   style={{
//                     color: 'white',
//                     textTransform: 'capitalize',
//                     fontWeight: 500,
//                     fontSize: '16px',
//                   }}
//                 >
//                   Dashboard
//                 </Button>
//               )}

// <Button
//   component={Link}
//   to="/profile"
//   style={{
//     color: 'white',
//     textTransform: 'capitalize',
//     fontWeight: 500,
//     fontSize: '16px',
//   }}
// >
//   Profile
// </Button>
//               <Button
//                 onClick={handleLogout}
//                 style={{
//                   color: '#ff6666',
//                   textTransform: 'capitalize',
//                   fontWeight: 600,
//                   fontSize: '16px',
//                 }}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 component={Link}
//                 to="/login"
//                 style={{
//                   color: 'white',
//                   textTransform: 'capitalize',
//                   fontWeight: 500,
//                   fontSize: '16px',
//                 }}
//               >
//                 Login
//               </Button>
//               <Button
//                 component={Link}
//                 to="/signup"
//                 style={{
//                   color: '#ffd700',
//                   textTransform: 'capitalize',
//                   fontWeight: 600,
//                   fontSize: '16px',
//                 }}
//               >
//                 Signup
//               </Button>
//             </>
//           )}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { Link } from 'react-router-dom';
import axios from '../api';

function Navbar() {
  const { isAuthenticated, role, userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({ fullName: '', profilePhoto: null });

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
    window.location.href = '/login';
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

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
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            SkillPort
          </Link>
        </Typography>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {isAuthenticated ? (
            <>
              <Button
                component={Link}
                to="/home"
                style={{
                  color: 'white',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontSize: '16px',
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/courses"
                style={{
                  color: 'white',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontSize: '16px',
                }}
              >
                Courses
              </Button>

   

              {role === 'instructor' && (
                <Button
                  component={Link}
                  to="/add-course"
                  style={{
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: 500,
                    fontSize: '16px',
                  }}
                >
                  Add Course
                </Button>
              )}
              {role !== 'instructor' && (
                <Button
                  component={Link}
                  to="/dashboard"
                  style={{
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: 500,
                    fontSize: '16px',
                  }}
                >
                  Dashboard
                </Button>
              )}
              <Button
                component={Link}
                to="/profile"
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
              <Button
                onClick={handleLogout}
                style={{
                  color: '#ff6666',
                  textTransform: 'capitalize',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                Logout
              </Button>
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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


