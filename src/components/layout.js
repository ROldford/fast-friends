import React from 'react';
import { ThemeProvider } from '@emotion/react';
import preset from '@rebass/preset';
import Container from "./container";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={preset}>
            <Container>
                {children}
                <Footer />
            </Container>
        </ThemeProvider>
    )
}

export default Layout;