// ContactFloatingIcon.tsx
import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Fade, Tooltip, Typography } from "@mui/material";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

interface ContactFloatingIconProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  whatsappNumber?: string;
  linkedinProfile?: string;
  emailAddress?: string;
  phoneNumber?: string;
  showEmail?: boolean;
  showPhone?: boolean;
  themeColor?: string;
}

const ContactFloatingIcon: React.FC<ContactFloatingIconProps> = ({
  position = 'bottom-right',
  whatsappNumber = "+1234567890",
  linkedinProfile = "https://www.linkedin.com/in/yourprofile",
  emailAddress = "your.email@example.com",
  phoneNumber = "+1234567890",
  showEmail = true,
  showPhone = true,
  themeColor = "#3BC1A8"
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const open = Boolean(anchorEl);

  // Position styles based on prop
  const getPositionStyles = () => {
    switch (position) {
      case 'bottom-left':
        return { bottom: 30, left: 30 };
      case 'top-right':
        return { top: 30, right: 30 };
      case 'top-left':
        return { top: 30, left: 30 };
      default: // bottom-right
        return { bottom: 30, right: 30 };
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
    handleClose();
  };

  const handleLinkedInClick = () => {
    window.open(linkedinProfile, '_blank');
    handleClose();
  };

  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`, '_blank');
    handleClose();
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_blank');
    handleClose();
  };

  const positionStyles = getPositionStyles();
  const renderIcon = () => {
  return isMenuOpen
    ? <CloseIcon sx={{ fontSize: 28 }} />
    : <ContactMailIcon sx={{ fontSize: 28 }} />;
};
  return (
    <>
      {/* Main Floating Contact Icon */}
      <Box
        sx={{
          position: 'fixed',
          ...positionStyles,
          zIndex: 9999,
        }}
      >
        {/* Main Icon Button */}
        <Tooltip title={isMenuOpen ? "Close Menu" : "Contact Options"} arrow placement="left">
          <IconButton
            onClick={isMenuOpen ? handleClose : handleClick} // Toggle between open/close
            onMouseEnter={() => !isMenuOpen && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
              backgroundColor: themeColor,
              color: 'white',
              width: 60,
              height: 60,
              borderRadius: '50%',
              boxShadow: `0 6px 20px ${themeColor}66`,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: `${themeColor}CC`,
                transform: 'scale(1.1)',
                boxShadow: `0 8px 25px ${themeColor}99`,
              }
            }}
          >
       
        {renderIcon()}
          </IconButton>
        </Tooltip>

        {/* Popup Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              border: `1px solid ${themeColor}4D`,
              backgroundColor: 'rgba(20, 25, 35, 0.98)',
              backdropFilter: 'blur(10px)',
              minWidth: '220px',
              maxWidth: '280px',
            }
          }}
        >
          {/* WhatsApp Option */}
          <MenuItem
            onClick={handleWhatsAppClick}
            sx={{
              py: 1.5,
              px: 2,
              color: 'white',
              transition: 'all 0.3s ease',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              <Box
                sx={{
                  backgroundColor: '#25D366',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                }}
              >
                <WhatsAppIcon sx={{ color: 'white', fontSize: 22 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                  WhatsApp
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', mt: 0.2 }}>
                  Instant Chat
                </Typography>
              </Box>
            </Box>
          </MenuItem>

          {/* LinkedIn Option */}
          <MenuItem
            onClick={handleLinkedInClick}
            sx={{
              py: 1.5,
              px: 2,
              color: 'white',
              transition: 'all 0.3s ease',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(10, 102, 194, 0.15)',
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              <Box
                sx={{
                  backgroundColor: '#0A66C2',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(10, 102, 194, 0.4)',
                }}
              >
                <LinkedInIcon sx={{ color: 'white', fontSize: 22 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                  LinkedIn
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', mt: 0.2 }}>
                  Professional Network
                </Typography>
              </Box>
            </Box>
          </MenuItem>

          {/* Email Option (Optional) */}
          {showEmail && (
            <MenuItem
              onClick={handleEmailClick}
              sx={{
                py: 1.5,
                px: 2,
                color: 'white',
                transition: 'all 0.3s ease',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(219, 68, 55, 0.15)',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <Box
                  sx={{
                    backgroundColor: '#DB4437',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(219, 68, 55, 0.4)',
                  }}
                >
                  <EmailIcon sx={{ color: 'white', fontSize: 22 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                    Email
                  </Typography>
                  <Typography sx={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.7)',
                    mt: 0.2,
                    wordBreak: 'break-word'
                  }}>
                    {emailAddress}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          )}

          {/* Phone Option (Optional) */}
          {showPhone && (
            <MenuItem
              onClick={handlePhoneClick}
              sx={{
                py: 1.5,
                px: 2,
                color: 'white',
                transition: 'all 0.3s ease',
                borderBottom: showEmail ? '1px solid rgba(255,255,255,0.1)' : 'none',
                '&:hover': {
                  backgroundColor: 'rgba(59, 193, 168, 0.15)',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <Box
                  sx={{
                    backgroundColor: themeColor,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 15px ${themeColor}66`,
                  }}
                >
                  <PhoneIcon sx={{ color: 'white', fontSize: 22 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                    Phone
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', mt: 0.2 }}>
                    {phoneNumber}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          )}

          {/* Contact Info Footer */}
          <Box sx={{
            px: 2,
            py: 1.5,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            textAlign: 'center'
          }}>
            <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
              Available 24/7
            </Typography>
            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', mt: 0.5 }}>
              Click any option to connect
            </Typography>
          </Box>
        </Menu>

        {/* Hover Animation Effects */}
        {isHovered && !isMenuOpen && (
          <>
            {/* WhatsApp Pulse Effect */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 70,
                height: 70,
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 211, 102, 0.2)',
                animation: 'pulse 2s infinite',
                zIndex: -1,
              }}
            />
            {/* LinkedIn Pulse Effect */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: 'rgba(10, 102, 194, 0.15)',
                animation: 'pulse 2s infinite 0.5s',
                zIndex: -2,
              }}
            />
            {/* Theme Color Pulse Effect */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 90,
                height: 90,
                borderRadius: '50%',
                backgroundColor: `${themeColor}22`,
                animation: 'pulse 2s infinite 1s',
                zIndex: -3,
              }}
            />
          </>
        )}
      </Box>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(0.9);
              opacity: 0.7;
            }
            70% {
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default ContactFloatingIcon;