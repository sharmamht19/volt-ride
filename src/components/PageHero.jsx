import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-background-scooter.png';

const PageHero = ({ title, subtitle }) => {
    return (
        <Box
            sx={{
                color: 'white',
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
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
                    opacity: 0.2,
                    filter: 'blur(0px)',
                    transform: 'scale(1.1)',
                    zIndex: 0,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.6) 30%, rgba(20, 90, 50, 0.5) 90%)',
                    zIndex: 1,
                },
                '& > *': {
                    position: 'relative',
                    zIndex: 2,
                },
            }}
        >
            <Container maxWidth="md">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>
                            {subtitle}
                        </Typography>
                    )}
                </motion.div>
            </Container>
        </Box>
    );
};

export default PageHero; 