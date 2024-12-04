

import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      backgroundImage: `url("/images/image2.jpg")`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      paddingTop: '50px', 
      paddingBottom: '50px' 
    }}>
      <Container style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '30px', 
        borderRadius: '10px', 
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' 
      }}>
        <Typography variant="h3" style={{ fontWeight: 700, textAlign: 'center', marginBottom: '20px', color: '#4b266e' }}>
          Welcome to SkillPort
        </Typography>
        <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '30px', color: '#6b2b92' }}>
          Your gateway to a world of knowledge and skill enhancement
        </Typography>
        <Grid container spacing={4} style={{ marginBottom: '30px' }}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="/images/learning.jpg"
              alt="Learning Together"
              style={{
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" style={{ lineHeight: 1.8, fontSize: '23px' }}>
              At SkillPort, we believe in the power of continuous learning and the transformative impact it can have on personal and professional growth.
              
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginBottom: '30px' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
              <CardMedia
                component="img"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                }}
                image="/images/high-quality.jpg"
                alt="High-quality courses"
              />
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 600, color: '#1976d2', marginBottom: '10px' }}>
                  High-quality courses
                </Typography>
                <Typography variant="body2">
                  Learn from industry experts across a diverse range of subjects.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
              <CardMedia
                component="img"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                }}
                image="/images/flexibility.jpg"
                alt="Flexible learning schedules"
              />
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 600, color: '#1976d2', marginBottom: '10px' }}>
                  Flexible learning schedules
                </Typography>
                <Typography variant="body2">
                  Study at your own pace and fit learning into your lifestyle.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
              <CardMedia
                component="img"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                }}
                image="/images/interactive.jpg"
                alt="Interactive projects"
              />
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 600, color: '#1976d2', marginBottom: '10px' }}>
                  Interactive projects
                </Typography>
                <Typography variant="body2">
                  Gain hands-on experience through engaging projects and assignments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
              <CardMedia
                component="img"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                }}
                image="/images/community.jpg"
                alt="Supportive community"
              />
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 600, color: '#1976d2', marginBottom: '10px' }}>
                  Supportive community
                </Typography>
                <Typography variant="body2">
                  Connect with fellow learners and mentors for guidance and support.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="body1" style={{ lineHeight: 1.8, fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>
          Join us on this exciting journey of discovery and skill mastery. With SkillPort, your potential is limitless!
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/courses')}
            style={{ backgroundColor: '#4b266e', color: 'white', padding: '10px 30px', fontSize: '16px' }}
          >
            Explore Courses
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;



