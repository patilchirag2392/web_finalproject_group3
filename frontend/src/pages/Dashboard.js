import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  TextField,
} from '@mui/material';
import axios from '../api';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [dashboardCourses, setDashboardCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { userId } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardCourses = async () => {
      try {
        const response = await axios.get('/course/dashboard', {
          params: { userId },
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
      await axios.delete(`/course/remove/${courseId}`, {
        params: { userId },
      });
      setDashboardCourses(dashboardCourses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error('Error removing course:', error.response?.data?.message || error.message);
    }
  };

  const filteredCourses = dashboardCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  if (dashboardCourses.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h6">No courses in your dashboard.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Header Section */}
      <AppBar position="static" sx={{ background: '#6a11cb', padding: '10px 0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
            Skill Sharing Platform
          </Typography>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Welcome, Learner!
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Dashboard Content */}
      <Box sx={{ padding: '50px 20px' }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '40px',
              color: '#333',
            }}
          >
            My Dashboard
          </Typography>

          {/* Search and Filter */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <TextField
              variant="outlined"
              label="Search Courses"
              sx={{ width: '300px' }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>

          <Grid container spacing={4}>
            {filteredCourses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course._id}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                    padding: '20px',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {course.description}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2, color: '#6a11cb' }}>
                      Price: ${course.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888', mb: 2 }}>
                      Last Accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={course.progress || 0}
                      sx={{ height: '8px', borderRadius: '4px', mb: 2 }}
                    />
                    <Typography variant="body2" sx={{ color: '#6a11cb', mb: 2 }}>
                      Progress: {course.progress || 0}%
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#6a11cb',
                        color: 'white',
                        '&:hover': { backgroundColor: '#5a0fab' },
                      }}
                      onClick={() => navigate(`/watch/${course._id}`)}
                    >
                      Watch Course
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveCourse(course._id)}
                    >
                      Remove from Dashboard
                    </Button>
                  </Box>
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
          padding: '20px 0',
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

export default Dashboard;



