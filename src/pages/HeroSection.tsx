import { Box, Typography, Button, Container, Stack, Grid } from '@mui/material';
 
import { Link } from 'react-router-dom';

//  Image URL 
const HERO_BG_IMAGE = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop";

interface StatCardProps {
  title: string;
  subtitle: string;
}

const StatCard = ({ title, subtitle }: StatCardProps) => (
  <Box
    sx={{
      p: 4,
      borderRadius: '24px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(15px)',
      textAlign: 'center',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'rgba(255, 255, 255, 0.08)',
        transform: 'translateY(-8px)',
        borderColor: 'primary.main'
      }
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 500, color: 'white', mb: 1, lineHeight: 1.2 }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: 'black', fontSize: '17px' }}>
      {subtitle}
    </Typography>
  </Box>
);

const Hero = () => {
   

  return (
    <Box 
      sx={{ 
        position: 'relative',
        minHeight: {xs:"100vh",sm:"70vh" , md:'90vh'},
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a1118', // Deep Navy from Image 2
        backgroundImage: ` url(${HERO_BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
         mt:"-16px"
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Main Heading from Image 1 */}
          <Typography
             
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '60px' },
              fontWeight: 500,
              color:{ xs:"#201d1dff",sm:"white" ,md:'white'},
              textShadow:"5px",
              lineHeight: 1.1,
              mb: 3,
              maxWidth: '900px',
              letterSpacing: '-0.02em'
            }}
          >
              PrimeStack Solutions That Scale Business Growth
          </Typography>

          {/* Subtext from Image 1 */}
          <Typography
            sx={{
              color: 'white',
              maxWidth: '850px',
              mb: 2,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              px: { xs: 2, md: 0 }
            }}
          >
          Accelerate releases with automated CI/CD, resilient pipelines, and cloud-native DevOps that improve reliability and efficiency across AWS, Azure, and GCP.
          </Typography>

          {/* Buttons from Image 1 (Pill Shape) */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              component={Link}
              to="/connect"
              sx={{ 
                borderRadius: '30px',
                height:"34px", 
                bgcolor: '#3d5afe', // Image 2 Blue
                fontSize: '15px',
                fontWeight:400,
                '&:hover': { bgcolor: '#2a3eb1' }
              }}
            >
               Talk to an Expert
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/services"
              sx={{ 
                
                borderRadius: '30px',
                height:"34px", 
                borderColor: 'white',
                color: 'white',
                fontSize: '15px',
                fontWeight:400,
                '&:hover': { borderColor: 'primary.main', color: 'primary.main' }
              }}
            >
              Explore Cloud Services 
            </Button>
          </Stack>

          {/* Grid Cards with Image 1 Content */}
          <Grid container spacing={4}>
            <Grid sx={{height:"90px"}}  size={{xs:12,sm:6 ,md:4}}>
              <StatCard 
                title="CI/CD Automation Improved" 
                subtitle="10+ Startups & growing teams" 
              />
            </Grid>
            <Grid sx={{height:"90px"}}  size={{xs:12,sm:6 ,md:4}}>
              <StatCard 
                title="Observability + Incident Response" 
                subtitle="Monitoring • Alerts • MTTR focus" 
              />
            </Grid>
            <Grid sx={{height:"90px"}}  size={{xs:12,sm:6 ,md:4}}>
              <StatCard 
                title="DevOps as a Service" 
                subtitle="Lower ops overhead + faster delivery" 
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;