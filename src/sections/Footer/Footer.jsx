import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer-section">
      <Box className="footer-icons">
        <IconButton
          component="a"
          href="https://web.whatsapp.com/send?phone=542901308014" // tu número real con código país
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/tu-perfil" // tu perfil
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:administracion@dinno-ush.com" // tu correo
          aria-label="Email"
        >
          <EmailIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} - Powered by{' '}
        <Link href="https://www.dinno-ush.com" target="_blank" rel="noopener" className="footer-link">
          DINNO
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;