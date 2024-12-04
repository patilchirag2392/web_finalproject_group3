/*import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography, Card, CardContent } from '@mui/material';
import axios from '../api';

function WatchCourse() {
  const { id } = useParams();
  const { role, userId } = useSelector((state) => state.auth);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/course/get/${id}`, {
          params: { role, userId },
        });
        setCourse(response.data);
      } catch (err) {
        console.error('Error fetching course:', err.response.data.message);
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id, role, userId]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!course) {
    return <Navigate to="/" />;
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4">{course.title}</Typography>
      <Typography variant="body1">{course.description}</Typography>
      <Typography variant="body2">Price: ${course.price}</Typography>
      <h3>Videos</h3>
      {course.videos.map((video, index) => (
        <Card key={index} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6">{video.title}</Typography>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default WatchCourse;*/



import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography, Card, CardContent, Divider, Button } from '@mui/material';
import axios from '../api';

function WatchCourse() {
  const { id } = useParams();
  const { role, userId } = useSelector((state) => state.auth);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/course/get/${id}`, {
          params: { role, userId },
        });
        setCourse(response.data);
      } catch (err) {
        console.error('Error fetching course:', err.response?.data?.message || 'Unknown error');
        setError(err.response?.data?.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id, role, userId]);

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

  if (!course) {
    return <Navigate to="/" />;
  }

  return (
    <Container style={{ marginTop: '30px', maxWidth: '900px' }}>
      <Card style={{ padding: '20px', marginBottom: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" style={{ fontWeight: 700, marginBottom: '10px' }}>
          {course.title}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '10px', color: '#555' }}>
          {course.description}
        </Typography>
        <Typography variant="body2" style={{ fontWeight: 600, color: '#1976d2' }}>
          Price: ${course.price}
        </Typography>
        <Divider style={{ margin: '20px 0' }} />
        <Typography variant="h5" style={{ marginBottom: '10px', fontWeight: 600 }}>
          Course Videos
        </Typography>
        {course.videos.length === 0 ? (
          <Typography style={{ color: '#999' }}>No videos available for this course.</Typography>
        ) : (
          course.videos.map((video, index) => (
            <Card
              key={index}
              style={{
                marginBottom: '20px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                padding: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '5px', color: '#333' }}>
                  {video.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textTransform: 'none' }}
                >
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </Card>
    </Container>
  );
}

export default WatchCourse;

