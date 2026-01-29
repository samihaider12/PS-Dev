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
import img7 from "../assets/food.png";
import img8 from "../assets/firstBrowser.png";
import img9 from "../assets/firstBrowser2.png";
import img10 from "../assets/pic5.png";
import img11 from "../assets/tab.png";

// TYPES AND INTERFACES
interface RubikCubeProps {
  faceImages: string[]; 
}

interface FilmReelProps {
  images: string[]; 
  speed?: number;  
  autoPlay?: boolean;  
}

// VERTICAL FILM REEL COMPONENT (WITH LEFT/RIGHT CLICK NAVIGATION)
const FilmReelAnimation: React.FC<FilmReelProps> = ({ 
  images, 
  speed = 4, // seconds per image
  autoPlay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 900, height: 600 });

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

  // Resize handler for container
  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const width = Math.min(containerRef.current.offsetWidth, 900);
        const height = width * 0.7; // Maintain aspect ratio
        setContainerSize({ width, height });
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    
    return () => {
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);

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

  // Responsive sizes based on container width
  const isSmallScreen = containerSize.width < 600;
  const isMediumScreen = containerSize.width >= 600 && containerSize.width < 900;

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
        ref={containerRef}
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
          p: { xs: 2, sm: 3 },
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h4"
          sx={{
            color: "#3BC1A8",
            textAlign: "center",
            mb: { xs: 2, md: 3 },
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: "bold",
            textShadow: "0 0 20px rgba(59, 193, 168, 0.9)",
            letterSpacing: "2px",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
            px: { xs: 1, sm: 2 },
          }}
        >
          Dynamic, Distinct and Driven
        </Typography> 

        {/* Main Image Display Area */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: isSmallScreen ? '200px' : isMediumScreen ? '300px' : '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 2, md: 4 },
          }}
        >
          {/* Left side image (previous) - CLICK FOR PREVIOUS */}
          {!isSmallScreen && (
            <Box
              sx={{
                position: 'absolute',
                left: isMediumScreen ? '2%' : '5%',
                width: isMediumScreen ? '28%' : '25%',
                height: isMediumScreen ? '80%' : '70%',
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
                  left: isMediumScreen ? '-15px' : '-25px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(59, 193, 168, 0.3)',
                  color: 'white',
                  width: isMediumScreen ? '25px' : '30px',
                  height: isMediumScreen ? '25px' : '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMediumScreen ? '1rem' : '1.2rem',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.5)',
                }}
              >
                ←
              </Box>
            </Box>
          )}

          {/* Center Main Image */}
          <Box
            sx={{
              position: 'relative',
              width: isSmallScreen ? '90%' : isMediumScreen ? '60%' : '50%',
              height: isSmallScreen ? '90%' : isMediumScreen ? '90%' : '85%',
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
            
            {/* Image number indicator - hidden on small screens */}
            {!isSmallScreen && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  backgroundColor: '#3BC1A8',
                  color: 'black',
                  width: { xs: '35px', md: '40px' },
                  height: { xs: '35px', md: '40px' },
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  boxShadow: '0 5px 15px rgba(0,0,0,0.7)',
                  zIndex: 4,
                }}
              >
                {currentIndex + 1}
              </Box>
            )}

            {/* Play/Pause Indicator */}
            <Box
              sx={{
                position: 'absolute',
                bottom: isSmallScreen ? '-10px' : '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: isPlaying ? '#3BC1A8' : '#ff4444',
                color: 'white',
                padding: isSmallScreen ? '4px 12px' : '6px 16px',
                borderRadius: '20px',
                fontSize: isSmallScreen ? '0.7rem' : '0.85rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              {isPlaying ? '▶ Playing' : '⏸ Paused'}
              <Box
                sx={{
                  width: '6px',
                  height: '6px',
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
          {!isSmallScreen && (
            <Box
              sx={{
                position: 'absolute',
                right: isMediumScreen ? '2%' : '5%',
                width: isMediumScreen ? '28%' : '25%',
                height: isMediumScreen ? '80%' : '70%',
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
                  right: isMediumScreen ? '-15px' : '-25px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(59, 193, 168, 0.3)',
                  color: 'white',
                  width: isMediumScreen ? '25px' : '30px',
                  height: isMediumScreen ? '25px' : '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMediumScreen ? '1rem' : '1.2rem',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.5)',
                }}
              >
                →
              </Box>
            </Box>
          )}
        </Box>

        {/* Navigation Buttons for Small Screens */}
        {isSmallScreen && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              mb: 3,
            }}
          >
            <Button
              variant="contained"
              onClick={handlePrev}
              sx={{
                backgroundColor: 'rgba(59, 193, 168, 0.3)',
                color: 'white',
                minWidth: '40px',
                height: '40px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: 'rgba(59, 193, 168, 0.5)',
                }
              }}
            >
              ←
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                backgroundColor: 'rgba(59, 193, 168, 0.3)',
                color: 'white',
                minWidth: '40px',
                height: '40px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: 'rgba(59, 193, 168, 0.5)',
                }
              }}
            >
              →
            </Button>
          </Box>
        )}

        {/* Progress Indicator */}
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: { xs: '0.7rem', sm: '0.85rem' },
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: { xs: '4px 10px', sm: '6px 15px' },
              borderRadius: '15px',
              border: '1px solid rgba(59, 193, 168, 0.3)',
              display: 'inline-block',
            }}
          >
            Image {currentIndex + 1} of {images.length} • {speed}s per image
          </Typography>
        </Box>
      </Box>
    </>
  );
};

