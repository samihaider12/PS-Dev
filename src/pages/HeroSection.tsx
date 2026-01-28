import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{maxHeight:"70vh"}} >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginTop:-10,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(38, 198, 218, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            zIndex: -1,
          }}
        />
 

        {/* Main Heading with Brand Typography */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem' },
            fontWeight: 600,
            lineHeight: 1,
            mb: 3,
            color: 'white',
            letterSpacing: '-0.02em'
          }}
        >
          <Box component="span" >
            {t("hero.heading1") || "Innovative Software"}
          </Box>
          <Box 
            component="span" 
            sx={{ 
              color: 'primary.main', // Teal Highlight
              fontStyle: 'italic',
              fontWeight: 400
            }}
          >
            {t("hero.heading2") || "Solutions"}
          </Box>
        </Typography>
        
        {/*  */}
        <Typography
          variant="h1"
          sx={{
            fontSize: {  xs: '40px',sm: '56px', md: '88px' },
            fontWeight: 600,
            lineHeight: 1,
            mb: 3,
            color: 'white',
            letterSpacing: ' -0.8px'
          }}
        >
          <Box component="span" sx={{ color: 'primary.main'}}>
            {t("hero.tagline1") || "Innovative Software"}
          </Box>
          <Box 
            component="span" 
            sx={{ 
              fontStyle: 'italic',
              fontWeight: 400
            }}
          >
            {t("hero.tagline2") || "Solutions"}
          </Box>
        </Typography>

        {/* Tagline / Sub-text */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mb: 6,
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6
          }}
        >
          {t("hero.description") || "Empowering your business with high-performance web applications, custom software, and AI-driven interactive experiences."}
        </Typography>

        {/* Action Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            component={Link}
            to="/works"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              boxShadow: '0 8px 20px rgba(38, 198, 218, 0.3)',
              '&:hover': {
                bgcolor: 'primary.dark',
                boxShadow: '0 10px 25px rgba(38, 198, 218, 0.4)',
              }
            }}
          >
            {t("buttons.work") || "View Our Work"}
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/services"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              borderColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main',
                bgcolor: 'transparent'
              }
            }}
          >
            {t("buttons.services") || "Services"}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Hero;