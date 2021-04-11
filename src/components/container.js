import React from 'react';
import { Box } from 'rebass';

const Container = props => (
    <Box
        {...props}
        mx="auto"
        p={2}
        css={{
            maxWidth: '1024px',
            minWidth: '320px',
        }}
    />
);

export default Container;
