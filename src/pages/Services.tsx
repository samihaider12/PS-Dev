import React, { useState } from 'react';
import {
  Box, Grid, Typography, Paper, Container, Button, Card, CardContent,
  List, ListItem, ListItemIcon, ListItemText, IconButton, Modal, useTheme
} from '@mui/material';
import ContactFloatingIcon from "../components/ContactFloatingIcon";
import ServiceSection2 from './Services2';

// New Icons for the updated services
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SearchIcon from '@mui/icons-material/Search';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LayersIcon from '@mui/icons-material/Layers';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MemoryIcon from '@mui/icons-material/Memory';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

// Existing icons (only those actually used)
import EditNoteIcon from '@mui/icons-material/EditNote';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShopIcon from '@mui/icons-material/Storefront';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from "react-i18next";

// Assets
import firstBrowser1 from '../assets/firstBrowser.png';
import firstBrowser2 from '../assets/firstBrowser2.png';
import firstMobial1 from '../assets/firstMobial1.png';
import firstMobial2 from '../assets/firstMobial2.png';
import { Link } from 'react-router-dom';

// Updated services list with your requirements
const services = [
  // AWS & Cloud Services
  { id: "aws", title: "AWS Services", icon: <CloudIcon sx={{ fontSize: 40 }} /> },
  { id: "web", title: "Web Development", icon: <LanguageIcon sx={{ fontSize: 40 }} /> },
  { id: "ai", title: "AI Development", icon: <PsychologyIcon sx={{ fontSize: 40 }} /> },
  { id: "seo", title: "SEO Optimization", icon: <SearchIcon sx={{ fontSize: 40 }} /> },
  { id: "wordpress", title: "WordPress", icon: <WebAssetIcon sx={{ fontSize: 40 }} /> },
  { id: "cloud", title: "Cloud Solutions", icon: <StorageIcon sx={{ fontSize: 40 }} /> },
  { id: "flutter", title: "Flutter Apps", icon: <PhoneAndroidIcon sx={{ fontSize: 40 }} /> },
  { id: "nextjs", title: "Next.js", icon: <LayersIcon sx={{ fontSize: 40 }} /> },
  { id: "docker", title: "Docker", icon: <LocalShippingIcon sx={{ fontSize: 40 }} /> },
  { id: "devops", title: "DevOps", icon: <DeveloperBoardIcon sx={{ fontSize: 40 }} /> },
  { id: "api", title: "API Development", icon: <TerminalIcon sx={{ fontSize: 40 }} /> },
  { id: "machinelearning", title: "Machine Learning", icon: <MemoryIcon sx={{ fontSize: 40 }} /> },
  
  { id: "eCommerce", title: "eCommerce", icon: <ShoppingCartIcon sx={{ fontSize: 40 }} /> },
  { id: "redesign", title: "Website Redesign", icon: <EditNoteIcon sx={{ fontSize: 40 }} /> },
  { id: "motion", title: "Motion Design", icon: <BoltIcon sx={{ fontSize: 40 }} /> },
  { id: "optimization", title: "Performance", icon: <RocketLaunchIcon sx={{ fontSize: 40 }} /> },
];

const platforms = [
  { name: "AWS", icon: <CloudIcon /> },
  { name: "Next.js", icon: <LayersIcon /> },
  { name: "React", icon: <CodeIcon /> },
  { name: "Flutter", icon: <PhoneAndroidIcon /> },
  { name: "Docker", icon: <LocalShippingIcon /> },
  { name: "AI / ML", icon: <MemoryIcon /> },
  { name: "WordPress", icon: <WebAssetIcon /> },
  { name: "Shopify", icon: <ShopIcon /> },
];

