import React from 'react';
import { ThemeProvider } from 'emotion-theming';
// import preset from "@rebass/preset";
import Container from "./container";
import Footer from "./footer";
import Content from "./content";

let theme = {
    breakpoints: ['40em', '52em', '64em'],
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
    colors: {
        blue: '#07c',
        lightgray: '#f6f6ff',
        ffyellow: '#F5C02F',
        lightyellow: '#F5C848',
        neongreen: '#5ff574',
        deepblue: '#2F5BF5',
        neonpink: '#F53B6A'
    },
    space: [
        0, 4, 8, 16, 32, 64, 128, 256
    ],
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)'
    },
    variants: {
    },
    text: {
    },
    buttons: {
        primary: {
            color: 'black',
            backgroundColor: 'ffyellow'
        }
    }
}

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Content>
                    {children}
                    <Footer />
                </Content>
            </Container>
        </ThemeProvider>
    )
}

export default Layout;