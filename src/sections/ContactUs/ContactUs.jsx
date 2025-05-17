import { Box, TextField, Typography, Button, Alert, CircularProgress} from '@mui/material';
import './ContactUs.css';
import emailjs from '@emailjs/browser'
import { useRef, useState, useEffect } from 'react'
import emailData from './emailData'
import TurnstileComponent from '../../components/TurnstileComponent'

const ContactUs = () => {
   const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_company: '',
    message: '',
  })
  const [severity, setSeverity] = useState('success')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [isHuman, setIsHuman] = useState(false)

  const isFormValid =
  formData.user_name !== ''  &&
  formData.user_email !== '' &&
  formData.user_phone !== '' &&
  formData.user_message !== '';
   // &&
  // isHuman;
  
  const form = useRef()
    const sendEmail = e => {
    e.preventDefault()
    console.log(form.current)
    setLoading(true)
    setMessage('')
    emailjs
      .sendForm(emailData.serviceId, emailData.templateReceivedFromWeb, form.current, {
        publicKey: emailData.publickKey
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setMessage('Tu mensaje se envió correctamente, te estaremos respondiendo a la brevedad')
          setSeverity('success')
          form.current.reset()
          setLoading(false)
          sendAutoResponse(formData.user_name, formData.user_email)
        },
        error => {
          console.log('FAILED...', error.text)
          setMessage(
            'Lamentablemente no pudimos recibir tu mensaje, por favor intenta mas tarde o contáctanos por alguno de nuestros otros medios'
          )
          setSeverity('error')
          setLoading(false)
        }
      )
  }
  const sendAutoResponse = (userName, userEmail) => {
    const templateParams = {
      user_name: userName,
      to_email: userEmail
    }
    emailjs
      .send(emailData.serviceId, emailData.templateAutoReply, templateParams, {
        publicKey: emailData.publickKey
      })
      .then(
        response => {
          console.log('Se envió la respuestsa automática', response.status)
        },
        error => {
          console.error('No se pudo enviar la respueta automática', error.text)
        }
      )
  }

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('')
      }, 10000) // 10 segundos

      return () => clearTimeout(timer) // Limpia el temporizador si el componente se desmonta
    }
  }, [message])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prevData => ({
        ...prevData,
        [name]: value
        }))
    }

  return (
    <Box className="contact-section">
      <Box 
            component="form"
            className="contact-form-container"           
            ref={form}
            onSubmit={sendEmail}
        >
        <Typography variant="h4" align="center" gutterBottom>
          Contáctanos
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Podés solicitar una demo o acercarnos cualquier consulta
        </Typography>

        <TextField 
            name="user_name"
            type="text"
            label="Nombre" 
            variant="outlined" 
            fullWidth 
            className="contact-input" 
            value={formData.user_name}  
            onChange={handleChange}
        />
        <TextField  
            name="user_email"
            label="Email" 
            variant="outlined" 
            fullWidth 
            type='email'
            className="contact-input" 
            value={formData.user_email}  
            onChange={handleChange}
        />
        <TextField 
            name="user_phone"
            label="Teléfono" 
            type="tel" 
            variant="outlined" 
            fullWidth 
            className="contact-input"
            value={formData.user_phone}  
            onChange={handleChange}
         />
        <TextField 
            name="user_company"
            label="Compañía" 
            variant="outlined" 
            fullWidth 
            className="contact-input" 
            value={formData.user_company}
            onChange={handleChange}
        />
        <TextField
            name="message"
            label="Descripción"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            className="contact-input"
            value={formData.user_message}
            onChange={handleChange}
        />

        <Box textAlign="center">
          <Button 
            variant="contained"
            className="contact-button" 
            type="submit"   
            disabled={!isFormValid}
          >
            {loading ? <CircularProgress size={24} /> : 'Enviar'}
          </Button>
        </Box>
        <Box justifyContent="center">
          {message && <Alert severity={severity}>{message}</Alert>}
        </Box>
        
        <TurnstileComponent />

      </Box>
    </Box>
  );
};

export default ContactUs;