import React from 'react';
import {Flex, Text} from 'rebass';

const Header = () => (
    <Flex
        width={1}
        alignItems='center'
        alignContent='center'
        justifyContent='center'
    >
        <Text fontSize={[6, 7]} flex='1 0 auto' width={[1]}>Fast Friends</Text>
    </Flex>
);

export default Header;