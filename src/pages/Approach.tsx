// Approach.tsx
// import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
//   Divider,
  useTheme,
  alpha,
  Button
} from '@mui/material';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import ScheduleIcon from '@mui/icons-material/Schedule';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Approach = () => {
//   const { t } = useTranslation();
  const theme = useTheme();

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business goals, target audience, and competition to create a strategic foundation.',
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      color: '#3BC1A8'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Developing a comprehensive roadmap with clear milestones, timelines, and resource allocation for seamless execution.',
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      color: '#2196F3'
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'Crafting pixel-perfect designs and writing clean, efficient code to bring your vision to life with cutting-edge technology.',
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
      color: '#9C27B0'
    },
    {
      number: '04',
      title: 'Testing & Quality',
      description: 'Rigorous testing across devices and browsers to ensure flawless performance, security, and user experience.',
      icon: <CheckCircleOutlineIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      color: '#4CAF50'
    },
    {
      number: '05',
      title: 'Launch & Deployment',
      description: 'Smooth deployment with proper documentation, training, and support for a successful go-live experience.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
      color: '#FF9800'
    },
    {
      number: '06',
      title: 'Growth & Optimization',
      description: 'Continuous monitoring, analytics, and optimization to ensure your digital presence evolves with your business.',
      icon: <GroupIcon sx={{ fontSize: 40, color: '#E91E63' }} />,
      color: '#E91E63'
    }
  ];

  // Core principles
  const corePrinciples = [
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work as an extension of your team, ensuring transparency and collaboration at every step.',
      icon: '👥'
    },
    {
      title: 'Innovation Driven',
      description: 'We stay ahead of trends and leverage cutting-edge technologies to deliver solutions that give you a competitive edge.',
      icon: '🚀'
    },
    {
      title: 'Quality Excellence',
      description: 'Every pixel, every line of code, and every interaction is crafted with precision and attention to detail.',
      icon: '⭐'
    },
    {
      title: 'Agile Methodology',
      description: 'Flexible and iterative development process that adapts to changes and delivers value at every stage.',
      icon: '🔄'
    },
    {
      title: 'Data-Backed Decisions',
      description: 'We base our strategies on analytics and insights, ensuring measurable results and continuous improvement.',
      icon: '📊'
    },
    {
      title: 'Sustainable Solutions',
      description: 'Building scalable and maintainable solutions that grow with your business and stand the test of time.',
      icon: '🌱'
    }
  ];

  return (
    <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        overflow: 'hidden',
        mb: { xs: 6, md: 10 }
      }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={6}>
            <Grid size={{xs:12, md:6}}>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 'bold',
                    letterSpacing: 2,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  OUR METHODOLOGY
                </Typography>
                
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.1,
                    color: 'white',
                    mb: 3
                  }}
                >
                  Process That
                  <Box component="span" sx={{ color: 'primary.main' }}> Delivers </Box>
                  Excellence
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  A structured, transparent, and collaborative approach to turning 
                  your vision into exceptional digital experiences that drive results.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    component={Link}
                    to="https://www.linkedin.com/company/primestack-sol/posts/?feedView=all"
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'black',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        boxShadow: '0 0 20px rgba(59, 193, 168, 0.4)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Start Your Project
                  </Button>

                  <Button
                    variant="outlined"
                    component={Link}
                    to="/work"
                    sx={{
                      borderColor: 'rgba(59, 193, 168, 0.5)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      '&:hover': {
                        borderColor: '#3BC1A8',
                        bgcolor: 'rgba(59, 193, 168, 0.05)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    View Our Work
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{xs:12, md:6}}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '400px' },
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Approach Process"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.7
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Steps Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 'bold',
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            OUR PROCESS
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.8rem' },
              color: 'white',
              mb: 2
            }}
          >
            Systematic & <Box component="span" sx={{ color: 'primary.main' }}>Structured</Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            A proven 6-step methodology that ensures quality, efficiency, and successful project delivery.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {processSteps.map((step, index) => (
            <Grid size={{xs:12, sm:6, md:4}} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(20,25,35,0.95) 0%, rgba(30,35,45,0.98) 100%)',
                  borderRadius: '16px',
                  border: `1px solid ${alpha(step.color, 0.2)}`,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${alpha(step.color, 0.2)}`,
                    borderColor: step.color
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '12px',
                        background: alpha(step.color, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        border: `1px solid ${alpha(step.color, 0.3)}`
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        color: alpha(step.color, 0.3),
                        lineHeight: 1
                      }}
                    >
                      {step.number}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      mb: 2,
                      fontSize: '1.4rem'
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Core Principles Section */}
      <Box sx={{
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`,
        py: { xs: 8, md: 12 },
        borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                letterSpacing: 2,
                mb: 2,
                display: 'block'
              }}
            >
              OUR PRINCIPLES
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.8rem' },
                color: 'white',
                mb: 2
              }}
            >
              Foundation of <Box component="span" sx={{ color: 'primary.main' }}>Excellence</Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400
              }}
            >
              Guiding principles that shape every project and ensure we deliver beyond expectations.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {corePrinciples.map((principle, index) => (
              <Grid size={{xs:12, sm:6, md:4}} key={index}>
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.05)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: '3rem',
                      mb: 3
                    }}
                  >
                    {principle.icon}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      mb: 2,
                      fontSize: '1.3rem'
                    }}
                  >
                    {principle.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7
                    }}
                  >
                    {principle.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
            borderRadius: '20px',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            p: { xs: 4, md: 8 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: alpha(theme.palette.primary.main, 0.05),
              filter: 'blur(40px)'
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.8rem' },
                color: 'white',
                mb: 2
              }}
            >
              Ready to Transform
              <Box component="span" sx={{ color: 'primary.main' }}> Your Digital </Box>
              Presence?
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                mb: 4,
                fontWeight: 400
              }}
            >
              Let's discuss how our proven approach can help you achieve your business goals.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                component={Link}
                to="https://www.linkedin.com/company/primestack-sol/posts/?feedView=all"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'black',
                  fontWeight: 'bold',
                  px: 6,
                  py: 1.8,
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    boxShadow: '0 0 30px rgba(59, 193, 168, 0.5)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Get Started Today
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="/about"
                sx={{
                  borderColor: 'rgba(59, 193, 168, 0.5)',
                  color: 'white',
                  px: 6,
                  py: 1.8,
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: '#3BC1A8',
                    bgcolor: 'rgba(59, 193, 168, 0.05)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Learn About Us
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Approach;