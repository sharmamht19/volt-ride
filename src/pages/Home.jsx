import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography, Card, CardContent, Paper } from '@mui/material';
import { motion } from 'framer-motion';

import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import MapIcon from '@mui/icons-material/Map';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import NatureIcon from '@mui/icons-material/Nature';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QrCodeIcon from '@mui/icons-material/QrCode';
import heroBg from '../assets/hero-background-scooter.png';

const MotionBox = motion(Box);

const Home = () => {
    const experiencePoints = [
        { title: 'Zero Emissions', icon: <NatureIcon /> },
        { title: '1 min Setup', icon: <PlayArrowIcon /> },
        { title: 'Smooth Process', icon: <ElectricBoltIcon /> },
        { title: 'Comfortable Ride', icon: <LocationOnIcon /> },
    ];

    const features = [
        {
            icon: <ElectricBoltIcon color="primary" sx={{ fontSize: 48 }} />,
            title: 'Efficient & Eco-Friendly',
            description: 'Our all-electric scooters help reduce your carbon footprint while getting you where you need to go.',
        },
        {
            icon: <AttachMoneyIcon color="primary" sx={{ fontSize: 48 }} />,
            title: 'Affordable Pricing',
            description: 'Choose from flexible pay-per-ride or monthly subscription plans that fit your budget.',
        },
        {
            icon: <LocationOnIcon color="primary" sx={{ fontSize: 48 }} />,
            title: 'Convenient Locations',
            description: 'Find our scooters at designated spots within your community, resort, or campus.',
        },
        {
            icon: <QrCodeIcon color="primary" sx={{ fontSize: 48 }} />,
            title: 'Simple to Use',
            description: 'Unlock, ride, and park with just a few taps on our user-friendly mobile app.',
        },
    ];

    const launchLocations = [
        { icon: '🏞️', title: 'Chandigarh', description: 'Sukhna Lake & Rose Garden' },
        { icon: '🕌', title: 'Hyderabad' },
        { icon: '🌳', title: 'Bangalore' },
        { icon: '🏰', title: 'Bhopal' },
        { icon: '🚀', title: 'More Cities Soon!' },
    ];

    const stats = [
        { number: '1M+', label: 'Rides Annually' },
        { number: '150+', label: 'Volt Hubs' },
        { number: '0', label: 'Emissions' },
        { number: '100%', label: 'Electric' },
        { number: '24/7', label: 'Available' },
        { number: '5+', label: 'Cities Soon' },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    color: 'white',
                    py: { xs: 10, md: 15 },
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(0px)',
                        zIndex: 0,
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                        zIndex: 1,
                    },
                    '& > *': {
                        position: 'relative',
                        zIndex: 2,
                    },
                }}
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} md={7}>
                            <MotionBox
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                sx={{
                                    background: 'transparent',
                                    backdropFilter: 'none',
                                    borderRadius: '20px',
                                    p: { xs: 3, md: 5 },
                                    textAlign: 'left',
                                    border: 'none',
                                }}
                            >
                                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', typography: { xs: 'h3', md: 'h2' } }}>
                                    The Volt Ride Experience
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.9)', typography: { xs: 'body1', md: 'h6' } }}>
                                    Discover the perfect blend of sustainability, convenience, and innovation.
                                </Typography>
                                <Button component={Link} to="/about" variant="contained" color="primary" size="large" endIcon={<ArrowForwardIcon />}>
                                    Learn More
                                </Button>
                                <Grid container spacing={2} sx={{ mt: 4 }}>
                                    {experiencePoints.map((point) => (
                                        <Grid item xs={6} md={3} key={point.title}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Box sx={{ color: 'primary.main', mr: 1.5, display: 'inline-flex' }}>{point.icon}</Box>
                                                <Typography variant="body1">{point.title}</Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </MotionBox>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        The Smarter Way to Move
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 'md', mx: 'auto' }}>
                        We're redefining the way India moves with eco-friendly, accessible, and convenient mobility solutions.
                    </Typography>
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
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
                                            <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                                            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                                {feature.title}
                                            </Typography>
                                            <Typography color="text.secondary">{feature.description}</Typography>
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Launching Soon Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Launching Soon In
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                        {launchLocations.map((location, index) => (
                            <Grid item xs={12} sm={4} md={2.4} key={index}>
                                <MotionBox
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    sx={{ height: '100%' }}
                                >
                                    <Card sx={{ textAlign: 'center', height: '100%', p: 2, display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="h3" sx={{ mb: 2 }}>
                                                {location.icon}
                                            </Typography>
                                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                                {location.title}
                                            </Typography>
                                            {location.description && (
                                                <Typography variant="body2" color="text.secondary">
                                                    {location.description}
                                                </Typography>
                                            )}
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Stats Section */}
            <Box sx={{ bgcolor: 'secondary.dark', color: 'white', py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Built for the Future
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ color: 'secondary.light', mb: 8 }}>
                        Our impact on sustainable mobility
                    </Typography>
                    <Grid container spacing={4}>
                        {stats.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                                        {stat.number}
                                    </Typography>
                                    <Typography sx={{ color: 'secondary.light' }}>{stat.label}</Typography>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Get Early Access Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, background: (theme) => theme.palette.secondary.dark, color: 'white' }}>
                <Container maxWidth="md">
                    <MotionBox
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center' }}
                    >
                        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Be Among the First to Ride
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, maxWidth: 'lg' }}>
                            Get notified when we launch in your city. Early subscribers get exclusive offers!
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button variant="contained" color="primary" size="large" component={Link} to="/contact">
                                Notify Me
                            </Button>
                            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} size="large" component={Link} to="/about">
                                Learn More
                            </Button>
                        </Box>
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
};

export default Home; 