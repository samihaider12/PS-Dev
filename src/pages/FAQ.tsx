import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const theme = useTheme();

  const faqs = [
    {
      id: 1,
      question: "How to Get Started with Primestacksol?",
      answer: "Starting your digital transformation with Primestacksol is a simple 4-step process designed to turn your vision into a high-performing reality.",
      steps: [
        { title: "Discovery Call & Consultation", desc: "Everything begins with a conversation. We’ll discuss your business goals, target audience, and technical challenges." },
        { title: "Strategic Planning & Roadmap", desc: "Our team drafts a detailed roadmap defining the tech stack, milestones, and delivery timelines." },
        { title: "Development & Real-Time Feedback", desc: "We build using clean code and Agile methodology, giving you regular updates and demos." },
        { title: "Deployment & Growth Support", desc: "After rigorous testing, we launch and provide post-launch optimization to ensure scalability." }
      ]
    },
    {
      id: 2,
      question: "How involved do I need to be during the project?",
      answer: "We believe in 'Minimal Effort, Maximum Impact'. Your involvement is key at three specific stages:",
      steps: [
        { title: "The Blueprint Phase", desc: "High Involvement: We need your vision to ensure the roadmap aligns with your goals." },
        { title: "Milestone Reviews", desc: "Medium Involvement: Every 1–2 weeks, we show demos for your feedback." },
        { title: "Final Approval", desc: "Low Involvement: User Acceptance Test (UAT) before the final green light." }
      ]
    },
    {
      id: 3,
      question: "How long will it take to see my website live?",
      answer: "Quality and efficiency are our priorities. A standard professional website typically takes 4 to 6 weeks. High-converting landing pages can be ready in 2 weeks, while complex custom web applications may require 3 months or more.",
      steps: []
    },
    {
      id: 4,
      question: "Do you provide support after the website is launched?",
      answer: "Absolutely. We view the launch as the beginning of our partnership. We ensure your product stays high-performing through:",
      steps: [
        { title: "30-Day Hyper-Care", desc: "Immediate monitoring after launch to ensure a smooth transition and instant bug fixes." },
        { title: "Proactive Security", desc: "We keep frameworks and dependencies updated to protect against vulnerabilities." },
        { title: "Performance Optimization", desc: "Periodic audits for speed, mobile responsiveness, and high SEO rankings." },
        { title: "Strategic Scaling", desc: "Adding new dashboards or AI integration as your business grows." }
      ]
    },
    {
      id: 5,
      question: "Do you create responsive and eCommerce websites?",
      answer: "Yes, building responsive and eCommerce-ready platforms is one of our core specialties. We use React and MUI to deliver lightning-fast, mobile-optimized online stores, from simple boutiques to complex multi-vendor marketplaces.",
      steps: []
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default',  }}>
      <Container maxWidth="md">
        {/* Title Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 800,
              display: 'inline-block',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mr: 2
            }}
          >
            Frequently Asked
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: 'primary.main',
              fontStyle: 'italic',
              fontWeight: 300,
              fontFamily: 'serif',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              display: 'inline-block'
            }}
          >
            Questions
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mt: 2, borderRadius: 2 }} />
        </Box>

        {/* Accordion FAQ List */}
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            disableGutters
            elevation={0}
            sx={{
              bgcolor: 'background.paper',
              color: 'text.primary',
              mb: 2.5,
              borderRadius: '20px !important',
              border: `1px solid ${theme.palette.primary.main}15`,
              overflow: 'hidden',
              transition: '0.3s',
              '&:before': { display: 'none' },
              '&:hover': {
                borderColor: `${theme.palette.primary.main}50`,
                boxShadow: `0 10px 30px ${theme.palette.primary.main}08`
              },
              '&.Mui-expanded': {
                border: `1px solid ${theme.palette.primary.main}60`,
                boxShadow: `0 15px 40px ${theme.palette.primary.main}12`
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main', fontSize: '1.8rem' }} />}
              sx={{ 
                px: 3, 
                py: 1,
                '& .MuiTypography-root': {
                   transition: '0.3s',
                },
                '&.Mui-expanded .MuiTypography-root': {
                  color: 'primary.main'
                }
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                {faq.id}. {faq.question}
              </Typography>
            </AccordionSummary>
            
            <AccordionDetails sx={{ px: 4, pb: 4, pt: 0 }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.05rem', mb: faq.steps.length > 0 ? 3 : 0 }}>
                {faq.answer}
              </Typography>

              {faq.steps.map((step, idx) => (
                <Box key={idx} sx={{ mb: 2.5, position: 'relative', pl: 3, borderLeft: `2px solid ${theme.palette.primary.main}30` }}>
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                    {idx + 1}. {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.9, mt: 0.5, lineHeight: 1.6 }}>
                    {step.desc}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;