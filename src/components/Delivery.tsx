// Delivery.tsx ke top mein
import ContactFloatingIcon from "./ContactFloatingIcon";

import React, { useEffect, useRef, useState } from "react";
import { Container, Grid, Box, Button, Stack, Typography, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; 
import * as THREE from "three";

// Import your images
import img1 from "../assets/pic1.png";
import img2 from "../assets/pic2.png";
import img3 from "../assets/pic3.png";
import img4 from "../assets/pic4.png";
import img5 from "../assets/food.png";
import img6 from "../assets/pic6.png";

// Multiple images for film reel effect
import img7 from "../assets/hdhcbj.png";
import img8 from "../assets/firstBrowser.png";
import img9 from "../assets/firstBrowser2.png";
import img10 from "../assets/firstMobial1.png";
import img11 from "../assets/firstMobial2.png";

// ============================================
// TYPES AND INTERFACES
// ============================================
interface RubikCubeProps {
  faceImages: string[]; // Array of 6 image paths for 6 faces
}

interface FilmReelProps {
  images: string[]; // Array of images for film reel
  speed?: number; // Animation speed (seconds per image)
  autoPlay?: boolean; // Auto play animation
}

// ============================================
// VERTICAL FILM REEL COMPONENT (WITH LEFT/RIGHT CLICK NAVIGATION)
// ============================================
const FilmReelAnimation: React.FC<FilmReelProps> = ({ 
  images, 
  speed = 4, // seconds per image
  autoPlay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Auto play effect
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, speed * 1000);
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, speed, images.length]);

  // Handle next image
  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  // Handle previous image
  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  // Mouse hover effect - stop animation
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  // Mouse leave effect - resume animation
  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Handle image click - show selected image
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  // Close selected image
  const handleCloseSelected = () => {
    setSelectedImage(null);
  };

  // Get previous, current, and next images
  const getPrevIndex = (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = (currentIndex + 1) % images.length;

  return (
    <>
      {/* Selected Image Modal */}
      {selectedImage && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            backdropFilter: 'blur(10px)',
          }}
          onClick={handleCloseSelected}
        >
          <Box
            component="img"
            src={selectedImage}
            alt="selected"
            sx={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '12px',
              border: '3px solid #3BC1A8',
              boxShadow: '0 0 60px rgba(59, 193, 168, 0.6)',
              cursor: 'pointer',
            }}
          />
          <IconButton
            sx={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#3BC1A8',
              fontSize: '1.5rem',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'scale(1.1)',
              }
            }}
            onClick={handleCloseSelected}
          >
            ✕
          </IconButton>
        </Box>
      )}

      {/* Main Film Reel Container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(10,15,25,0.95) 0%, rgba(20,25,35,0.98) 100%)',
          borderRadius: '15px',
          border: '3px solid rgba(59, 193, 168, 0.4)',
          boxShadow: `
            0 20px 50px rgba(0, 0, 0, 0.8),
            inset 0 0 50px rgba(59, 193, 168, 0.15),
            0 0 80px rgba(59, 193, 168, 0.1)
          `,
          overflow: 'hidden',
          p: 3,
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h4"
          sx={{
            color: "#3BC1A8",
            textAlign: "center",
            mb: 3,
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: "bold",
            textShadow: "0 0 20px rgba(59, 193, 168, 0.9)",
            letterSpacing: "2px",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Dynamic, Distinct and Driven
        </Typography> 

        {/* Main Image Display Area */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          {/* Left side image (previous) - CLICK FOR PREVIOUS */}
          <Box
            sx={{
              position: 'absolute',
              left: '5%',
              width: '25%',
              height: '70%',
              opacity: 0.6,
              transform: 'scale(0.8)',
              transition: 'all 0.4s ease',
              zIndex: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.9,
                transform: 'scale(0.85)',
              }
            }}
            onClick={handlePrev}
          >
            <Box
              component="img"
              src={images[getPrevIndex]}
              alt="previous"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
                border: '2px solid rgba(59, 193, 168, 0.3)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
              }}
            />
            {/* Left Arrow Indicator */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '-25px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(59, 193, 168, 0.3)',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 3px 10px rgba(0,0,0,0.5)',
              }}
            >
              ←
            </Box>
          </Box>

          {/* Center Main Image */}
          <Box
            sx={{
              position: 'relative',
              width: '50%',
              height: '85%',
              zIndex: 3,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              component="img"
              src={images[currentIndex]}
              alt="current"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
                border: '3px solid #3BC1A8',
                boxShadow: `
                  0 15px 40px rgba(0, 0, 0, 0.9),
                  0 0 30px rgba(59, 193, 168, 0.5),
                  inset 0 0 20px rgba(59, 193, 168, 0.2)
                `,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: `
                    0 20px 50px rgba(0, 0, 0, 1),
                    0 0 40px rgba(59, 193, 168, 0.7)
                  `,
                }
              }}
              onClick={() => handleImageClick(images[currentIndex])}
            />
            
            {/* Image number indicator */}
            <Box
              sx={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                backgroundColor: '#3BC1A8',
                color: 'black',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.7)',
                zIndex: 4,
              }}
            >
              {currentIndex + 1}
            </Box>

            {/* Play/Pause Indicator */}
            <Box
              sx={{
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: isPlaying ? '#3BC1A8' : '#ff4444',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {isPlaying ? '▶ Playing' : '⏸ Paused'}
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: isPlaying ? '#2a9d8a' : '#cc0000',
                  animation: isPlaying ? 'pulse 1.5s infinite' : 'none',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  }
                }}
              />
            </Box>
          </Box>

          {/* Right side image (next) - CLICK FOR NEXT */}
          <Box
            sx={{
              position: 'absolute',
              right: '5%',
              width: '25%',
              height: '70%',
              opacity: 0.6,
              transform: 'scale(0.8)',
              transition: 'all 0.4s ease',
              zIndex: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.9,
                transform: 'scale(0.85)',
              }
            }}
            onClick={handleNext}
          >
            <Box
              component="img"
              src={images[getNextIndex]}
              alt="next"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
                border: '2px solid rgba(59, 193, 168, 0.3)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
              }}
            />
            {/* Right Arrow Indicator */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: '-25px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(59, 193, 168, 0.3)',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 3px 10px rgba(0,0,0,0.5)',
              }}
            >
              →
            </Box>
          </Box>
        </Box>

        {/* Instructions Text */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 3,
            px: { xs: 2, md: 8 },
          }}
        >
          
        </Box>

        {/* Progress Indicator */}
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '6px 15px',
              borderRadius: '15px',
              border: '1px solid rgba(59, 193, 168, 0.3)',
            }}
          >
            Image {currentIndex + 1} of {images.length} • {speed}s per image • {isPlaying ? 'Auto-scroll ON' : 'Auto-scroll OFF'}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

