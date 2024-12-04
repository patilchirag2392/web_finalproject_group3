// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Card, CardContent, TextField, Button, Avatar } from '@mui/material';
// import { useSelector } from 'react-redux';
// import axios from '../api';

// function Profile() {
//   const { userId } = useSelector((state) => state.auth);
//   const [profile, setProfile] = useState(null);
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get(`/user/profile/${userId}`);
//         setProfile(response.data);
//         setFullName(response.data.fullName);
//         setEmail(response.data.email);
//         setProfilePhoto(response.data.profilePhoto);
//       } catch (err) {
//         console.error('Error fetching profile:', err.message);
//         setError('Unable to fetch profile');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [userId]);

//   const handlePhotoChange = (event) => {
//     if (event.target.files.length > 0) {
//       setProfilePhoto(event.target.files[0]);
//     }
//   };

//   const handleUpdateProfile = async () => {
//     const formData = new FormData();
//     formData.append('fullName', fullName);
//     formData.append('email', email);
//     if (profilePhoto instanceof File) {
//       formData.append('profilePhoto', profilePhoto);
//     }

//     try {
//       const response = await axios.put(`/user/profile/${userId}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setProfile(response.data.user);
//       setEditing(false);
//       alert('Profile updated successfully!');
//     } catch (error) {
//       console.error('Error updating profile:', error.message);
//       alert('Error updating profile');
//     }
//   };

//   if (loading) {
//     return <Typography style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</Typography>;
//   }

//   if (error) {
//     return (
//       <Typography style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>
//         {error}
//       </Typography>
//     );
//   }

//   return (
//     <Container style={{ marginTop: '30px', maxWidth: '600px' }}>
//       <Card style={{ padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
//         <CardContent>
//           <Typography variant="h4" style={{ fontWeight: 700, marginBottom: '20px' }}>
//             My Profile
//           </Typography>
//           {profilePhoto && (
//             <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//               <Avatar
//                 alt={profile.fullName}
//                 src={profilePhoto instanceof File ? URL.createObjectURL(profilePhoto) : profilePhoto}
//                 style={{ width: '100px', height: '100px', margin: '0 auto' }}
//               />
//             </div>
//           )}
//           {editing ? (
//             <>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 style={{ marginBottom: '10px' }}
//               />
//               <TextField
//                 fullWidth
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{ marginBottom: '10px' }}
//               />
//               <input type="file" accept="image/*" onChange={handlePhotoChange} />
//               <div style={{ marginTop: '20px' }}>
//                 <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
//                   Save Changes
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   onClick={() => setEditing(false)}
//                   style={{ marginLeft: '10px' }}
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </>
//           ) : (
//             <>
//               <Typography variant="body1" style={{ marginBottom: '10px' }}>
//                 <strong>Name:</strong> {profile.fullName}
//               </Typography>
//               <Typography variant="body1" style={{ marginBottom: '10px' }}>
//                 <strong>Email:</strong> {profile.email}
//               </Typography>
//               <Typography variant="body1" style={{ marginBottom: '10px' }}>
//                 <strong>Role:</strong> {profile.type === 'instructor' ? 'Instructor' : 'User'}
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => setEditing(true)}
//                 style={{ marginTop: '20px' }}
//               >
//                 Edit Profile
//               </Button>
//             </>
//           )}
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }

// export default Profile;



import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, TextField, Button, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from '../api';

function Profile() {
  const { userId } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/user/profile/${userId}`);
        setProfile(response.data);
        setFullName(response.data.fullName);
        setEmail(response.data.email);
        setProfilePhoto(response.data.profilePhoto);
      } catch (err) {
        console.error('Error fetching profile:', err.message);
        setError('Unable to fetch profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [userId]);

  const handlePhotoChange = (event) => {
    if (event.target.files.length > 0) {
      setProfilePhoto(event.target.files[0]); // Temporarily set file object for preview
    }
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    if (profilePhoto instanceof File) {
      formData.append('profilePhoto', profilePhoto);
    }

    try {
      const response = await axios.put(`/user/profile/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setProfile(response.data.user);
      setProfilePhoto(response.data.user.profilePhoto); // Set updated photo URL
      setEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.message);
      alert('Error updating profile');
    }
  };

  if (loading) {
    return <Typography style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</Typography>;
  }

  if (error) {
    return (
      <Typography style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>
        {error}
      </Typography>
    );
  }

  return (
    <Container style={{ marginTop: '30px', maxWidth: '600px' }}>
      <Card style={{ padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h4" style={{ fontWeight: 700, marginBottom: '20px' }}>
            My Profile
          </Typography>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Avatar
  alt={profile.fullName}
  src={
    profilePhoto instanceof File
      ? URL.createObjectURL(profilePhoto) // Preview uploaded photo
      : profilePhoto ? `http://localhost:4000${profilePhoto}` : '/images/default-avatar.png' // Serve from server
  }
  style={{ width: '100px', height: '100px', margin: '0 auto' }}
/>
          </div>
          {editing ? (
            <>
              <TextField
                fullWidth
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ marginBottom: '10px' }}
              />
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: '10px' }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ marginTop: '10px' }}
              />
              <div style={{ marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
                  Save Changes
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setEditing(false)}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                <strong>Name:</strong> {profile.fullName}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                <strong>Email:</strong> {profile.email}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                <strong>Role:</strong> {profile.type === 'instructor' ? 'Instructor' : 'User'}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setEditing(true)}
                style={{ marginTop: '20px' }}
              >
                Edit Profile
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Profile;

