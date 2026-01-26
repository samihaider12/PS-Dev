import { Box, Typography, Grid } from '@mui/material';
// Icons import
import WebIcon from '@mui/icons-material/Language';
import PixIcon from '@mui/icons-material/Pix';
import InterestsIcon from '@mui/icons-material/Interests';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';

const brands = [
  { name: 'WIX STUDIO', icon: <WebIcon sx={{ fontSize: 32 }} /> },
  { name: 'STRIPE', icon: <PixIcon sx={{ fontSize: 32 }} /> },
  { name: 'FIGMA', icon: <ArchitectureIcon sx={{ fontSize: 32 }} /> },
  { name: 'BLENDER', icon: <InterestsIcon sx={{ fontSize: 32 }} /> },
  { name: 'UNICORN', icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} /> },
  { name: 'NOTION', icon: <LayersIcon sx={{ fontSize: 32 }} /> },
];

const LogoSection = () => {
  return (
    <Box
      sx={{
        py: 10,
        borderTop: '1px solid rgba(38, 198, 218, 0.1)',
        background: 'linear-gradient(180deg, rgba(38, 198, 218, 0.02) 0%, transparent 100%)'
      }}
    >
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: 'primary.main', // Static Teal
          mb: 8,
          letterSpacing: 4,
          fontSize: '0.75rem',
          fontWeight: 800,
          textTransform: 'uppercase'
        }}
      >
        TRUSTED BY INDUSTRY LEADERS
      </Typography>

      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {brands.map((brand) => (
          <Grid key={brand.name} size={{ xs: 6, sm: 4, md: 3 }}>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                textAlign: 'center',
                opacity: 0.9,
                border: "1px solid #3BC1A8",
                borderRadius: "12px",
                py: "20px",
                px: "15px",
                boxShadow: `
                      inset 0px -12px 25px rgba(59, 193, 168, 0.35),
                      inset 0px 0px 12px rgba(59, 193, 168, 0.2)
                      `,

                transition: 'all 0.35s ease',
                cursor: 'pointer',

                '&:hover': {
                  filter: 'grayscale(0%)',
                  opacity: 1,
                  transform: 'translateY(-7px)', 
                  color: 'primary.main',
                  boxShadow: `
                      0px 20px 40px rgba(59, 193, 168, 0.25), 
                      inset 0px 0px 30px rgba(59, 193, 168, 0.2)
                      `,
                }

              }}
            >
               
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0px 0px 8px rgba(38, 198, 218, 0.4))'
                }}
              >
                {brand.icon}
              </Box>

              {/* Brand Name */}
              <Typography
                variant="button"
                sx={{
                  fontSize: { xs: '0.65rem', md: '0.8rem' },
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  whiteSpace: 'nowrap',
                  borderBottom: '1px solid rgba(38, 198, 218, 0.2)',  
                  pb: 0.5
                }}
              >
                {brand.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LogoSection;