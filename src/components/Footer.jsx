import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 6 }}>
            <Container maxWidth="xl">
                <Grid container spacing={5} alignItems="center">
                    {/* Company Info */}
                    <Grid item xs={12} md={5}>
                        <Typography variant="h5" component={Link} to="/" sx={{ display: 'inline-flex', alignItems: 'center', mb: 2, textDecoration: 'none', color: 'white' }}>
                            <ElectricBoltIcon sx={{ mr: 1, color: 'primary.main' }} />
                            <Box component="span" sx={{ fontWeight: 'bold' }}>VoltRide</Box>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'background.default', mb: 2, maxWidth: 'md' }}>
                            Redefining the way India moves with eco-friendly electric kick scooter rentals for communities, campuses, and leisure zones.
                        </Typography>
                        <Box>
                            <IconButton href="#" sx={{ color: 'background.default', '&:hover': { color: 'primary.light' } }}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton href="#" sx={{ color: 'background.default', '&:hover': { color: 'primary.light' } }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton href="#" sx={{ color: 'background.default', '&:hover': { color: 'primary.light' } }}>
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Quick Links & Contact */}
                    <Grid item xs={12} md={7}>
                        <Grid container spacing={5}>
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                    Quick Links
                                </Typography>
                                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, spaceY: 1 }}>
                                    <li>
                                        <Typography component={Link} to="/" variant="body2" sx={{ color: 'background.default', textDecoration: 'none', '&:hover': { color: 'primary.light' } }}>
                                            Home
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography component={Link} to="/about" variant="body2" sx={{ color: 'background.default', textDecoration: 'none', '&:hover': { color: 'primary.light' } }}>
                                            About Us
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography component={Link} to="/services" variant="body2" sx={{ color: 'background.default', textDecoration: 'none', '&:hover': { color: 'primary.light' } }}>
                                            Services
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography component={Link} to="/contact" variant="body2" sx={{ color: 'background.default', textDecoration: 'none', '&:hover': { color: 'primary.light' } }}>
                                            Contact
                                        </Typography>
                                    </li>
                                </Box>
                            </Grid>

                            <Grid item xs={6} md={8}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                    Contact Info
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'background.default', mb: 1 }}>
                                    hello@voltride.in
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'background.default', mb: 1 }}>
                                    +91-7354931816
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'background.default' }}>
                                    Chandigarh, India
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: 1, borderColor: 'secondary.light', mt: 6, pt: 3, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'background.default' }}>
                        © {new Date().getFullYear()} Volt Ride. All rights reserved. | Terms of Use | Privacy Policy
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer; 