import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import axios from '../api';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [dashboardCourses, setDashboardCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useSelector((state) => state.auth); // Get the logged-in user's ID
  const navigate = useNavigate(); // For navigation to the "Watch Course" page

  useEffect(() => {
    const fetchDashboardCourses = async () => {
      try {
        const response = await axios.get('/course/dashboard', {
          params: { userId }, // Pass the logged-in user's ID
        });
        setDashboardCourses(response.data);
      } catch (error) {
        console.error('Error fetching dashboard courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardCourses();
  }, [userId]);

  const handleRemoveCourse = async (courseId) => {
    try {
      const response = await axios.delete(`/course/remove/${courseId}`, {
        params: { userId }, // Pass the userId for verification
      });
      setDashboardCourses(dashboardCourses.filter((course) => course._id !== courseId)); // Update the UI
      console.log(response.data.message);
    } catch (error) {
      console.error('Error removing course:', error.response?.data?.message || error.message);
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (dashboardCourses.length === 0) {
    return <Typography>No courses in your dashboard.</Typography>;
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>Your Dashboard</Typography>
      {dashboardCourses.map((course) => (
        <Card key={course._id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{course.title}</Typography>
            <Typography variant="body1">{course.description}</Typography>
            <Typography variant="body2">Price: ${course.price}</Typography>
            <Button
              variant="contained"
              
              onClick={() => navigate(`/watch/${course._id}`)} // Navigate to the "Watch Course" page
              style={{ backgroundColor: 'purple', color: 'white', padding: '10px 30px', fontSize: '16px' }}
            >
              Watch Course
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleRemoveCourse(course._id)} // Remove course from the dashboard
              style={{ marginTop: '10px' }}
            >
              Remove from Dashboard
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Dashboard;
