import {
  Container,
  Box,
  Card,
  Grid,
  CardMedia,
  Button,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import ContactFloatingIcon from "../components/ContactFloatingIcon";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { projects } from "../data/projectsData";
import { Link } from 'react-router-dom'; 

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Container sx={{ py: 10 }}>

      <Box sx={{ textAlign: 'center', mb: 12 }}>
        <Typography variant="h2" sx={{ fontWeight: theme.typography.h1.fontWeight, fontSize: { xs: '40px', md: '64px' }, mb: 2 }}>
          Our <Box component="span" sx={{ color: 'primary.main' }}>Works</Box>
        </Typography>
        <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: '2px' }} />
      </Box>
      <Stack spacing={10}>
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "8px",
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
                  height: { xs: "300px", md: "500px" },
                  objectFit: "cover",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
      background: "linear-gradient(to top, rgba(0,0,0,0.95) 20%, rgba(23, 212, 170, 0.2) 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: 'blur(8px)',
      transition: 'all 0.4s ease',
      padding: 4,
      textAlign: 'center'
    }}
  >
    {/* Project Info */}
    <Typography variant="h4"  sx={{ fontWeight: 500, color: 'white', mb: 1 }}>
      {project.name}
    </Typography>
    
    <Typography variant="body1" sx={{fontWeight:400 ,color: 'white', mb: 0.5 }}>
      <strong>Client:</strong> {project.client}
    </Typography>
    
    <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
      <strong>Location:</strong> {project.location}
    </Typography>

    {/* Tools/Tech Stack */}
    <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ mb: 4 }}>
      {project.tools?.map((tool, i) => (
        <Box 
          key={i} 
          sx={{ 
            fontSize: '12px', 
            border: '1px solid #17D4AA', 
            px: 1.5, py: 0.5, 
            borderRadius: '4px',
            color: '#17D4AA'
          }}
        >
          {tool}
        </Box>
      ))}
    </Stack>

    <Button
      variant="contained"
      sx={{
        bgcolor: '#17D4AA',
        color: '#000',
        fontWeight: 500,
        px: 5,
        borderRadius: '50px',
        '&:hover': { bgcolor: '#12b591', transform: 'scale(1.05)' }
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
        <Grid size={{ xs: 12, md: 8 }}>
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

        <Grid size={{ xs: 12, md: 4 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="flex-end">
            <Button
              variant="contained"
              component={Link}
              fullWidth
              to="/about"
              sx={{
                bgcolor: 'white',
                color: 'black',
                fontWeight: 400,
                px: { xs: 3, md: 4 },
                py: 1.5,
                borderRadius: '8px',
                '&:hover': { bgcolor: '#d0cdcdff' },
              }}
            >
              {t("buttons.about")}
            </Button>
            <Button
              variant="outlined"
              component={Link}
              fullWidth
              to="/connect"
              sx={{
                borderColor: '#3BC1A8',
                color: '#3BC1A8',
                fontWeight: 400,
                px: { xs: 3, md: 4 },
                py: 1.5,
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