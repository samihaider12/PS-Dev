import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { theme } from '../theme/theme';



// Layout Components (Keep these non-lazy as they appear on every page)
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Lazy Loaded Pages
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Works = lazy(() => import('../pages/Works'));
const Services = lazy(() => import('../pages/Services'));
const ConnectSection = lazy(() => import('../pages/Connect'));
const Templates = lazy(() => import('../pages/Templates'));
const FAQSection = lazy(() => import('../pages/FAQ'));
const Approach = lazy(() => import('../pages/Approach'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Helper to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading Fallback Component
const PageLoader = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="60vh"
  >
    <CircularProgress color="primary" />
  </Box>
);

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/works" element={<Works />} />
            <Route path="/services" element={<Services />} />
            <Route path="/connect" element={<ConnectSection />} />
            <Route path="/faqs" element={<FAQSection />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;