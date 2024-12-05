
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
import { Container, Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
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
      const courseToAdd = courses.find((c) => c._id === courseId);
      const response = await axios.post('/course/add', {
        title: courseToAdd.title,
        description: courseToAdd.description,
        price: courseToAdd.price,
        videos: courseToAdd.videos,
        instructorId: courseToAdd.instructorId,
        userId,
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
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course._id}>
            <Card style={{ height: '100%', transition: 'transform 0.2s' }} 
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
              <CardContent>
                <Typography variant="h5" gutterBottom>{course.title}</Typography>
                <Typography variant="body1">{course.description}</Typography>
                <Typography variant="body2" style={{ marginTop: '10px', fontWeight: 600 }}>
                  Price: ${course.price}
                </Typography>
              </CardContent>
              <CardActions>
                {role === 'instructor' ? (
                  <Button
                    variant="contained"
                    
                    style={{ backgroundColor: 'purple', color: 'white', padding: '10px 30px', fontSize: '16px' }}
                    onClick={() => window.location.href = `/watch/${course._id}`}
                  >
                    Watch Course
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                   
                    style={{ backgroundColor: 'purple', color: 'white', padding: '10px 30px', fontSize: '16px' }}
                    onClick={() => handleAddToDashboard(course._id)}
                  >
                    Add to Dashboard
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ViewCourses;
