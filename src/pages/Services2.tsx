import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Container, Card, CardContent, useTheme } from '@mui/material';
import '../assets/public/ClockStyle.css'; 
import FAQSection from './FAQ';

const DynamicClock = () => {
  const theme = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const s = time.getSeconds();
  const m = time.getMinutes();
  const h = time.getHours();

  const secDeg = (s / 60) * 360;
  const minDeg = (m / 60) * 360 + (s / 60) * 6;
  const hourDeg = ((h % 12) / 12) * 360 + (m / 60) * 30;

  const dialLabels = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

  return (
    <Box className="clock-wrapper" sx={{ 
      borderColor: `${theme.palette.primary.main}44 !important`, 
      boxShadow: `0 0 40px ${theme.palette.primary.main}11`
    }}>
      <Box className="center-pivot" sx={{ bgcolor: 'primary.main' }} />
      
      {dialLabels.map((num, i) => (
        <Box key={i} className="dial-marker" sx={{ transform: `rotate(${i * 30}deg)` }}>
          <span style={{ 
            transform: `rotate(-${i * 30}deg)`, 
            color: theme.palette.text.secondary 
          }}>{num}</span>
        </Box>
      ))}

      {/* Only Clock Hands - No Digital Display */}
      <Box className="clock-hand hour-h" sx={{ 
        transform: `translateX(-50%) rotate(${hourDeg}deg)`, 
        bgcolor: 'text.primary' 
      }} />
      
      <Box className="clock-hand min-h" sx={{ 
        transform: `translateX(-50%) rotate(${minDeg}deg)`, 
        bgcolor: 'primary.main' 
      }} />
      
      <Box className="clock-hand sec-h" sx={{ 
        transform: `translateX(-50%) rotate(${secDeg}deg)`, 
        bgcolor: '#ff4444', 
        opacity: 0.8 
      }} />
    </Box>
  );
};

const CMSTable = () => {
  const theme = useTheme();
  const cmsData = [
    { title: "Mastering motion in web design", date: "5 August 2025" },
    { title: "Building a strong brand identity", date: "14 July 2025" },
    { title: "Designing responsive websites", date: "28 June 2025" },
  ];

  return (
    <Box sx={{ 
      bgcolor: `${theme.palette.primary.main}05`, 
      borderRadius: '20px', 
      border: `1px solid ${theme.palette.primary.main}22`, 
      overflow: 'hidden' 
    }}>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: '2fr 1fr', 
        p: 2, 
        borderBottom: `1px solid ${theme.palette.primary.main}11`, 
        opacity: 0.8 
      }}>
        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Title</Typography>
        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Date</Typography>
      </Box>
      {cmsData.map((item, i) => (
        <Box key={i} sx={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr', 
          p: 2.5, 
          borderBottom: i !== cmsData.length - 1 ? `1px solid ${theme.palette.primary.main}08` : 'none',
          '&:hover': { bgcolor: `${theme.palette.primary.main}11` },
          transition: '0.3s'
        }}>
          <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>{item.title}</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', alignSelf: 'center' }}>{item.date}</Typography>
        </Box>
      ))}
    </Box>
  );
};

const ServiceSection2 = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default', pb: 15, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* CMS Card */}
          <Grid size={{xs:12 ,md:7}}>
            <Card sx={{ 
              bgcolor: 'background.paper', 
              color: 'text.primary', 
              minHeight: '480px', 
              borderRadius: '32px', 
              border: `1px solid ${theme.palette.primary.main}22`, 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: `inset 0 0 40px ${theme.palette.primary.main}05`,
              transition: '0.4s',
              '&:hover': { borderColor: 'primary.main', boxShadow: `0 10px 40px ${theme.palette.primary.main}11` }
            }}>
              <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  Seamless <Box component="span" sx={{ color: 'primary.main' }}>CMS</Box> Launch
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
                  Launched seamlessly with a powerful CMS, allowing you to update your content effortlessly without touching a single line of code.
                </Typography>
                <CMSTable />
              </CardContent>
            </Card>
          </Grid>

          {/* Clock/Future Ready Card */}
          <Grid size={{xs:12 ,md:5}}>
            <Card sx={{ 
              bgcolor: 'background.paper', 
              color: 'text.primary', 
              minHeight: '480px', 
              borderRadius: '32px', 
              border: `1px solid ${theme.palette.primary.main}22`, 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: `inset 0 0 40px ${theme.palette.primary.main}05`,
              transition: '0.4s',
              '&:hover': { borderColor: 'primary.main', boxShadow: `0 10px 40px ${theme.palette.primary.main}11` }
            }}>
              <CardContent sx={{ p: { xs: 4, md: 6 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  Future-<Box component="span" sx={{ color: 'primary.main' }}>Ready</Box>
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
                  Websites designed to be scalable, high-performing, and adapt as your business grows.
                </Typography>
                
                {/* Clock Container */}
                <Box sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  height:"215px",
                }}>
                  <DynamicClock />
                </Box>
                
                {/* Simple Timezone Note */}
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    color: theme.palette.primary.main,
                    fontSize: '15px',
                    fontWeight: 500
                  }}>
                    Always on Time
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      {/* FAQ Section */}
      <Box sx={{ mt: 10 }}>
        <FAQSection />
      </Box>
    </Box>
  );
};

export default ServiceSection2;