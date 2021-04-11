import React from 'react';
import { Flex, Box } from 'rebass';

const Container = props => (
    <Flex
        alignItems='center'
        justifyContent='center'
        p={2}
    >
        <Box
            {...props}
            mx="auto"
            p={2}
            css={{
                maxWidth: '1024px',
                minWidth: '320px',
            }}
        />
    </Flex>

);

export default Container;
