import React from 'react';
import { Box, Container, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="footer" className="bg-gray-200 py-6 mt-auto">
            <Container maxWidth="lg">
                <Typography variant="body1" align="center" className={isMobile ? "text-sm mb-2" : "mb-4"}>
                    © 2024 Mi Tienda. Todos los derechos reservados.
                </Typography>
                <Box className="flex justify-center">
                    <IconButton aria-label="Facebook" className={isMobile ? "mx-1" : "mx-2"}>
                        <Facebook fontSize={isMobile ? "small" : "medium"} />
                    </IconButton>
                    <IconButton aria-label="Twitter" className={isMobile ? "mx-1" : "mx-2"}>
                        <Twitter fontSize={isMobile ? "small" : "medium"} />
                    </IconButton>
                    <IconButton aria-label="Instagram" className={isMobile ? "mx-1" : "mx-2"}>
                        <Instagram fontSize={isMobile ? "small" : "medium"} />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;