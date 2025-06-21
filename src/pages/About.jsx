import { Box, Container, Grid, Typography, Card, CardContent, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PageHero from '../components/PageHero';
import prayashImage from '../assets/prayash-nag.jpeg';
import mohitImage from '../assets/mohit-sharma.jpg';

const MotionBox = motion(Box);

const About = () => {
    const values = [
        {
            icon: <GppGoodIcon fontSize="large" color="primary" />,
            title: "Sustainability",
            description: "Committed to reducing carbon footprint and promoting green transportation solutions."
        },
        {
            icon: <EmojiObjectsIcon fontSize="large" color="primary" />,
            title: "Innovation",
            description: "Continuously pushing boundaries in electric vehicle technology and user experience."
        },
        {
            icon: <FavoriteIcon fontSize="large" color="primary" />,
            title: "Customer First",
            description: "Every decision we make is centered around providing the best experience for our customers."
        },
        {
            icon: <TrackChangesIcon fontSize="large" color="primary" />,
            title: "Excellence",
            description: "Striving for excellence in every aspect of our business, from technology to service."
        }
    ];

    const team = [
        {
            name: 'Prayash Nag',
            role: 'Co-Founder & CEO',
            image: prayashImage,
            description: 'Visionary leader with a passion for sustainable urban mobility.',
        },
        {
            name: 'Mohit Sharma',
            role: 'Co-Founder & COO',
            image: mohitImage,
            description: 'Operational expert ensuring a seamless and efficient rental experience.',
        },
    ];

    const howItWorks = [
        {
            step: 1,
            title: "Scan the QR code",
            description: "Scan the QR code on the scooter using our mobile app",
            icon: <QrCodeIcon fontSize="large" color="primary" />
        },
        {
            step: 2,
            title: "Unlock & start riding",
            description: "Unlock the scooter and begin your journey",
            icon: <DirectionsCarIcon fontSize="large" color="primary" />
        },
        {
            step: 3,
            title: "Park at a Volt Zone",
            description: "Park at designated Volt Zones after your ride",
            icon: <LocationOnIcon fontSize="large" color="primary" />
        },
        {
            step: 4,
            title: "End the ride",
            description: "End the ride through the app or panel",
            icon: <CheckCircleIcon fontSize="large" color="primary" />
        }
    ];

    return (
        <Box>
            <PageHero
                title="Redefining the Way India Moves"
                subtitle="Volt Ride is an electric kick scooter rental startup built for the future of urban and campus mobility."
            />

            {/* Story Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <MotionBox initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Our Story
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Volt Ride is an electric kick scooter rental startup built for the future of urban and campus mobility. We solve the micro-mobility challenge — the short-distance, last-mile journeys where walking feels too far and driving feels too much.
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    We place clean, quiet, and stylish scooters in communities, colleges, resorts, and public leisure areas so people can ride with ease, reduce their carbon footprint, and enjoy the journey. Whether you're heading to class, work, or just out to explore, Volt Ride is your smooth, green, everyday ride.
                                </Typography>
                            </MotionBox>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MotionBox initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                                    <ElectricBoltIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        Our Mission
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                                        "To bring joy and freedom to short-distance travel by placing eco-friendly scooters where they're needed most."
                                    </Typography>
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        Our Vision
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        "A cleaner, more connected India — where every short ride is zero-emission and super fun."
                                    </Typography>
                                </Paper>
                            </MotionBox>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* How It Works Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        4 Easy Steps to Ride
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 'md', mx: 'auto' }}>
                        Getting started with Volt Ride is simple and quick
                    </Typography>
                    <Grid container spacing={4}>
                        {howItWorks.map((step, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <MotionBox initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <Card sx={{ textAlign: 'center', height: '100%', p: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Box sx={{ mb: 2 }}>{step.icon}</Box>
                                            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                                                {step.step}
                                            </Typography>
                                            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                                {step.title}
                                            </Typography>
                                            <Typography color="text.secondary">{step.description}</Typography>
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ mt: 6, textAlign: 'center' }}>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                            Coming soon: App-based control • Live scooter tracking • ID verification
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Values Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Our Values
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 'md', mx: 'auto' }}>
                        These core values guide everything we do and shape the culture of our company.
                    </Typography>
                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <MotionBox initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <Card sx={{ textAlign: 'center', height: '100%', p: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Box sx={{ mb: 2 }}>{value.icon}</Box>
                                            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                                {value.title}
                                            </Typography>
                                            <Typography color="text.secondary">{value.description}</Typography>
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Team Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Meet Our Founders
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 'md', mx: 'auto' }}>
                        The passionate individuals behind Volt Ride's success.
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {team.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <MotionBox initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <Card sx={{ textAlign: 'center', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Avatar src={member.image} alt={member.name} sx={{ width: 120, height: 120, mx: 'auto', mt: 4, mb: 2, border: '4px solid', borderColor: 'primary.main', '& .MuiAvatar-img': { objectPosition: 'top' } }} />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                                {member.name}
                                            </Typography>
                                            <Typography color="primary" sx={{ mb: 1 }}>
                                                {member.role}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {member.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Sustainability Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <MotionBox initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Built Green from the Ground Up
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Every Volt Ride scooter on the road means one less car and one less puff of pollution. Our fleet is fully electric and designed for urban mobility, reducing the carbon footprint of daily travel.
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    By encouraging people to shift away from petrol-powered vehicles for short commutes, we're promoting a lifestyle that's both smart and sustainable.
                                </Typography>
                                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                                    Zero emissions. Less noise. Cleaner air. One ride at a time.
                                </Typography>
                            </MotionBox>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MotionBox initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <Paper elevation={3} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
                                    <ElectricBoltIcon sx={{ fontSize: 60, mb: 2 }} />
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        Sustainability Impact
                                    </Typography>
                                    <Typography variant="h6">
                                        Join us in creating a greener future for India's urban mobility.
                                    </Typography>
                                </Paper>
                            </MotionBox>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default About; 