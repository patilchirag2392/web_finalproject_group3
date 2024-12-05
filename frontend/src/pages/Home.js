import React from 'react';
import {
  Container, Typography, Button, Box, AppBar, Toolbar, Grid, Card, CardContent, CardMedia,
  Avatar, CircularProgress, Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DevicesIcon from '@mui/icons-material/Devices';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Home() {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: 'Emily Johnson',
      feedback: 'Skillport gave me the confidence to switch careers. The courses are practical and well-structured!',
      role: 'UX Designer',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Michael Brown',
      feedback: 'I love how accessible the courses are. The instructors make even the most complex topics easy to understand.',
      role: 'Web Developer',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Sophia Wilson',
      feedback: 'This platform provided me with the skills I needed to grow in my career. I highly recommend it to anyone looking to upskill.',
      role: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Alex Chen',
      feedback: 'Skillports diverse range of courses helped me explore new areas of interest and find my true passion.',
      role: 'Marketing Specialist',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
      name: 'Sarah Thompson',
      feedback: 'The quality of instruction on Skillport is outstanding. Ive learned more here than in my formal education.',
      role: 'Entrepreneur',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'David Rodriguez',
      feedback: 'Skillport\'s community features allowed me to connect with like-minded professionals and expand my network globally.',
      role: 'Business Consultant',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Header Section */}
      <AppBar position="static" sx={{ background: '#6a11cb', padding: '10px 0' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
            Skillport
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          minHeight: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'white',
          textAlign: 'center',
          padding: '50px',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
          Learn Anytime, Anywhere
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, mb: 4, maxWidth: '800px' }}>
          Join thousands of learners upgrading their skills and advancing their careers.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: 'white',
            color: '#6a11cb',
            padding: '15px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#f0f0f0', transform: 'scale(1.05)' },
            transition: 'all 0.3s ease-in-out',
          }}
          onClick={() => navigate('/courses')}
        >
          Explore Courses
        </Button>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ padding: '80px 20px', background: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '40px',
                  color: '#333',
                }}
              >
                Why Choose Us?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  color: '#555',
                  lineHeight: 1.8,
                  marginBottom: '30px',
                }}
              >
                At Skillport, we're committed to providing a superior learning experience. Our platform offers:
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <SchoolIcon sx={{ color: '#6a11cb', mr: 2, fontSize: 40 }} />
                    <Typography variant="h6">Expert Instructors</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <AccessTimeIcon sx={{ color: '#6a11cb', mr: 2, fontSize: 40 }} />
                    <Typography variant="h6">Flexible Learning</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <DevicesIcon sx={{ color: '#6a11cb', mr: 2, fontSize: 40 }} />
                    <Typography variant="h6">Multi-device Access</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <EmojiEventsIcon sx={{ color: '#6a11cb', mr: 2, fontSize: 40 }} />
                    <Typography variant="h6">Certification Programs</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                sx={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Videos Section */}
      <Box sx={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '60px',
              color: '#333',
            }}
          >
            Featured Courses
          </Typography>
          <Grid container spacing={6}>
            {[
              { title: 'Master React Basics', videoUrl: 'https://www.youtube.com/embed/DLX62G4lc44' },
              { title: 'Introduction to Python', videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw' },
              { title: 'Data Science Essentials', videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30' },
            ].map((video, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': { transform: 'translateY(-10px)', boxShadow:'0px 12px 25px rgba(0, 0, 0, 0.2)' },
                    borderRadius:'12px', 
                    overflow:'hidden'
                  }}
                >
                  <Box sx={{ position:'relative', paddingTop:'56.25%' }}>
                    <CardMedia
                      component='iframe'
                      src={video.videoUrl}
                      title={video.title}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      sx={{ position:'absolute', top:'0', left:'0', width:'100%', height:'100%' }}
                    />
                    <CircularProgress
                      sx={{
                        position:'absolute', 
                        top:'50%', 
                        left:'50%', 
                        marginTop:'-20px', 
                        marginLeft:'-20px'
                      }}
                    />
                  </Box>
                  <CardContent sx={{ padding:'20px' }}>
                    <Typography variant='h6' sx={{fontWeight:'bold', mb:'1', color:'#333'}}>
                      {video.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ padding:'80px 20px', background:'#f9f9f9' }}>
        <Container maxWidth='lg'>
          <Typography
            variant='h3'
            gutterBottom
            sx={{
              textAlign:'center', 
              fontWeight:'bold', 
              marginBottom:'60px', 
              color:'#333'
            }}
          >
            What Our Learners Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial,index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    padding:'30px', 
                    boxShadow:'0px 8px 20px rgba(0,0,0,.15)', 
                    backgroundColor:'#fff', 
                    borderRadius:'12px', 
                    height:'100%', 
                    display:'flex', 
                    flexDirection:'column'
                  }}
                >
                  <CardContent sx={{ flexGrow:'1' }}>
                    <Typography variant='body1' sx={{color:'#555', mb:'3', fontStyle:'italic'}}>
                      "{testimonial.feedback}"
                    </Typography>
                    <Stack direction='row' spacing='2' alignItems='center'>
                      <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{width:'60', height:'60'}} />
                      <Box>
                        <Typography variant='h6' sx={{fontWeight:'bold', color:'#333'}}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant='body2' sx={{color:'#6a11cb'}}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Stack>
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
          background:'#333', 
          color:'white', 
          padding:'40px 0', 
          textAlign:'center'
        }}
       >
         <Container maxWidth='lg'>
           <Typography variant='h6' sx={{marginBottom:'20'}} >
             Connect with us
           </Typography>  
{/* Social Media Links */}
<Stack direction='row' spacing={2} justifyContent='center' sx={{marginBottom:'30'}}>
  {/* Twitter Link */}
  <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
    <TwitterIcon sx={{fontSize:'30', color: 'white'}} />
  </a>

  {/* LinkedIn Link */}
  <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
    <LinkedInIcon sx={{fontSize:'30', color: 'white'}} />
  </a>

  {/* Facebook Link */}
  <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
    <FacebookIcon sx={{fontSize:'30', color: 'white'}} />
  </a>  
</Stack>
           {/* Footer Text */}
           <Typography variant='body1' sx={{opacity:.7, marginBottom:'10'}}>  
             ©2024 Skillport. All rights reserved.
           </Typography>  
           {/* Design Credit */}
           <Typography variant='body2'>  
             Designed with ❤️ for learners and instructors.
           </Typography>  
         </Container>  
       </Box>  
    </Box>  
   );  
}

export default Home;