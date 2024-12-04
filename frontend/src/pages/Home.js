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