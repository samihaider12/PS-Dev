import {
  Container,
  Box,
  Card,
  Grid,
  CardMedia,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import ContactFloatingIcon from "../components/ContactFloatingIcon";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { projects } from "../data/projectsData";
import { Link } from 'react-router-dom';

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <Container sx={{ py: 10 }}>
      
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8, py: 5 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            color: '#3BC1A8', // Theme Teal
            fontWeight: 800, 
            display: 'inline-block',
            textShadow: '0 0 30px rgba(59, 193, 168, 0.2)' 
          }}
        >
          {t("Work.mainlabel")}
        </Typography>
      </Box>

      <Stack spacing={10}>
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 6,
              bgcolor: "#0a0a0a",
              border: "1px solid rgba(59, 193, 168, 0.2)",
              overflow: "hidden",
              position: 'relative',
              // Smoke shadow effect
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), inset 0 0 40px rgba(59, 193, 168, 0.05)',
              transition: 'all 0.5s ease',
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={project.image}
                sx={{
                  width: "100%",
                  height: { xs: 300, md: 550 },
                  objectFit: "cover",
                  bgcolor: "#0f0f0f",
                  transition: 'transform 0.8s ease',
                  transform: hovered === index ? 'scale(1.05)' : 'scale(1)',
                }}
              />

              {/* Hover Overlay with Theme Button */}
              {hovered === index && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(59, 193, 168, 0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: 'blur(4px)',
                    transition: '0.3s'
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#3BC1A8',
                      color: '#000',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      '&:hover': { bgcolor: '#2da892' }
                    }}
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project
                  </Button>
                </Box>
              )}
            </Box>
          </Card>
        ))}
      </Stack>

      {/* Footer Call-to-Action */}
      <Grid container alignItems="center" marginTop={20} spacing={4}>
        <Grid  size={{xs:12 ,md:9 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "36px", md: "60px" },
              lineHeight: 1.1,
              color: 'white',
              letterSpacing: -1
            }}
          >
            {t("Work.head1")} <br />
            <Box component="span" sx={{ color: '#3BC1A8' }}>{t("Work.head2")}</Box>
          </Typography>
        </Grid>

        <Grid   size={{xs:12 ,md:3 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="flex-end">
            <Button
              variant="contained"
              component={Link}
              to="/about"
              sx={{
                bgcolor: 'white',
                color: 'black',
                fontWeight: 'bold',
                height: "45px",
              
                borderRadius: '8px',
                '&:hover': { bgcolor: '#f0f0f0' },
              }}
            >
              {t("buttons.about")}
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/connectSection"
              sx={{
                borderColor: '#3BC1A8',
                color: '#3BC1A8',
                fontWeight: 'bold',
                height: "45px",
               
                borderRadius: '8px',
                '&:hover': { 
                  borderColor: '#3BC1A8', 
                  bgcolor: 'rgba(59, 193, 168, 0.1)' 
                },
              }}
            >
              {t("connect.label")}
            </Button>
          </Stack>
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

export default Projects;