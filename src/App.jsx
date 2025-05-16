import { Box } from '@mui/material'
import './App.css'
import Hero from './sections/Hero/Hero'
import AboutProduct from './sections/AboutProduct/AboutProduct'
import ContactUs from './sections/ContactUs/ContactUs'
import Footer from './sections/Footer/Footer'
import React, { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <Box className="app-Box">
      <Hero scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Box ref={aboutRef}>
        <AboutProduct scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      </Box>
      <Box ref={contactRef}>
        <ContactUs />
      </Box>      
      <Footer />
    </Box>
  )
}

export default App
