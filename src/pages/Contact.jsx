import { Box, Button, Container, Grid, Typography, TextField, Card, CardContent, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PageHero from '../components/PageHero';

const MotionBox = motion(Box);

const Contact = () => {
    const [formStatus, setFormStatus] = useState({ open: false, message: '', severity: 'success' });
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            message: data.get('message'),
        });

        // Simulate form submission
        setFormStatus({ open: true, message: 'Your message has been sent successfully!', severity: 'success' });
        event.target.reset();
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setFormStatus({ ...formStatus, open: false });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const contactMethods = [
        { icon: <EmailIcon color="primary" sx={{ fontSize: 40 }} />, title: 'Email', text: 'hello@voltride.in' },
        { icon: <PhoneIcon color="primary" sx={{ fontSize: 40 }} />, title: 'Phone', text: '+91-7354931816' },
        { icon: <LocationOnIcon color="primary" sx={{ fontSize: 40 }} />, title: 'Address', text: 'Chandigarh, India' },
    ];

    return (
        <Box>
            <PageHero
                title="Let's Connect"
                subtitle="Have a question or want to work with us? We'd love to hear from you."
            />

            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Get in Touch
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: { xs: 8, md: 10 } }}>
                        Reach out via phone, email, or our contact form. We're here to help!
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {contactMethods.map((method, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <MotionBox
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    sx={{ height: '100%' }}
                                >
                                    <Card sx={{ textAlign: 'center', height: '100%', p: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Box sx={{ mb: 2 }}>{method.icon}</Box>
                                            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                                {method.title}
                                            </Typography>
                                            <Typography color="text.secondary">
                                                {method.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Contact Form Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                <Container maxWidth="md">
                    <MotionBox
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Card sx={{ p: 4, width: '100%' }}>
                            <CardContent>
                                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Send us a message
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <TextField fullWidth label="Name" name="name" value={formState.name} onChange={handleChange} required />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField fullWidth label="Email" name="email" type="email" value={formState.email} onChange={handleChange} required />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField fullWidth label="Subject" name="subject" value={formState.subject} onChange={handleChange} required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField fullWidth label="Message" name="message" multiline rows={6} value={formState.message} onChange={handleChange} required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="primary" size="large">
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </MotionBox>
                </Container>
            </Box>

            <Snackbar open={formStatus.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={formStatus.severity} sx={{ width: '100%' }}>
                    {formStatus.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact; 