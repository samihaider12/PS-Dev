import React, { useRef, useEffect, useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';

// Assets - Consider using WebP format for better performance
import img1 from '../assets/pic1.png';
import img2 from '../assets/pic2.png';
import img3 from '../assets/pic3.png';
import img4 from '../assets/pic4.png';
import img5 from '../assets/pic5.png';
import img6 from '../assets/pic6.png';

const DashboardPreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);
  const speed = 0.5; // pixels per frame

  // Memoize project data to prevent re-renders
  const projectData = useMemo(() => [
    { img: img1, title: "Web Development", desc: "Premium Software Solutions" },
    { img: img2, title: "AI Integration", desc: "Smart Automation Systems" },
    { img: img3, title: "E-Commerce", desc: "Scalable Online Stores" },
    { img: img4, title: "Mobile Apps", desc: "Cross-Platform Experiences" },
    { img: img5, title: "UI/UX Design", desc: "Modern Digital Interfaces" },
    { img: img6, title: "Cloud Solutions", desc: "Secure Data Infrastructure" },
  ], []);

  // Duplicate for smooth infinite scroll - memoized
  const duplicatedProjects = useMemo(() => 
    [...projectData, ...projectData], 
    [projectData]
  );

  // Custom CSS-based animation (no Framer Motion)
  useEffect(() => {
    const animate = () => {
      if (containerRef.current) {
        positionRef.current -= speed;
        
        // Reset position when half way through
        const containerWidth = containerRef.current.scrollWidth / 2;
        if (Math.abs(positionRef.current) >= containerWidth) {
          positionRef.current = 0;
        }
        
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation only when component is mounted
    const timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 100); // Small delay to ensure everything is loaded

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(timeoutId);
    };
  }, []);

  // Preload images for better performance
  useEffect(() => {
    projectData.forEach(item => {
      const img = new Image();
      img.src = item.img;
    });
  }, [projectData]);

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: '#0a0a0a',
        border: '1px solid rgba(38, 198, 218, 0.3)',
        overflow: 'hidden',
        minHeight: { xs: 350, md: 550 },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 0 50px rgba(38, 198, 218, 0.15)',
        willChange: 'transform', // Performance hint
        transform: 'translateZ(0)', // Force GPU acceleration
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(38, 198, 218, 0.2)',
          bgcolor: 'rgba(38, 198, 218, 0.03)',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FF5F56' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FFBD2E' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#27C93F' }} />
        </Box>

        <Box
          sx={{
            height: 20,
            width: '40%',
            bgcolor: 'rgba(255,255,255,0.05)',
            borderRadius: '10px',
          }}
        />

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
          background: 'radial-gradient(circle at center, rgba(38,198,218,0.08) 0%, #0A0A0A 100%)',
        }}
      >
        {/* Custom animated container */}
        <Box
          ref={containerRef}
          sx={{
            display: 'flex',
            gap: { xs: '20px', md: '40px' },
            padding: { xs: '0 20px', md: '0 40px' },
            willChange: 'transform',
            transform: 'translateZ(0)', // GPU acceleration
            transition: 'transform 0.1s linear', // Smooth animation
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <Box
              key={`${project.title}-${index}`}
              sx={{
                position: 'relative',
                flexShrink: 0,
                width: { xs: 280, md: 780 }, // Slightly smaller on mobile
                height: { xs: 200, md: 460 },
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(38, 198, 218, 0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                // Optimize rendering
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'subpixel-antialiased',
              }}
            >
              {/* Image with optimized loading */}
              <Box
                component="img"
                src={project.img}
                alt={project.title}
                loading="lazy" // Changed to lazy for better initial load
                decoding="async" // Async decoding
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  // Prevent layout shifts
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  // Optimize rendering
                  transform: 'translateZ(0)',
                  imageRendering: 'crisp-edges',
                }}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 50%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: { xs: 2, md: 5 },
                  pointerEvents: 'none', // Improves scroll performance
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'white',
                    fontWeight: 800,
                    fontSize: { xs: '1.2rem', md: '2.5rem' },
                    mb: 1,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    mb: 3,
                    fontSize: { xs: '0.8rem', md: '1.1rem' },
                    maxWidth: '80%',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  {project.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default DashboardPreview;