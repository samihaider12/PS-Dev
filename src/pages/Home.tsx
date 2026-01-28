import { Box, Container, Grid } from '@mui/material';
import Hero from '../pages/HeroSection';
import DashboardPreview from '../components/DashboardPreview';
import LogoSection from '../components/LogoSection';
import Delivery from '../components/Delivery';
import Works from '../pages/Works';
import ServiceSection from './Services';
import BackgroundLights from './backGroundLight';
const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        
      }}
    >
       <Box sx={{ position: "relative", minHeight: "100vh" ,marginTop:15}}>
          
          <BackgroundLights />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Hero />
            
          </Box>
        </Box>

      <Container sx={{ pt: { xs: 8, md: 12 }, pb: 10 }}>

        {/* 2. Dashboard Preview with 3D Effect */}
        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            perspective: '1200px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1100px',
              transform: 'rotateX(4deg)', // Optimized for better view
              boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 20px rgba(38, 198, 218, 0.1)', // Subtle Teal Glow
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(38, 198, 218, 0.2)', // Theme border
              bgcolor: 'background.paper'
            }}
          >
            <DashboardPreview />
          </Box>
        </Box>

        {/* 3. Partner Logos */}
        <Box sx={{ mt: { xs: 12, md: 18 } }}>
          <LogoSection />
        </Box>
      </Container>

      {/* 4. Delivery/Process Section */}
      <Box sx={{ py: 10, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Delivery />
      </Box>

      {/* 5. Works Section (Projects) */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12 }}>
            <Works />
          </Grid>
        </Grid>
      </Container>

      {/* 6. Services Section */}
      <Box sx={{ py: 10 }}>
        <ServiceSection />
      </Box>

      {/* Decorative Bottom Glow (Teal Gradient) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '500px',
          background: 'radial-gradient(circle, rgba(38, 198, 218, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    </Box>
  );
};

export default Home;