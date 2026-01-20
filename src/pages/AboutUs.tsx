import { Container, Box, Grid, Typography, useTheme } from '@mui/material';
import aboutPic from '../assets/about.png';
import ContactFloatingIcon from "../components/ContactFloatingIcon";
// i18n
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const values = [
    { key: "clarity", side: "left" },
    { key: "precision", side: "right" },
    { key: "purpose", side: "left" }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 800,
              display: 'inline-block',
              fontSize: { xs: '2.5rem', md: '4rem' },
              mr: 2
            }}
          >
            {t("about.mHead1")}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: 'primary.main',
              fontStyle: 'italic',
              fontWeight: 300,
              fontFamily: 'serif',
              fontSize: { xs: '2.5rem', md: '4rem' },
              display: 'inline-block'
            }}
          >
            {t("about.mHead2")}
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mt: 2, borderRadius: 2 }} />
        </Box>

        <Grid container justifyContent="center">
          <Grid size={{xs:12 ,md:9}} sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: 18, md: 20 }, mb: 4 }}>
              {t("about.para1")}
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: 18, md: 20 }, mb: 8 }}>
              {t("about.para2")}
            </Typography>

            {/* Image with Theme Glow */}
            <Box sx={{ position: 'relative', mb: 8 }}>
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                bgcolor: 'primary.main',
                filter: 'blur(100px)',
                opacity: 0.15,
                zIndex: 0
              }} />
              <Box
                component="img"
                src={aboutPic}
                sx={{
                  width: '100%',
                  maxWidth: '800px',
                  borderRadius: '24px',
                  boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 20px ${theme.palette.primary.main}22`,
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </Box>

            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: 18, md: 20 }, mb: 4 }}>
              {t("about.para3")}
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: 18, md: 20 } }}>
              {t("about.para4")}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ py: 15, position: 'relative', mt: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 12, fontWeight: 900, color: 'text.primary' }}>
            {t("values.mainTitle")}
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Vertical Center Line (Theme Primary) */}
            <Box sx={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: '1px', 
              background: `linear-gradient(to bottom, transparent, ${theme.palette.primary.main}44, transparent)`,
              transform: 'translateX(-50%)', 
              display: { xs: 'none', md: 'block' }
            }} />

            {values.map((val, index) => (
              <Grid container key={index} sx={{ mb: 10, alignItems: 'center' }}>
                {/* Side Content Logic */}
                <Grid size={{xs:12 ,md:6}} sx={{ 
                  textAlign: { xs: 'center', md: val.side === 'left' ? 'right' : 'left' }, 
                  px: { md: 6 },
                  order: { xs: 2, md: val.side === 'left' ? 1 : 2 } 
                }}>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 800, 
                    mb: 2, 
                    color: val.side === 'left' || val.side === 'right' ? 'text.primary' : 'text.primary' 
                  }}>
                    {t(`values.${val.key}.title`)}
                  </Typography>
                  <Typography sx={{ 
                    color: 'text.secondary', 
                    maxWidth: { md: '400px' }, 
                    ml: val.side === 'left' ? 'auto' : '0',
                    mr: val.side === 'right' ? 'auto' : '0' 
                  }}>
                    {t(`values.${val.key}.desc`)}
                  </Typography>
                </Grid>

                {/* Empty Grid for Spacing on Desktop */}
                <Grid size={{xs:12 ,md:6}} sx={{ order: { xs: 1, md: val.side === 'left' ? 2 : 1 } }}>
                   {/* This creates the staggered look */}
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>

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
    </Box>
  );
};

export default AboutUs;