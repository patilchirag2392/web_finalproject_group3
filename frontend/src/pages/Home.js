/*import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>Welcome to Skill Sharing Platform</Typography>
      <Typography variant="body1">
        Instructors can share knowledge by creating courses, and learners can access a wide variety of courses to upskill themselves.
      </Typography>
    </Container>
  );
}

export default Home;*/

import React from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

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
          padding: '30px',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Learn Anytime, Anywhere
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
          Join thousands of learners upgrading their skills and advancing their careers.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: '#6a11cb',
            padding: '10px 30px',
            fontSize: '16px',
            '&:hover': { backgroundColor: '#f0f0f0' },
          }}
          onClick={() => navigate('/courses')}
        >
          Explore Courses
        </Button>
      </Box>

      {/* Featured Videos Section */}
      <Box sx={{ padding: '50px 20px', background: '#f9f9f9' }}>
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
            Featured Videos
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Master React Basics', videoUrl: 'https://www.youtube.com/embed/DLX62G4lc44' },
              { title: 'Introduction to Python', videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw' },
              { title: 'Data Science Essentials', videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30' },
            ].map((video, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardMedia
                    component="iframe"
                    height="200"
                    src={video.videoUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
                      {video.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ padding: '50px 20px', background: '#fff' }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '30px',
              color: '#333',
            }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              color: '#555',
              textAlign: 'center',
              lineHeight: 1.8,
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            At Skill Sharing Platform, we empower learners and instructors to connect in meaningful ways. 
            Explore topics ranging from technology and personal development to business and beyond!
          </Typography>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ padding: '50px 20px', background: '#f9f9f9' }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '30px',
              color: '#333',
            }}
          >
            What Our Learners Say
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: 'Emily Johnson',
                feedback:
                  'The Skill Sharing Platform gave me the confidence to switch careers. The courses are practical and well-structured!',
                role: 'UX Designer',
              },
              {
                name: 'Michael Brown',
                feedback:
                  'I love how accessible the courses are. The instructors make even the most complex topics easy to understand.',
                role: 'Web Developer',
              },
              {
                name: 'Sophia Wilson',
                feedback:
                  'This platform provided me with the skills I needed to grow in my career. I highly recommend it to anyone looking to upskill.',
                role: 'Data Analyst',
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    padding: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                      "{testimonial.feedback}"
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6a11cb' }}>
                      {testimonial.role}
                    </Typography>
                  </CardContent>
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

export default Home;



