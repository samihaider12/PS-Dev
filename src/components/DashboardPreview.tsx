import React, { useRef, useEffect, useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import gsap from 'gsap';

// Assets
import img1 from '../assets/pic1.png';
import img2 from '../assets/pic2.png';
import img3 from '../assets/pic3.png';
import img4 from '../assets/pic4.png';
import img5 from '../assets/pic5.png';
import img6 from '../assets/pic6.png';

const DashboardPreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Memoize project data
  const projectData = useMemo(() => [
    { img: img1, title: "Web Development", desc: "Premium Software Solutions" },
    { img: img2, title: "AI Integration", desc: "Smart Automation Systems" },
    { img: img3, title: "E-Commerce", desc: "Scalable Online Stores" },
    { img: img4, title: "Mobile Apps", desc: "Cross-Platform Experiences" },
    { img: img5, title: "UI/UX Design", desc: "Modern Digital Interfaces" },
    { img: img6, title: "Cloud Solutions", desc: "Secure Data Infrastructure" },
  ], []);

  // Duplicate for smooth infinite scroll
  const duplicatedProjects = useMemo(() => 
    [...projectData, ...projectData], 
    [projectData]
  );

  // Preload images
  useEffect(() => {
    projectData.forEach(item => {
      const img = new Image();
      img.src = item.img;
    });
  }, [projectData]);

  // GSAP animation for smooth scrolling - FIXED
  useEffect(() => {
    if (!sliderRef.current) return;

    // Get first item width for calculation
    const firstItem = sliderRef.current.firstChild as HTMLElement;
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;
    const gap = window.innerWidth < 600 ? 20 : 40; // Based on your gap values
    const totalItemWidth = itemWidth + gap;
    
    // Calculate total width of one set of projects
    const singleSetWidth = projectData.length * totalItemWidth;
    
    // Duration for animation (adjust speed here)
    const duration = 40; // seconds for one complete loop

    // Clear any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Create GSAP animation with proper infinite loop
    animationRef.current = gsap.to(sliderRef.current, {
      x: `-=${singleSetWidth}`, // Move by one complete set
      duration: duration,
      ease: "none",
      repeat: -1, // Infinite repeat
      modifiers: {
        x: gsap.utils.unitize(x => {
          // Reset position when it reaches the end of first set
          const xNum = parseFloat(x);
          if (xNum <= -singleSetWidth) {
            return '0px';
          }
          return x;
        })
      }
    });

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        animationRef.current.pause();
        
        // Add subtle hover effect
        gsap.to(sliderRef.current, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.play();
        
        // Remove hover effect
        gsap.to(sliderRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [duplicatedProjects, projectData.length]);

  return (
    <Paper
      ref={containerRef}
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
        willChange: 'transform',
        transform: 'translateZ(0)',
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
        {/* GSAP animated container */}
        <Box
          ref={sliderRef}
          sx={{
            display: 'flex',
            gap: { xs: '20px', md: '40px' },
            padding: { xs: '0 20px', md: '0 40px' },
            willChange: 'transform',
            // Initial position
            transform: 'translateX(0px)',
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <Box
              key={`${project.title}-${index}`}
              sx={{
                position: 'relative',
                flexShrink: 0,
                width: { xs: 280, md: 780 },
                height: { xs: 200, md: 460 },
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(38, 198, 218, 0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'subpixel-antialiased',
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={project.img}
                alt={project.title}
                loading="lazy"
                decoding="async"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
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
                  pointerEvents: 'none',
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

        {/* Gradient edges for better UX */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(to right, #0a0a0a 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(to left, #0a0a0a 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      </Box>
    </Paper>
  );
};

export default DashboardPreview;