// ============================================
// RUBIK'S CUBE COMPONENT (NORMAL SIZE - IMPROVED)
// ============================================
const RubikCube: React.FC<RubikCubeProps> = ({ faceImages }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    if (faceImages.length !== 6) {
      console.error("RubikCube: Provide exactly 6 images for 6 faces");
      return;
    }

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    // Better camera position for normal size
    camera.position.set(5, 4, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    if (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);

    // Improved lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const loader = new THREE.TextureLoader();
    const faceTextures: THREE.Texture[] = faceImages.map((img: string) => {
      const tex: THREE.Texture = loader.load(img);
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tex;
    });

    const cubeGroup = new THREE.Group();

    // NORMAL CUBE SIZE - optimized for better visuals
    const cubeGeometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
    const cubeMaterials: THREE.MeshBasicMaterial[] = [
      new THREE.MeshBasicMaterial({ map: faceTextures[0] }),
      new THREE.MeshBasicMaterial({ map: faceTextures[1] }),
      new THREE.MeshBasicMaterial({ map: faceTextures[2] }),
      new THREE.MeshBasicMaterial({ map: faceTextures[3] }),
      new THREE.MeshBasicMaterial({ map: faceTextures[4] }),
      new THREE.MeshBasicMaterial({ map: faceTextures[5] })
    ];
    
    const mainCube = new THREE.Mesh(cubeGeometry, cubeMaterials);
    cubeGroup.add(mainCube);

    scene.add(cubeGroup);

    let time = 0;
    const animate = () => {
      time += 0.01;
      
      if (cubeGroup) {
        // Smooth rotation with slight bounce effect
        cubeGroup.rotation.y += 0.005;
        cubeGroup.rotation.x += 0.003;
        cubeGroup.rotation.z = Math.sin(time) * 0.01;
        
        // Slight floating effect
        cubeGroup.position.y = Math.sin(time) * 0.05;
        
        renderer.render(scene, camera);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      
      cubeGroup.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, [faceImages]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: "100%", 
        height: "520px", // Normal height
        borderRadius: "20px",
        overflow: "hidden",
        background: "transparent",
      }} 
    />
  );
};

