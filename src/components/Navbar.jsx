import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/volt-ride-logo.png';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box component={Link} to="/" sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={logo} alt="Volt Ride Logo" style={{ height: '50px', width: 'auto' }} />
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', mb: { xs: '64px', md: '80px' } }}>
            <AppBar component="nav" sx={{ height: { xs: '64px', md: '80px' }, justifyContent: 'center' }}>
                <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 'xl', mx: 'auto', width: '100%' }}>
                    {/* Logo */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Volt Ride Logo" style={{ height: '60px', width: 'auto' }} />
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {navItems.map((item) => (
                            <Button key={item.name} component={Link} to={item.path} sx={{ color: 'inherit' }}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Navigation */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default Navbar; 