// RESPONSIVE RUBIK'S CUBE COMPONENT  
const RubikCube: React.FC<RubikCubeProps> = ({ faceImages }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [cubeSize, setCubeSize] = useState({ width: 0, height: 0 });

  // Update cube size based on container
  useEffect(() => {
    const updateCubeSize = () => {
      if (mountRef.current) {
        const containerWidth = mountRef.current.clientWidth;
        const isMobile = window.innerWidth < 600;
        const isTablet = window.innerWidth >= 600 && window.innerWidth < 960;
        
        const width = containerWidth;
        const height = isMobile ? 350 : isTablet ? 400 : 520;
        
        setCubeSize({ width, height });
      }
    };

    updateCubeSize();
    window.addEventListener('resize', updateCubeSize);
    
    return () => {
      window.removeEventListener('resize', updateCubeSize);
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current || cubeSize.width === 0 || cubeSize.height === 0) return;
    
    if (faceImages.length !== 6) {
      console.error("RubikCube: Provide exactly 6 images for 6 faces");
      return;
    }

    const width = cubeSize.width;
    const height = cubeSize.height;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    // Responsive camera position
    const isMobile = width < 600;
    const isTablet = width >= 600 && width < 900;
    
    if (isMobile) {
      camera.position.set(4, 3, 5);
    } else if (isTablet) {
      camera.position.set(4.5, 3.5, 5.5);
    } else {
      camera.position.set(5, 4, 6);
    }
    
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

    // Responsive cube size
    const cubeSizeValue = isMobile ? 2.5 : isTablet ? 3 : 3.5;
    const cubeGeometry = new THREE.BoxGeometry(cubeSizeValue, cubeSizeValue, cubeSizeValue);
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
      if (!mountRef.current || cubeSize.width === 0) return;
      
      const newWidth = mountRef.current.clientWidth;
      const newHeight = cubeSize.height; // Maintain aspect ratio
      
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
  }, [faceImages, cubeSize]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: "100%", 
        height: `${cubeSize.height || 520}px`,
        borderRadius: "20px",
        overflow: "hidden",
        background: "transparent",
        minHeight: "350px",
      }} 
    />
  );
};

const Delivery: React.FC = () => {
  const { t } = useTranslation();

  const rubikFaces: string[] = [img1, img2, img3, img4, img5, img6];
  const filmReelImages: string[] = [
    img7,
    img8,  
    img9,  
    img10, 
    img11,  
    img1,  
    img2,  
    img3,  
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 12 } }}>
      <Grid container alignItems="center" spacing={{ xs: 4, sm: 6, md: 10 }}>
        
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
                display: { xs: 'none', sm: 'block' },
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "28px", sm: "32px", md: "42px" },
                lineHeight: 1.2,
                color: "white",
                mb: 3,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {t("Delivery.heading")}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {t("Delivery.paragraph")}
            </Typography>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2}
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/about"
                sx={{
                  bgcolor: "primary.main",
                  color: "black",
                  fontWeight: "bold",
                  px: { xs: 3, md: 4 },
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
                  px: { xs: 3, md: 4 },
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
        
        <Grid size={{xs:12, md:7}}>
          <RubikCube faceImages={rubikFaces} />
        </Grid>
        
        <Grid size={{xs:12}}>
          <Box
            sx={{
              mt: { xs: 4, sm: 6, md: 8 },
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
        whatsappNumber="+92 348-6805638" 
        linkedinProfile="https://www.linkedin.com/company/primestack-sol/posts/?feedView=all"   
        emailAddress="contact@primestacksol.com"  
        phoneNumber="+92 348-6805638"  
        themeColor="#3BC1A8"  
        position="bottom-right"  
        showEmail={true}   
        showPhone={true}  
      />
    </Container>
  );
};

export default Delivery;