// ============================================
// DELIVERY COMPONENT - UPDATED
// ============================================
const Delivery: React.FC = () => {
  const { t } = useTranslation();

  // Array of 6 images for Rubik Cube faces
  const rubikFaces: string[] = [img1, img2, img3, img4, img5, img6];

  // Array of images for film reel
  const filmReelImages: string[] = [
    img7, // hdhcbj.png
    img8, // firstBrowser.png
    img9, // firstBrowser2.png
    img10, // firstMobial1.png
    img11, // firstMobial2.png
    img1, // pic1.png
    img2, // pic2.png
    img3, // pic3.png
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container alignItems="center" spacing={{ xs: 6, md: 10 }}>
        
        {/* Left Content - Text Section */}
        <Grid size={{xs:12, md:5}}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: -20,
                width: 60,
                height: 60,
                borderLeft: "3px solid #3BC1A8",
                borderTop: "3px solid #3BC1A8",
                opacity: 0.5,
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "32px", md: "42px" },
                lineHeight: 1.2,
                color: "white",
                mb: 3,
              }}
            >
              {t("Delivery.heading")}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {t("Delivery.paragraph")}
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                component={Link}
                to="/about"
                sx={{
                  bgcolor: "primary.main",
                  color: "black",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  "&:hover": {
                    bgcolor: "primary.main",
                    boxShadow: "0 0 20px rgba(59, 193, 168, 0.4)",
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                {t("buttons.about")}
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="/works"
                sx={{
                  borderColor: "rgba(59, 193, 168, 0.5)",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  "&:hover": {
                    borderColor: "#3BC1A8",
                    bgcolor: "rgba(59, 193, 168, 0.05)",
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                {t("buttons.work")}
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Right Content - NORMAL SIZE Rubik Cube */}
        <Grid size={{xs:12, md:7}}>
          <RubikCube faceImages={rubikFaces} />
        </Grid>

        {/* Bottom Film Reel Animation - WITH LEFT/RIGHT CLICK NAVIGATION */}
        <Grid size={{xs:12}}>
          <Box
            sx={{
              mt: 8,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FilmReelAnimation 
              images={filmReelImages} 
              speed={4} // seconds per image
              autoPlay={true}
            />
          </Box>
        </Grid>

      </Grid>
     <ContactFloatingIcon 
              whatsappNumber="+92 348-6805638"  // Aap ka WhatsApp number
              linkedinProfile="https://www.linkedin.com/company/primestack-sol/posts/?feedView=all"  // Aap ka LinkedIn profile
              emailAddress="contact@primestacksol.com"  // Aap ka email
              phoneNumber="+92 348-6805638"  // Aap ka phone number
              themeColor="#3BC1A8"  // Aap ki website ka theme color
              position="bottom-right"  // Icon ki position
              showEmail={true}  // Email option show karein ya nahi
              showPhone={true}  // Phone option show karein ya nahi
            />
    </Container>
  );
};

export default Delivery;