
/*
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import axios from '../api';

function ViewCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { role, userId } = useSelector((state) => state.auth);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/course/get', {
          params: { userId, role },
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [role, userId]);

  const handleAddToDashboard = async (courseId) => {
    try {
      const response = await axios.post('/course/add', {
        title: courses.find((c) => c._id === courseId).title,
        description: courses.find((c) => c._id === courseId).description,
        price: courses.find((c) => c._id === courseId).price,
        videos: courses.find((c) => c._id === courseId).videos,
        instructorId: courses.find((c) => c._id === courseId).instructorId,
        userId, // Add the logged-in user's ID
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error adding course to dashboard');
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (courses.length === 0) {
    return <Typography>No courses available</Typography>;
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>Available Courses</Typography>
      {message && <Typography style={{ color: 'green', marginBottom: '20px' }}>{message}</Typography>}
      {courses.map((course) => (
        <Card key={course._id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{course.title}</Typography>
            <Typography variant="body1">{course.description}</Typography>
            <Typography variant="body2">Price: ${course.price}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddToDashboard(course._id)}
              style={{ marginTop: '10px' }}
            >
              Add to Dashboard
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default ViewCourses;*/
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  AppBar,
  Toolbar,
} from '@mui/material';
import axios from '../api';

function ViewCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { role, userId } = useSelector((state) => state.auth);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/course/get', { params: { userId, role } });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [role, userId]);

  const handleAddToDashboard = async (courseId) => {
    try {
      const courseToAdd = courses.find((c) => c._id === courseId);
      await axios.post('/course/add', { ...courseToAdd, userId });
      setMessage('Course added to your dashboard!');
    } catch (error) {
      setMessage('Error adding course to dashboard');
    }
  };

  if (loading) {
    return (
      <Container style={{ marginTop: '20px', textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Header Section */}
      <AppBar position="static" sx={{ background: '#6a11cb', padding: '10px 0' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
            Skill Sharing Platform
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          minHeight: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Learn and Grow with the Best
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.8, mb: 4 }}>
          Access top-notch courses and upgrade your skills
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: '#6a11cb',
            padding: '10px 30px',
            fontSize: '18px',
            '&:hover': { backgroundColor: '#f0f0f0' },
          }}
        >
          Explore Courses
        </Button>
      </Box>

      {/* Courses Section */}
      <Box
        sx={{
          background: '#f9f9f9',
          padding: '50px 20px',
        }}
      >
        <Container sx={{ padding: 0, margin: '0 auto', maxWidth: '100%' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '40px',
              color: '#333',
            }}
          >
            Available Courses
          </Typography>
          {message && (
            <Typography
              sx={{
                color: '#333',
                textAlign: 'center',
                marginBottom: '20px',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
              }}
            >
              {message}
            </Typography>
          )}
          <Grid
            container
            spacing={2}
            sx={{ margin: 0, padding: 0, justifyContent: 'center' }}
          >
            {courses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course._id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      padding: '20px',
                      flexGrow: 1,
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>
                      {course.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 'bold',
                        marginTop: '10px',
                        color: '#ffcc00',
                      }}
                    >
                      Price: ${course.price}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: 'white',
                      color: '#6a11cb',
                      padding: '10px',
                      '&:hover': { backgroundColor: '#f0f0f0' },
                    }}
                    onClick={() => handleAddToDashboard(course._id)}
                  >
                    Add to Dashboard
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          background: '#333',
          color: 'white',
          padding: '10px 0',
          marginTop: '0',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" sx={{ opacity: 0.7 }}>
          © 2024 Skill Sharing Platform. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Designed with ❤️ for learners and instructors.
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewCourses;
