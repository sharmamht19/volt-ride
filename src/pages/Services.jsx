import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography, Card, CardContent, Paper, Switch, Chip } from '@mui/material';
import { motion } from 'framer-motion';

import CarRentalIcon from '@mui/icons-material/CarRental';
import EvStationIcon from '@mui/icons-material/EvStation';
import NavigationIcon from '@mui/icons-material/Navigation';
import BuildIcon from '@mui/icons-material/Build';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ParkIcon from '@mui/icons-material/Park';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PageHero from '../components/PageHero';

const MotionBox = motion(Box);

const Services = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const services = [
        {
            icon: <CarRentalIcon fontSize="large" color="primary" />,
            title: "Electric Scooter Rental",
            description: "Rent electric kick scooters for short-distance travel within communities, campuses, and leisure areas.",
            features: ["QR code activation", "Flexible rental periods", "Designated parking zones", "24/7 availability"]
        },
        {
            icon: <EvStationIcon fontSize="large" color="primary" />,
            title: "Charging Infrastructure",
            description: "Access our network of charging stations strategically placed across partner locations.",
            features: ["Fast charging stations", "Real-time availability", "Mobile app integration", "Maintenance included"]
        },
        {
            icon: <NavigationIcon fontSize="large" color="primary" />,
            title: "Smart Mobility Solutions",
            description: "Complete mobility ecosystem designed for micro-transportation needs.",
            features: ["Route optimization", "Volt Zone locations", "Real-time tracking", "Safety features"]
        },
        {
            icon: <BuildIcon fontSize="large" color="primary" />,
            title: "Maintenance & Support",
            description: "Comprehensive maintenance and 24/7 support for all our mobility solutions.",
            features: ["Regular maintenance", "Emergency support", "Mobile service", "Warranty coverage"]
        }
    ];

    const partnerLocations = [
        {
            icon: <BusinessIcon fontSize="large" color="primary" />,
            title: "Residential Societies",
            description: "Provide residents with convenient, eco-friendly transportation options."
        },
        {
            icon: <SchoolIcon fontSize="large" color="primary" />,
            title: "College Campuses",
            description: "Enhance student mobility with sustainable transportation solutions."
        },
        {
            icon: <BeachAccessIcon fontSize="large" color="primary" />,
            title: "Resorts & Leisure",
            description: "Offer guests unique mobility experiences in beautiful settings."
        },
        {
            icon: <LocationCityIcon fontSize="large" color="primary" />,
            title: "Tech Parks",
            description: "Modernize workplace mobility with smart transportation options."
        }
    ];

    const pricingPlans = [
        {
            name: 'Single Ride',
            price: '₹50',
            period: 'per 30 min',
            description: 'Additional charges apply for every subsequent 30 minutes.',
            features: [],
            popular: false,
        },
        {
            name: 'Hourly Ride',
            price: '₹80',
            period: 'per 1 hour',
            description: 'A cost-effective option for longer journeys.',
            features: [],
            popular: false,
        },
        {
            name: 'Monthly Pass',
            price: '₹999',
            period: '/ month',
            description: 'Extra charges applicable for usage beyond the daily 30 minutes.',
            features: ['Daily 30 min included'],
            popular: true,
        },
        {
            name: 'Customize',
            price: 'Contact Us',
            period: '',
            description: 'Tailored plans for campuses, resorts, and corporate clients.',
            features: ['Dedicated Fleet', 'Custom Branding', 'Full Support'],
            contact: true,
            popular: false,
        },
    ];

    return (
        <Box>
            <PageHero
                title="Our Services"
                subtitle="Comprehensive electric mobility solutions designed to meet your every need. From rental to charging, we've got you covered."
            />

            {/* Services Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        What We Offer
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 'md', mx: 'auto' }}>
                        Discover our range of services designed to make electric mobility seamless and enjoyable.
                    </Typography>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <MotionBox
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    sx={{ height: '100%' }}
                                >
                                    <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ p: 4, flexGrow: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                {service.icon}
                                                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                                                    {service.title}
                                                </Typography>
                                            </Box>
                                            <Typography color="text.secondary" sx={{ mb: 3 }}>
                                                {service.description}
                                            </Typography>
                                            <Grid container spacing={1}>
                                                {service.features.map((feature, fIndex) => (
                                                    <Grid item xs={12} sm={6} key={fIndex}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                            <CheckIcon color="primary" sx={{ mr: 1 }} />
                                                            <Typography variant="body2">{feature}</Typography>
                                                        </Box>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Partner With Us Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Bring Volt Ride to Your Property
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4, maxWidth: 'md', mx: 'auto' }}>
                        Are you managing a residential society, resort, campus, or tech park?
                    </Typography>
                    <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 'lg', mx: 'auto' }}>
                        Partner with us and provide your residents or guests with clean, convenient mobility.
                    </Typography>

                    <Grid container spacing={4} sx={{ mb: 8 }}>
                        {partnerLocations.map((location, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <MotionBox
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    sx={{ height: '100%' }}
                                >
                                    <Card sx={{ textAlign: 'center', height: '100%', p: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Box sx={{ mb: 2 }}>{location.icon}</Box>
                                            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                                {location.title}
                                            </Typography>
                                            <Typography color="text.secondary">{location.description}</Typography>
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <CheckIcon color="primary" sx={{ mr: 1 }} />
                                    <Typography>No infrastructure investment needed</Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <CheckIcon color="primary" sx={{ mr: 1 }} />
                                    <Typography>We handle maintenance and operations</Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <CheckIcon color="primary" sx={{ mr: 1 }} />
                                    <Typography>Increase your property's smart mobility appeal</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" color="primary" size="large" component={Link} to="/contact" endIcon={<ArrowForwardIcon />}>
                            Get in Touch to Partner
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Pricing Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Flexible Pricing Plans
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: { xs: 8, md: 10 } }}>
                        Choose the plan that's right for you.
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {pricingPlans.map((plan, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <MotionBox
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    sx={{ height: '100%' }}
                                >
                                    <Card sx={{ position: 'relative', border: plan.popular ? '2px solid' : '1px solid', borderColor: plan.popular ? 'primary.main' : 'divider', transform: plan.popular ? 'scale(1.05)' : 'none', height: '100%', display: 'flex', flexDirection: 'column', width: '100%', borderRadius: 4 }}>
                                        {plan.popular && <Chip label="Most Popular" color="primary" sx={{ position: 'absolute', top: 16, right: 16 }} />}
                                        <CardContent sx={{ p: 4, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                                    {plan.name}
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', my: 2 }}>
                                                    <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                                                        {plan.price}
                                                    </Typography>
                                                    {!plan.contact && (
                                                        <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                                                            {plan.period}
                                                        </Typography>
                                                    )}
                                                </Box>
                                                <Typography variant="body2" color="text.secondary" sx={{ minHeight: '40px' }}>
                                                    {plan.description}
                                                </Typography>
                                                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mt: 2 }}>
                                                    {plan.features.map((feature, i) => (
                                                        <Typography component="li" variant="subtitle1" align="center" key={i} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                                                            <CheckIcon color="primary" sx={{ mr: 1 }} />
                                                            {feature}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Box>
                                            <Button
                                                component={Link}
                                                to="/contact"
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{ mt: 'auto' }}
                                            >
                                                {plan.contact ? 'Contact Us' : 'Choose Plan'}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Services; 