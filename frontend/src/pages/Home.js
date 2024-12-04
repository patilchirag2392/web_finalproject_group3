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
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '20px' }}>
        Welcome to Skill Sharing Platform
      </Typography>
      <Typography variant="h5" style={{ marginBottom: '30px', color: '#555' }}>
        Learn from experts and share your knowledge with the world.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/courses')}
        style={{ backgroundColor: 'purple', color: 'white', padding: '10px 30px', fontSize: '16px' }}
      >
        Get Started
      </Button>
    </Container>
  );
}

export default Home;