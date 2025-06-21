import { createTheme } from '@mui/material/styles';

// This theme is designed to be easily configurable.
// You can change the primary, secondary, and accent colors here.
const palette = {
    primary: {
        main: '#1E8449', // A strong, confident green
        light: '#2ECC71',
        dark: '#145A32',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#212121', // A very dark grey, near-black
        light: '#424242',
        dark: '#000000',
        contrastText: '#FFFFFF',
    },
    background: {
        default: '#F5F5F5', // A very light, clean grey
        paper: '#FFFFFF',   // White for cards and paper elements
    },
    text: {
        primary: '#212121',
        secondary: '#757575',
    },
    error: {
        main: '#D32F2F',
    },
};

const theme = createTheme({
    palette,
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '10px 20px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.07)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    width: '100%',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: palette.background.paper,
                    color: palette.text.primary,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }
            }
        }
    },
});

export default theme; 