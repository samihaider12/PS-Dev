import { Container, Box, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import aboutPic from '../assets/about.png';
import ContactFloatingIcon from "../components/ContactFloatingIcon";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import type { ReactElement } from 'react';

interface Value {
  key: string;
  side: 'left' | 'right';
  icon: ReactElement;
  gradient: string;
}

interface Stat {
  number: string;
  label: string;
  icon: ReactElement;
}

const AboutUs = (): ReactElement => {
  const { t } = useTranslation();
  const theme = useTheme();

  const values: Value[] = [
    { 
      key: "clarity", 
      side: "left",
      icon: <LightbulbIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      gradient: 'linear-gradient(135deg, #3BC1A8 0%, #6ED4C0 100%)'
    },
    { 
      key: "precision", 
      side: "right",
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      gradient: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)'
    },
    { 
      key: "purpose", 
      side: "left",
      icon: <GroupIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      gradient: 'linear-gradient(135deg, #3BC1A8 0%, #A78BFA 100%)'
    }
  ];

  const stats: Stat[] = [
    { number: '50+', label: 'Projects Completed', icon: <TrendingUpIcon /> },
    { number: '30+', label: 'Happy Clients', icon: <GroupIcon /> },
    { number: '99%', label: 'Client Satisfaction', icon: <CheckCircleIcon /> },
  ];

  return (
    <Box sx={{ 
      bgcolor: 'background.default',
      position: 'relative',
      overflow: 'hidden',
      pt: { xs: 8, md: 12 },
    }}>
      
      {/* Animated Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle, ${theme.palette.primary.main}22 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'pulse 8s ease-in-out infinite',
        zIndex: 0,
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse 10s ease-in-out infinite reverse',
        zIndex: 0,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mb: 8,
            position: 'relative',
          }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '3rem', md: '5rem' },
                lineHeight: 1.2,
                mb: 2,
                '& span': {
                  background: 'linear-gradient(135deg, #3BC1A8 0%, #A78BFA 50%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }
              }}
            >
              {t("about.mHead1")} <span>{t("about.mHead2")}</span>
            </Typography>
            
            <Box sx={{
              width: '150px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #3BC1A8, #A78BFA, transparent)',
              mx: 'auto',
              mt: 3,
              borderRadius: '2px',
            }} />
          </Box>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Grid container spacing={3} sx={{ mb: 8, justifyContent: 'center' }}>
            {stats.map((stat, index) => (
              <Grid size={{xs:6, md:4}} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Box sx={{
                    textAlign: 'center',
                    p: 3,
                    background: 'rgba(20, 27, 41, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(59, 193, 168, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'rgba(59, 193, 168, 0.5)',
                      boxShadow: '0 20px 40px rgba(59, 193, 168, 0.15)',
                    }
                  }}>
                    <Box sx={{ 
                      color: 'primary.main',
                      mb: 1,
                      '& svg': { fontSize: 40 }
                    }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" sx={{ 
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #3BC1A8 0%, #A78BFA 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {stat.number}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Grid container spacing={6} justifyContent="center">
          <Grid size={{xs:12, md:10}}>
            
            {/* Content Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{
                background: 'rgba(20, 27, 41, 0.4)',
                backdropFilter: 'blur(10px)',
                borderRadius: '32px',
                p: { xs: 3, md: 6 },
                border: '1px solid rgba(59, 193, 168, 0.15)',
                mb: 6,
              }}>
                <Typography sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.8, 
                  fontSize: { xs: 18, md: 20 },
                  mb: 4,
                  '&:first-of-type': {
                    fontSize: { xs: 20, md: 22 },
                    color: 'text.primary',
                    fontWeight: 500,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    pl: 3,
                  }
                }}>
                  {t("about.para1")}
                </Typography>
                
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: 18, md: 20 } }}>
                  {t("about.para2")}
                </Typography>
              </Box>
            </motion.div>

            {/* Premium Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box sx={{ position: 'relative', mb: 6 }}>
                {/* Animated Glow Rings */}
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  height: '90%',
                  borderRadius: '32px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}33 0%, ${theme.palette.secondary.main}33 100%)`,
                  filter: 'blur(40px)',
                  animation: 'pulse 4s ease-in-out infinite',
                }} />
                
                <Box
                  component="img"
                  src={aboutPic}
                  alt="About Us"
                  sx={{
                    width: '100%',
                    maxWidth: '900px',
                    mx: 'auto',
                    display: 'block',
                    borderRadius: '32px',
                    border: '1px solid rgba(59, 193, 168, 0.3)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(59, 193, 168, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(59, 193, 168, 0.4)',
                    }
                  }}
                />
              </Box>
            </motion.div>

            {/* More Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Box sx={{
                background: 'rgba(20, 27, 41, 0.4)',
                backdropFilter: 'blur(10px)',
                borderRadius: '32px',
                p: { xs: 3, md: 6 },
                border: '1px solid rgba(59, 193, 168, 0.15)',
              }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: 18, md: 20 }, mb: 4 }}>
                  {t("about.para3")}
                </Typography>
                <Typography sx={{ 
                  color: 'text.primary', 
                  lineHeight: 1.8, 
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 500,
                  fontStyle: 'italic',
                  borderTop: '1px solid rgba(59, 193, 168, 0.2)',
                  pt: 4,
                }}>
                  {t("about.para4")}
                </Typography>
              </Box>
            </motion.div>

          </Grid>
        </Grid>
      </Container>

      {/* Our Values Section - Premium Redesign */}
      <Box sx={{ 
        py: 15, 
        position: 'relative', 
        mt: 10,
        background: 'linear-gradient(180deg, transparent 0%, rgba(59, 193, 168, 0.05) 50%, transparent 100%)',
      }}>
        <Container maxWidth="lg">
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                textAlign: 'center', 
                mb: 8,
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                '& span': {
                  color: 'primary.main',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: 3,
                    background: 'linear-gradient(90deg, transparent, #3BC1A8, transparent)',
                    borderRadius: '2px',
                  }
                }
              }}
            >
              Our <span>Values</span>
            </Typography>
          </motion.div>

          {/* Values Timeline */}
          <Box sx={{ position: 'relative' }}>
            {/* Animated Center Line */}
            <Box sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: `linear-gradient(to bottom, transparent, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent)`,
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                background: theme.palette.primary.main,
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                background: theme.palette.secondary.main,
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite',
              }
            }} />

            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: val.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Grid 
                  container 
                  sx={{ 
                    mb: 8, 
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Content Side */}
                  <Grid size={{xs:12, md:6}} sx={{ 
                    textAlign: { xs: 'center', md: val.side === 'left' ? 'right' : 'left' }, 
                    px: { md: 4 },
                    order: { xs: 2, md: val.side === 'left' ? 1 : 2 } 
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Box sx={{
                        background: 'rgba(20, 27, 41, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        p: 4,
                        border: '1px solid rgba(59, 193, 168, 0.2)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          borderColor: 'rgba(59, 193, 168, 0.5)',
                          boxShadow: '0 20px 40px rgba(59, 193, 168, 0.2)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: val.side === 'left' ? 0 : 'auto',
                          right: val.side === 'right' ? 0 : 'auto',
                          width: '4px',
                          height: '100%',
                          background: val.gradient,
                        }
                      }}>
                        <Box sx={{ mb: 2 }}>
                          {val.icon}
                        </Box>
                        <Typography variant="h4" sx={{ 
                          fontWeight: 800, 
                          mb: 2,
                          background: val.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}>
                          {t(`values.${val.key}.title`)}
                        </Typography>
                        <Typography sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.8,
                        }}>
                          {t(`values.${val.key}.desc`)}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>

                  {/* Timeline Dot for Desktop */}
                  <Grid size={{xs:12, md:6}} sx={{ 
                    order: { xs: 1, md: val.side === 'left' ? 2 : 1 },
                    display: { xs: 'none', md: 'block' }
                  }}>
                    {val.side === 'left' ? (
                      <Box sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            boxShadow: ['0 0 20px rgba(59, 193, 168, 0.5)', '0 0 30px rgba(59, 193, 168, 0.8)', '0 0 20px rgba(59, 193, 168, 0.5)']
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Box sx={{
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            background: val.gradient,
                            border: '2px solid white',
                            ml: -4,
                          }} />
                        </motion.div>
                      </Box>
                    ) : (
                      <Box sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            boxShadow: ['0 0 20px rgba(59, 193, 168, 0.5)', '0 0 30px rgba(59, 193, 168, 0.8)', '0 0 20px rgba(59, 193, 168, 0.5)']
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Box sx={{
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            background: val.gradient,
                            border: '2px solid white',
                            mr: -4,
                          }} />
                        </motion.div>
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Add keyframe animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
        `}
      </style>

      <ContactFloatingIcon 
        whatsappNumber="+92 348-6805638"  
        linkedinProfile="https://www.linkedin.com/company/primestack-sol/posts/?feedView=all"  
        emailAddress="contact@primestacksol.com"   
        phoneNumber="+92 348-6805638"  
        themeColor="#3BC1A8"  
        position="bottom-right"  
        showEmail={true}   
        showPhone={true}   
      />
    </Box>
  );
};

export default AboutUs;