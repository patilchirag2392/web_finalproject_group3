

// import React from 'react';
// import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div style={{ 
//       backgroundImage: `url("/images/image2.jpg")`, 
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center', 
//       minHeight: '100vh', 
//       paddingTop: '50px', 
//       paddingBottom: '50px' 
//     }}>
//       <Container style={{ 
//         backgroundColor: 'rgba(255, 255, 255, 0.8)', 
//         padding: '30px', 
//         borderRadius: '10px', 
//         boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' 
//       }}>
//         <Typography variant="h3" style={{ fontWeight: 700, textAlign: 'center', marginBottom: '20px', color: '#4b266e' }}>
//           Welcome to SkillPort
//         </Typography>
//         <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '30px', color: '#6b2b92' }}>
//           Your gateway to a world of knowledge and skill enhancement
//         </Typography>
//         <Grid container spacing={4} style={{ marginBottom: '30px' }}>
//           <Grid item xs={12} md={6}>
//             <CardMedia
//               component="img"
//               image="/images/learning.jpg"
//               alt="Learning Together"
//               style={{
//                 borderRadius: '10px',
//                 boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="body1" style={{ lineHeight: 1.8, fontSize: '23px' }}>
//               At SkillPort, we believe in the power of continuous learning and the transformative impact it can have on personal and professional growth.
              
//             </Typography>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} style={{ marginBottom: '30px' }}>
//           <Grid item xs={12} sm={6} md={3}>
//             <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
//               <CardMedia
//                 component="img"
//                 style={{
//                   height: '200px',
//                   objectFit: 'cover',
//                 }}
//                 image="/images/high-quality.jpg"
//                 alt="High-quality courses"
//               />
//               <CardContent>
//                 <Typography variant="h6" style={{ fontWeight: 600, color: '#1976d2', marginBottom: '10px' }}>
//                   High-quality courses
//                 </Typography>
//                 <Typography variant="body2">
//                   Learn from industry experts across a diverse range of subjects.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
//               <CardMedia
//                 component="img"
//                 style={{
//                   height: '200px',
//                   objectFit: 'cover',
//                 }}
//                 image="/images/flexibility.jpg"
//                 alt="Flexible learning schedules"
//               />
//               <CardContent>
//                 <Typography variant="h6" style={{ fontWeight: 600, color: '#1976d2', marginBottom: '10px' }}>
//                   Flexible learning schedules
//                 </Typography>
//                 <Typography variant="body2">
//                   Study at your own pace and fit learning into your lifestyle.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
//               <CardMedia
//                 component="img"
//                 style={{
//                   height: '200px',
//                   objectFit: 'cover',
//                 }}
//                 image="/images/interactive.jpg"
//                 alt="Interactive projects"
//               />
//               <CardContent>
//                 <Typography variant="h6" style={{ fontWeight: 600, color: '#1976d2', marginBottom: '10px' }}>
//                   Interactive projects
//                 </Typography>
//                 <Typography variant="body2">
//                   Gain hands-on experience through engaging projects and assignments.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
//               <CardMedia
//                 component="img"
//                 style={{
//                   height: '200px',
//                   objectFit: 'cover',
//                 }}
//                 image="/images/community.jpg"
//                 alt="Supportive community"
//               />
//               <CardContent>
//                 <Typography variant="h6" style={{ fontWeight: 600, color: '#1976d2', marginBottom: '10px' }}>
//                   Supportive community
//                 </Typography>
//                 <Typography variant="body2">
//                   Connect with fellow learners and mentors for guidance and support.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//         <Typography variant="body1" style={{ lineHeight: 1.8, fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>
//           Join us on this exciting journey of discovery and skill mastery. With SkillPort, your potential is limitless!
//         </Typography>
//         <div style={{ textAlign: 'center' }}>
//           <Button
//             variant="contained"
//             size="large"
//             onClick={() => navigate('/courses')}
//             style={{ backgroundColor: '#4b266e', color: 'white', padding: '10px 30px', fontSize: '16px' }}
//           >
//             Explore Courses
//           </Button>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;



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
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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
            Welcome to Skillport - A Skill-sharing Platform
          </Typography>
        </Toolbar>
      </AppBar>

     {/* Hero Section */}
<Box
  sx={{
    background: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0') no-repeat center center`,
    backgroundSize: 'cover',
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
    '&:hover': {
      backgroundColor: '#6a11cb', // Change to purple on hover
      color: 'white', // Change text color to white on hover
      transform: 'scale(1.05)',
    },
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

      {/* Subscription Plans Section */}
<Box sx={{ padding: '80px 20px', background: '#fff' }}>
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
      Subscription Plans
    </Typography>
    <TableContainer component={Paper} sx={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', borderRadius: '12px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="subscription plans table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#6a11cb' }}>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Features</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Basic</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Pro</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Enterprise</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            { feature: 'Access to Courses', basic: '✓', pro: '✓', enterprise: '✓' },
            { feature: 'HD Video Quality', basic: '✓', pro: '✓', enterprise: '✓' },
            { feature: 'Downloadable Resources', basic: '', pro: '✓', enterprise: '✓' },
            { feature: 'Certificate of Completion', basic: '', pro: '✓', enterprise: '✓' },
            { feature: 'Priority Support', basic: '', pro: '', enterprise: '✓' },
            { feature: 'Custom Learning Paths', basic: '', pro: '', enterprise: '✓' },
            { feature: 'Price', basic: '$9.99/mo', pro: '$19.99/mo', enterprise: 'Contact Us' },
          ].map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                {row.feature}
              </TableCell>
              <TableCell align="center">{row.basic}</TableCell>
              <TableCell align="center">{row.pro}</TableCell>
              <TableCell align="center">{row.enterprise}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>

    </Box>
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

{/* Skill Showcase Gallery */}
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
      Skill Showcase Gallery
    </Typography>
    <Grid container spacing={4}>
      {[
        { title: 'Web Design Portfolio', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', description: 'A collection of responsive websites created using HTML, CSS, and JavaScript.' },
        { title: 'Mobile App Development', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c', description: 'Innovative mobile applications built with React Native for iOS and Android.' },
        { title: 'Data Visualization Project', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdlYiUyMGRlc2lnbnxlbnwwfHx8fDE2OTkxOTg4OTI&ixlib=rb-4.0.3&q=80&w=1080', description: 'Interactive dashboards created using D3.js to visualize complex datasets.' },
        { title: 'Machine Learning Model', image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdlYiUyMGRlc2lnbnxlbnwwfHx8fDE2OTkxOTg4OTI&ixlib=rb-4.0.3&q=80&w=1080', description: 'A predictive model developed using Python and TensorFlow for image classification.' },
        { title: 'UX/UI Design Case Study', image: '/images/uiuxi.png', description: 'A comprehensive case study showcasing the redesign of a popular e-commerce platform.' },
        { title: 'Blockchain Application', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFwcCUyMGRldmVsb3BtZW50fHwwfHx8fDE2OTkxOTg4ODI&ixlib=rb-4.0.3&q=80&w=1080', description: 'A decentralized application (DApp) built on Ethereum for secure transactions.' },
      ].map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
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