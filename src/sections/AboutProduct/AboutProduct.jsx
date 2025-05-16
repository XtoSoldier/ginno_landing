import { Box, Button, Typography } from '@mui/material';
import './AboutProduct.css';
import features from './features.json';
import * as Icons from '@mui/icons-material';
import Divider from '@mui/material/Divider';



const AboutProduct = ({ scrollToContact }) => {
    return (
        <Box className="about-product-section">
            <Typography variant="h3" component="h1" className="about-product-title" sx={{marginBottom: '3rem'}}>
                ¿Qué es GINNO?
            </Typography>
            <Typography variant="body1" className="about-product-description" >
                GINNO es una plataforma de gestión de pedidos y reservas para restaurantes, diseñada para optimizar la experiencia del cliente y mejorar la eficiencia operativa. Con GINNO, los restaurantes pueden gestionar sus pedidos en línea, reservas y pagos de manera sencilla y rápida.
            </Typography>
            <Box className="aboutProduct-buttons" sx={{marginBottom: '4rem'}}>
                <Button
                    variant="contained"
                    className="aboutProduct-btn-primary"
                    onClick={scrollToContact}

                >
                    Solicitar una demo
                </Button>
            </Box>
            <Box className="features-container">
                {features.map(({ id, icon, label, title, description }) => {
                    const IconComponent = Icons[icon] || Icons.HelpOutline;
                    return (
                    <Box key={id} className="feature-card">
                        <IconComponent className="feature-icon" fontSize="large" />
                        <Typography variant="overline" className="feature-label">{label}</Typography>
                        <Typography variant="h6" className="feature-title">{title}</Typography>
                        <Typography variant="body2" className="feature-description">{description}</Typography>
                    </Box>
                    );
                })}
            </Box>
        </Box>
        

    );
};

export default AboutProduct;