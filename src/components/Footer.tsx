import { Box, Container, Grid, Typography, Link, Stack, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Define proper TypeScript interfaces
interface FooterLinkBase {
  name: string;
  link: string;
}

interface InternalLink extends FooterLinkBase {
  internal: true;
}

interface ExternalLink extends FooterLinkBase {
  external: true;
  target?: string;
  rel?: string;
}

type FooterLink = InternalLink | ExternalLink;

interface FooterLinks {
  company: FooterLink[];
  services: FooterLink[];
  resources: FooterLink[];
  contact: FooterLink[];
}

const footerLinks: FooterLinks = {
  company: [
    { name: 'About', link: '/about', internal: true },
    { name: 'Approach', link: '/approach', internal: true },
    { name: 'Work', link: '/work', internal: true },
  ],
  services: [
    {
      name: 'Crafted Websites',
      link: 'https://vos-dev.vederra.com/',
      external: true,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      name: 'Website Redesign',
      link: 'https://owner-dashbord-sami-tech-studio.vercel.app/',
      external: true,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      name: 'eCommerce Design',
      link: 'https://tasty-cart-food.vercel.app/',
      external: true,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ],
  resources: [
    { name: 'Templates', link: '/templates', internal: true },
    { name: 'FAQs', link: '/faqs', internal: true },
  ],
  contact: [
    {
      name: 'Email',
      link: 'mailto:contact@primestacksol.com',
      external: true
    },
    {
      name: 'Phone',
      link: 'tel:+92 348-6805638',
      external: true
    },
  ]
};

const Footer = () => {
  const theme = useTheme();

  // Type guard functions
  const isInternalLink = (link: FooterLink): link is InternalLink => {
    return 'internal' in link && link.internal === true;
  };

  const isExternalLink = (link: FooterLink): link is ExternalLink => {
    return 'external' in link && link.external === true;
  };

  return (
    <Box sx={{
      bgcolor: 'background.default',
      color: 'text.primary',
      pt: { xs: 6, md: 10 },
      pb: { xs: 3, md: 4 },
      borderTop: `1px solid ${theme.palette.primary.main}15`,
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">

        {/* Links Navigation Grid */}
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ mb: { xs: 4, md: 8 }, px: { xs: 1, sm: 2, md: 0 } }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid size={{ xs: 6, sm: 3 }} key={category}>
              <Typography variant="subtitle1" sx={{
                color: 'primary.main',
                mb: { xs: 2, md: 3 },
                textTransform: 'uppercase',
                fontWeight: 800,
                letterSpacing: { xs: 1, md: 1.5 },
                fontSize: { xs: '0.7rem', sm: '0.75rem' }
              }}>
                {category}
              </Typography>
              <Stack spacing={{ xs: 1.5, md: 2 }}>
                {links.map((item: any) => {
                  // For internal links (React Router)
                  if (isInternalLink(item)) {
                    return (
                      <Link
                        key={item.name}
                        component={RouterLink}
                        to={item.link}
                        underline="none"
                        sx={{
                          color: 'text.secondary',
                          fontSize: {
                            xs: '13.6px',
                            sm: '14.4px',
                            md: '15.2px',
                          },
                          width: 'fit-content',
                          transition: '0.3s',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '100%',
                          '&:hover': {
                            color: 'primary.main',
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  }

                  // For external links
                  if (isExternalLink(item)) {
                    // Format contact labels for mobile
                    const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
                    const displayName = category === 'contact'
                      ? (isMobile
                        ? (item.name === 'Email' ? 'Email' : 'Phone')
                        : item.name === 'Email'
                          ? 'contact@primestacksol.com'
                          : '+92 348-6805638'
                      )
                      : item.name;

                    return (
                      <Link
                        key={item.name}
                        href={item.link}
                        target={item.target}
                        rel={item.rel}
                        underline="none"
                        sx={{
                          color: 'text.secondary',
                          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                          width: 'fit-content',
                          transition: '0.3s',
                          display: 'flex',
                          alignItems: 'center',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '100%',
                          '&:hover': {
                            color: 'primary.main',
                            transform: item.target === '_blank' ? 'translateX(5px)' : 'none'
                          }
                        }}
                      >
                        {displayName}
                        {item.target === '_blank' && (
                          <Box
                            component="span"
                            sx={{
                              ml: 0.5,
                              fontSize: { xs: '0.65rem', md: '0.7rem' },
                              opacity: 0.7,
                              flexShrink: 0
                            }}
                          >
                            ↗
                          </Box>
                        )}
                      </Link>
                    );
                  }

                  // Fallback
                  return (
                    <Typography key={item.name} sx={{
                      color: 'text.disabled',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' }
                    }}>
                      {/* {item.name} */}
                    </Typography>
                  );
                })}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Branding & Copyright */}
        <Box sx={{
          pt: { xs: 3, md: 4 },
          borderTop: `1px solid ${theme.palette.primary.main}10`,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 2, md: 2 },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: { xs: 1, md: 1.5 },
              order: { xs: 2, md: 1 }
            }}
          >
            <Box
              sx={{
                width: { xs: 28, md: 32 },
                height: { xs: 28, md: 32 },
                bgcolor: 'primary.main',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              P
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color: 'white',
                letterSpacing: { xs: -0.3, md: -0.5 },
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' }
              }}
            >
              PrimeStack<Box component="span" sx={{ color: 'primary.main' }}>Sol</Box>
            </Typography>
          </Box>

          <Typography variant="caption" sx={{
            color: 'text.disabled',
            textAlign: { xs: 'center', md: 'center' },
            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
            order: { xs: 1, md: 2 },
            px: { xs: 2, md: 0 },
            lineHeight: 1.4
          }}>
            © {new Date().getFullYear()} PrimeStack-Sol.
            <Box component="span" sx={{ display: { xs: 'block', sm: 'none' } }} /><br />
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}> </Box>
            Expertly crafted for digital growth.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;