const ServiceSection: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme(); // Accessing your custom theme
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleOpen = (service: any) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Dynamic Modal Style based on Theme
  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '92%', sm: 480 },
    bgcolor: theme.palette.background.default,
    border: `1px solid ${theme.palette.primary.main}44`, // Adding transparency
    borderRadius: '28px',
    boxShadow: `0 0 60px ${theme.palette.primary.main}22`,
    p: 4,
    outline: 'none',
  };

  return (
    <Box sx={{ bgcolor: 'background.default', py: 5, color: 'text.primary', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* Main Heading */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="h2" sx={{ fontWeight: theme.typography.h1.fontWeight, fontSize: { xs: '40px', md: '64px' }, mb: 2 }}>
            Our <Box component="span" sx={{ color: 'primary.main' }}>Services</Box>
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: '2px' }} />
        </Box>

        {/* SERVICES GRID */}
        <Grid container spacing={2} sx={{ mb: 15 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 3 }} key={index}>
              <Paper
                onClick={() => handleOpen(service)}
                sx={{
                  height: 180, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(59, 193, 168, 0.1)',
                  borderRadius: '20px',
                  color: 'text.secondary',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer', p: 2,
                  '&:hover': {
                    bgcolor: 'rgba(59, 193, 168, 0.08)',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    transform: 'translateY(-10px)',
                    boxShadow: `0 15px 35px ${theme.palette.primary.main}22`,
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 800, textAlign: 'center', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: 1.2 }}>
                  {service.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Grid */}
        <Grid container spacing={4} sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{
              p: { xs: 4, md: 6 }, height: '100%', borderRadius: '32px',
              border: `1px solid ${theme.palette.primary.main}33`,
              position: 'relative', overflow: 'hidden',
              background: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1464802686167-b939a67e0b24?auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                {t("servicesSid.head1")} <br />
                <Box component="span" sx={{ color: 'primary.main' }}>{t("servicesSid.head2")}</Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
                {t("servicesSid.para")}
              </Typography>
              <Button
               component={Link}
              to="/works"
                variant="contained"
                color="primary"
                sx={{ px: 5, py: 1.5, borderRadius: '12px' }}
              >
                {t("buttons.work")}
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', height: '100%',
              border: `1px solid ${theme.palette.primary.main}22`, borderRadius: '32px', overflow: 'hidden',
              bgcolor: 'background.paper',
            }}>
              {platforms.map((plat, i) => (
                <Box key={i} sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '0.5px solid rgba(59, 193, 168, 0.05)', p: 4, transition: '0.3s',
                  '&:hover': { bgcolor: 'rgba(59, 193, 168, 0.05)', transform: 'scale(1.05)' }
                }}>
                  <Box sx={{ textAlign: 'center', color: 'primary.main' }}>
                    {plat.icon}
                    <Typography variant="caption" display="block" sx={{ mt: 1.5, color: 'text.primary', fontWeight: 700 }}>{plat.name}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Ticker Section */}
      <Box sx={{ borderY: `1px solid ${theme.palette.primary.main}22`, py: 4, bgcolor: '#050505', mb: 10 }}>
        <Box sx={{
          display: 'flex',
          animation: 'scroll 40s linear infinite',
          '@keyframes scroll': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } }
        }}>
          {[1, 2].map((loop) => (
            <Box key={loop} sx={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {[
                "AWS Cloud Solutions", "AI & Machine Learning", "Web Development", 
                "Next.js Applications", "Flutter Mobile Apps", "Docker & DevOps",
                "SEO Optimization", "WordPress Development"
              ].map((text, i) => (
                <Typography key={i} sx={{ mx: 6, color: 'primary.main', fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: 3 }}>
                  • {text}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Browser & Mobile Showcase */}
      <Container maxWidth="lg">
        <Typography sx={{ fontSize: { xs: 36, md: 56 }, color: 'text.primary', mb: 8, fontWeight: 900, textAlign: 'center' }}>
          {t("servicesSid.mHead3")}
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{
              bgcolor: 'background.paper', minHeight: '520px', borderRadius: '32px',
              border: `1px solid ${theme.palette.primary.main}22`, position: 'relative', overflow: 'hidden',
              transition: '0.4s', '&:hover': { borderColor: 'primary.main' }
            }}>
              <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>{t("servicesSid.head4")}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{t("servicesSid.paraH4")}</Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2, px: 4, position: 'absolute', bottom: 0, width: '100%' }}>
                <Box component="img" src={firstBrowser1} sx={{ width: '50%', borderRadius: '16px 16px 0 0', filter: `drop-shadow(0 -10px 20px ${theme.palette.primary.main}22)` }} />
                <Box component="img" src={firstBrowser2} sx={{ width: '50%', borderRadius: '16px 16px 0 0', filter: `drop-shadow(0 -10px 20px ${theme.palette.primary.main}22)` }} />
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{
              bgcolor: 'background.paper', minHeight: '520px', borderRadius: '32px',
              border: `1px solid ${theme.palette.primary.main}22`, position: 'relative', overflow: 'hidden',
              transition: '0.4s', '&:hover': { borderColor: 'primary.main' }
            }}>
              <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>{t("servicesSid.head5")}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{t("servicesSid.paraH5")}</Typography>
              </CardContent>
              <Box sx={{ position: 'relative', height: '275px', mt: 'auto' }}>
                <Box component="img" src={firstMobial1} sx={{ width: '170px', position: 'absolute', bottom: '-10px', left: '12%', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)', zIndex: 2 }} />
                <Box component="img" src={firstMobial2} sx={{ width: '170px', position: 'absolute', bottom: '-30px', right: '12%', borderRadius: '24px', border: `6px solid ${theme.palette.background.paper}`, boxShadow: '0 10px 40px rgba(0,0,0,0.6)', zIndex: 1 }} />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Modal Section */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Box sx={modalStyle}>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 16, top: 16, color: 'primary.main' }}><CloseIcon /></IconButton>
          {selectedService && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ color: 'primary.main' }}>{selectedService.icon}</Box>
                <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 900 }}>{selectedService.title}</Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
                {t(`servicespop.details.${selectedService.id}.mainDesc`, 
                  `Complete ${selectedService.title} solutions tailored to your business needs.`)}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 800, mb: 2, textTransform: 'uppercase' }}>Key Features</Typography>
              <List sx={{ p: 0 }}>
                {(() => {
                  const features = t(`servicespop.details.${selectedService.id}.features`, { returnObjects: true });
                  // Check if features is an array
                  if (Array.isArray(features) && features.length > 0) {
                    return features.map((feature, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 35 }}><CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 22 }} /></ListItemIcon>
                        <ListItemText primary={feature} primaryTypographyProps={{ sx: { color: 'text.primary', fontSize: '0.95rem' } }} />
                      </ListItem>
                    ));
                  } else {
                    // Default features if translation not found
                    return (
                      <>
                        <ListItem sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 35 }}><CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 22 }} /></ListItemIcon>
                          <ListItemText primary="Customized solutions for your business" primaryTypographyProps={{ sx: { color: 'text.primary', fontSize: '0.95rem' } }} />
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 35 }}><CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 22 }} /></ListItemIcon>
                          <ListItemText primary="Professional implementation and support" primaryTypographyProps={{ sx: { color: 'text.primary', fontSize: '0.95rem' } }} />
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 35 }}><CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 22 }} /></ListItemIcon>
                          <ListItemText primary="Scalable and maintainable architecture" primaryTypographyProps={{ sx: { color: 'text.primary', fontSize: '0.95rem' } }} />
                        </ListItem>
                      </>
                    );
                  }
                })()}
              </List>
            </>
          )}
        </Box>
      </Modal>

      <ServiceSection2 />
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

export default ServiceSection;