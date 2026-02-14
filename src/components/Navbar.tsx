import { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, Container, 
  IconButton, Drawer, List, ListItem, ListItemText, ListItemButton 
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from "react-i18next";

const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'About Us', path: '/about' },
  { label: 'Works', path: '/works' },
  { label: 'Services', path: '/services' },
  { label: 'Templates', path: '/templates' }
];

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation(); // Active page highlight karne ke liye
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'background.default', height: '100%' }}>
      {/* Mobile Logo */}
      <Typography 
        variant="h6" 
        sx={{ 
          
          fontWeight: 'bold', 
          color: 'primary.main',
          letterSpacing: 1 
        }}
      >
        PRIMESTACKSOL
      </Typography>
      
      <List sx={{ mt: 4 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path} 
              onClick={handleDrawerToggle} 
              sx={{ 
                textAlign: 'center',
                borderRadius: '8px',
                
                bgcolor: location.pathname === item.path ? 'rgba(38, 198, 218, 0.1)' : 'transparent',
                color: location.pathname === item.path ? 'primary.main' : 'text.primary'
              }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Button 
        component={Link} 
        to="/connect" 
        variant="contained" 
        fullWidth 
        sx={{ mt: 4, borderRadius: '50px', py: 0.5 }}
      >
        {t("connect.label") || "Let's Connect"}
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: 'rgba(10, 10, 10, 0.8)', // Deep Charcoal background
          boxShadow: 'none', 
          backdropFilter: 'blur(15px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between',  }}>
            
            {/* Logo Section */}
            <Box 
              component={Link} 
              to="/home" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none', 
                gap: 1.5 
              }}
            >
              {/* Logo Box (Optional: Replace with your actual logo <img>) */}
              <Box 
                sx={{ 
                  width: 32, 
                  height: 32, 
                  bgcolor: 'primary.main', 
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'black'
                }}
              >
                P
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 500, 
                  color: 'white', 
                  letterSpacing: -0.5,
                  fontSize: '20px'
                }}
              >
                PrimeStack<Box component="span" sx={{ color: 'primary.main' }}>Sol</Box>
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button 
                  key={item.label}
                  component={Link} 
                  to={item.path}
                  sx={{ 
                    px: 2,
                    color: location.pathname === item.path ? 'primary.main' : 'text.secondary', 
                    fontWeight: 500,
                    fontSize: '15px',
                    textTransform: 'none',
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' } 
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Desktop Connect Button */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                component={Link} 
                to="/connect"
                variant="contained" 
                sx={{ 
                  borderRadius: '50px', 
                  // px: 3,
                  fontWeight: 400,
                  boxShadow: '0 4px 14px 0 rgba(38, 198, 218, 0.39)', // Teal Glow
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(38, 198, 218, 0.5)',
                  }
                }}
              >
                {t("connect.label") || "Let's Connect"}
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacing for Fixed Navbar */}
      <Toolbar sx={{ mb: 2 }} />

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280, 
            bgcolor: 'background.default',
            backgroundImage: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;