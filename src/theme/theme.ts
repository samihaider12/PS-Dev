import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // Modern Electric Blue (Zyada professional aur tech-oriented)
      main: '#17D4AA', 
      light: '#33DBFF',
      dark: '#0093B2',
      contrastText: '#0B1120',
    },
    secondary: {
      // Sleek Purple for gradients and highlights
      main: '#9D50BB', 
    },
    background: {
      // Deep Space Navy (Professional standard for tech)
      default: '#0B1120', 
      paper: '#111827', 
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8', // Muted slate for descriptions
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif', // Modern tech font
    h1: { fontSize: '3.5rem', fontWeight: 500, letterSpacing: '-0.02em' },
    h2: { fontSize: '2.5rem', fontWeight: 500, letterSpacing: '-0.01em' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 12, // Modern soft corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '12px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)', // Subtle lift effect
            boxShadow: '0 4px 20px 0 rgba(0, 210, 255, 0.3)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #00D2FF 30%, #17D4AA 90%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#111827',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          '&:hover': {
            borderColor: 'rgba(0, 210, 255, 0.4)', // Tech glow on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(11, 17, 32, 0.8)',
          backdropFilter: 'blur(20px)', // Crystal clear glassmorphism
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },
  },
});
 