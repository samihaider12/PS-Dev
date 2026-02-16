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
      question: "How do I get started with Primestacksol services?",
      answer: "Starting your digital transformation with Primestacksol is simple and structured. Here's how we make it happen:",
      steps: [
        { title: "Initial Discovery & Analysis", desc: "We analyze your business needs, target audience, and technical requirements to identify the right solutions." },
        { title: "Solution Architecture Planning", desc: "Our experts design a comprehensive tech stack and architecture plan tailored to your goals." },
        { title: "Agile Development & Testing", desc: "We build using modern methodologies with regular updates, demos, and quality assurance." },
        { title: "Deployment & Continuous Support", desc: "After rigorous testing, we deploy and provide ongoing maintenance and optimization." }
      ]
    },
    {
      id: 2,
      question: "What AWS cloud services do you provide?",
      answer: "We offer comprehensive AWS solutions for businesses of all sizes:",
      steps: [
        { title: "Infrastructure Setup & Management", desc: "EC2 instances, VPC configuration, load balancing, and auto-scaling groups setup." },
        { title: "Storage & Database Solutions", desc: "S3 buckets, RDS databases, DynamoDB, and ElastiCache implementation." },
        { title: "Serverless Architecture", desc: "AWS Lambda functions, API Gateway, and Step Functions for scalable applications." },
        { title: "Security & Monitoring", desc: "IAM policies, CloudTrail logging, CloudWatch monitoring, and security compliance." }
      ]
    },
    {
      id: 3,
      question: "Can you develop custom AI and machine learning solutions?",
      answer: "Yes, we specialize in developing custom AI and ML solutions tailored to your business needs:",
      steps: [
        { title: "AI Chatbots & Virtual Assistants", desc: "Intelligent conversational interfaces for customer support and engagement." },
        { title: "Predictive Analytics", desc: "ML models for forecasting, trend analysis, and data-driven decision making." },
        { title: "Computer Vision Applications", desc: "Image recognition, object detection, and visual analysis solutions." },
        { title: "Natural Language Processing", desc: "Text analysis, sentiment analysis, and language understanding systems." }
      ]
    },
    {
      id: 4,
      question: "Do you provide mobile app development with Flutter?",
      answer: "We offer complete Flutter development services for cross-platform mobile applications:",
      steps: [
        { title: "Cross-Platform Development", desc: "Single codebase for both iOS and Android with native-like performance." },
        { title: "Custom UI/UX Design", desc: "Beautiful, responsive interfaces designed for optimal user experience." },
        { title: "API Integration", desc: "Seamless integration with RESTful APIs, GraphQL, and third-party services." },
        { title: "App Store Deployment", desc: "Complete guidance and support for publishing on Apple App Store and Google Play Store." }
      ]
    },
    {
      id: 5,
      question: "What Next.js development services do you offer?",
      answer: "We provide end-to-end Next.js development for high-performance web applications:",
      steps: [
        { title: "Server-Side Rendering (SSR)", desc: "Improved SEO and performance with server-rendered React components." },
        { title: "Static Site Generation (SSG)", desc: "Fast, pre-rendered pages with excellent performance scores." },
        { title: "API Routes & Middleware", desc: "Built-in API endpoints and custom middleware for backend functionality." },
        { title: "Deployment & Optimization", desc: "Deployment to Vercel with performance optimization and monitoring." }
      ]
    },
    {
      id: 6,
      question: "Do you offer Docker and DevOps solutions?",
      answer: "Yes, we provide comprehensive Docker containerization and DevOps implementation:",
      steps: [
        { title: "Containerization with Docker", desc: "Dockerfile creation, multi-stage builds, and container orchestration." },
        { title: "CI/CD Pipeline Setup", desc: "Automated testing, building, and deployment pipelines for continuous integration." },
        { title: "Infrastructure as Code", desc: "Terraform and CloudFormation for reproducible infrastructure deployment." },
        { title: "Monitoring & Logging", desc: "Prometheus, Grafana, and ELK stack setup for observability." }
      ]
    },
    {
      id: 7,
      question: "What kind of WordPress development services do you provide?",
      answer: "We offer complete WordPress solutions from simple blogs to complex enterprise websites:",
      steps: [
        { title: "Custom Theme Development", desc: "Pixel-perfect, responsive themes built from scratch or customized." },
        { title: "Plugin Development", desc: "Custom WordPress plugins for extended functionality and features." },
        { title: "WooCommerce Development", desc: "Full e-commerce solutions with payment gateways and inventory management." },
        { title: "Performance Optimization", desc: "Speed optimization, caching setup, and security hardening." }
      ]
    },
    {
      id: 8,
      question: "How do you handle SEO for websites?",
      answer: "Our comprehensive SEO services ensure your website ranks well and attracts organic traffic:",
      steps: [
        { title: "Technical SEO Audit", desc: "Comprehensive analysis of site structure, speed, mobile-friendliness, and indexing." },
        { title: "On-Page Optimization", desc: "Meta tags optimization, content structure, and internal linking strategy." },
        { title: "Content Strategy", desc: "Keyword research, content planning, and creation for target audience engagement." },
        { title: "Performance Monitoring", desc: "Regular tracking, reporting, and strategy adjustments based on analytics." }
      ]
    },
    {
      id: 9,
      question: "Do you provide ongoing maintenance and support?",
      answer: "We offer comprehensive post-launch support to ensure your digital solutions remain optimal:",
      steps: [
        { title: "Proactive Monitoring", desc: "24/7 monitoring of performance, uptime, and security metrics." },
        { title: "Regular Updates", desc: "Framework updates, security patches, and dependency management." },
        { title: "Performance Optimization", desc: "Regular audits and improvements for speed, responsiveness, and user experience." },
        { title: "Technical Support", desc: "Priority support for bug fixes, feature additions, and emergency issues." }
      ]
    },
    {
      id: 10,
      question: "What technologies and platforms do you specialize in?",
      answer: "We work with a wide range of modern technologies and platforms:",
      steps: [
        { title: "Frontend Technologies", desc: "React, Next.js, TypeScript, Flutter, and modern JavaScript frameworks." },
        { title: "Backend Technologies", desc: "Node.js, Python, Java, .NET, and serverless architectures." },
        { title: "Cloud Platforms", desc: "AWS, Google Cloud, Azure, and hybrid cloud solutions." },
        { title: "DevOps & Tools", desc: "Docker, Kubernetes, Jenkins, Git, and various CI/CD tools." }
      ]
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 500,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2
            }}
          >
            Frequently Asked
            <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic', ml: 2 }}>
              Questions
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              mb: 3
            }}
          >
            Get answers to common questions about our comprehensive digital solutions and services
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: "4px" }} />
        </Box>

        {/* Accordion FAQ List */}
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
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
                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main', fontSize: '20px' }} />}
                sx={{ 
                  px: { xs: 2, md: 3 }, 
                  py: 2,
                  '& .MuiTypography-root': {
                    transition: '0.3s',
                  },
                  '&.Mui-expanded': {
                    bgcolor: 'rgba(59, 193, 168, 0.05)'
                  },
                  '&.Mui-expanded .MuiTypography-root': {
                    color: 'primary.main',
                    fontWeight: 500
                  }
                }}
              >
                <Typography 
                  component="div"
                  sx={{ 
                  fontWeight: 500, 
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Box sx={{ 
                    color: 'primary.main',
                    fontWeight: 500,
                    minWidth: '24px'
                  }}>
                    {faq.id}.
                  </Box>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              
              <AccordionDetails sx={{ px: { xs: 2, md: 4 }, pb: { xs: 3, md: 4 }, pt: 0 }}>
                <Typography sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.8, 
                  fontSize: { xs: '0.95rem', md: '1.05rem' }, 
                  mb: faq.steps.length > 0 ? 3 : 0 
                }}>
                  {faq.answer}
                </Typography>

                {faq.steps.map((step, idx) => (
                  <Box key={idx} sx={{ 
                    mb: 2.5, 
                    position: 'relative', 
                    pl: 3, 
                    borderLeft: `2px solid ${theme.palette.primary.main}30`,
                    transition: '0.3s',
                    '&:hover': {
                      borderLeft: `2px solid ${theme.palette.primary.main}70`,
                      transform: 'translateX(5px)'
                    }
                  }}>
                    <Box sx={{
                      position: 'absolute',
                      left: '-12px',
                      top: '0',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '0.8rem'
                    }}>
                      {idx + 1}
                    </Box>
                    <Typography variant="subtitle1" sx={{ 
                      color: 'primary.main', 
                      fontWeight: 500, 
                      fontSize: '0.95rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: 1,
                      mb: 0.5
                    }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: 'text.secondary', 
                      opacity: 0.9, 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.85rem', md: '0.9rem' }
                    }}>
                      {step.desc}
                    </Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/*  Action */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: { xs: 4, md: 6 },
          p: { xs: 2, md: 3 },
          borderRadius: '24px',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, transparent 100%)`,
          border: `1px solid ${theme.palette.primary.main}30`
        }}>
          <Typography variant="h4" sx={{ 
            color: 'text.primary', 
            fontWeight: 500,
            mb: 2
          }}>
            Still Have Questions?
          </Typography>
          <Typography sx={{ 
            color: 'text.secondary', 
            maxWidth: '600px', 
            mx: 'auto', 
            mb: 4 
          }}>
            Contact our team for personalized consultation about our services
          </Typography>
          <Box sx={{ 
            display: 'inline-flex',
            p: 2,
            borderRadius: '16px',
            background: theme.palette.background.paper,
            border: `1px solid ${theme.palette.primary.main}30`,
            color: 'primary.main',
            fontWeight: 500,
            fontSize: '1.1rem'
          }}>
            contact@primestacksol.com
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;