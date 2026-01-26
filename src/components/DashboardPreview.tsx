import React from 'react';
import { Box, Paper, Typography} from '@mui/material';
import { motion } from 'framer-motion';

// Assets
import img1 from '../assets/pic1.png';
import img2 from '../assets/pic2.png';
import img3 from '../assets/pic3.png';
import img4 from '../assets/pic4.png';
import img5 from '../assets/pic5.png';
import img6 from '../assets/pic6.png';

const DashboardPreview: React.FC = () => {
  const projectData = [
    { img: img1, title: "Web Development", desc: "Premium Software Solutions" },
    { img: img2, title: "AI Integration", desc: "Smart Automation Systems" },
    { img: img3, title: "E-Commerce", desc: "Scalable Online Stores" },
    { img: img4, title: "Mobile Apps", desc: "Cross-Platform Experiences" },
    { img: img5, title: "UI/UX Design", desc: "Modern Digital Interfaces" },
    { img: img6, title: "Cloud Solutions", desc: "Secure Data Infrastructure" },
  ];

  // Duplicating for infinite scroll
  const duplicatedProjects = [...projectData, ...projectData];

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: '#0a0a0a', 
        border: '1px solid rgba(38, 198, 218, 0.3)', 
        overflow: 'hidden',
        minHeight: { xs: '350px', md: '550px' },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 0 50px rgba(38, 198, 218, 0.15)', 
      }}
    >
      {/* Top Bar - Browser Look */}
      <Box 
        sx={{ 
          p: 2, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(38, 198, 218, 0.2)',
          bgcolor: 'rgba(38, 198, 218, 0.03)'
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FF5F56' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FFBD2E' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#27C93F' }} />
        </Box>
        <Box sx={{ height: 20, width: '40%', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '10px' }} />
        <Box sx={{ width: 30 }} />
      </Box>

      {/* Slider Area */}
      <Box 
        sx={{ 
          flexGrow: 1,
          display: 'flex', 
          alignItems: 'center', 
          overflow: 'hidden', 
          position: 'relative',
          background: 'radial-gradient(circle at center, rgba(38, 198, 218, 0.08) 0%, #0A0A0A 100%)' 
        }}
      >
        <motion.div
          style={{ display: 'flex', gap: '40px', padding: '0 40px' }}
          animate={{ x: ['0%', '-50%'] }} 
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
        >
          {duplicatedProjects.map((project, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                flexShrink: 0,
                width: { xs: 350, md: 800 }, 
                height: { xs: 250, md: 480 },
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(38, 198, 218, 0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              {/* Main Image */}
              <Box
                component="img"
                src={project.img}
                alt={project.title}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Fixed Text Overlay (Jaisa aapke image card mein hai) */}
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 50%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: { xs: 3, md: 5 },
                  textAlign: 'left'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 800, 
                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                    mb: 1
                  }}
                >
                  {project.title}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    mb: 3,
                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                    maxWidth: '80%'
                  }}
                >
                  {project.desc}
                </Typography>

                 
              </Box>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Paper>
  );
};

export default DashboardPreview;