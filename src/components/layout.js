import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '@rebass/preset';
import Container from "./container";
import Footer from "./footer";

// theme =

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                {children}
                <Footer />
            </Container>
        </ThemeProvider>
    )
}

export default Layout;