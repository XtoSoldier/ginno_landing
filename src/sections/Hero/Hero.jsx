import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import './Hero.css';

const Hero = ({ scrollToAbout }) => (
    <Box className="hero-section">
        <Typography variant="h2" component="h1" className="hero-title">
            GINNO
        </Typography>
        <Typography variant='subtitle1' component="h2" className="hero-subtitle">
            Innovación Gastronómica   
        </Typography>
        <Box className="hero-buttons">
        <Button
            variant="contained"
            className="hero-btn-primary"
            onClick={scrollToAbout}
        >
            Ver más
        </Button>
        <Button
            variant="outlined"
            className="hero-btn-secondary"
        >
            Ingresar
        </Button>
        </Box>
    </Box>
);

export default Hero;