import React from 'react';
import {Text, Flex, Box, Button} from 'rebass'
import {Link} from "react-router-dom";
import {Input, Label} from "@rebass/forms";

const Splash = () => (
    <Flex
        flexDirection='column'
        alignContent='center'
        alignItems='center'
        justifyContent='center'>
        <Text fontSize={[3, 4]}>Finding your best match... fast!</Text>
        <Box
            as='form'
            my={2}
        >
            <Flex
                flexDirection='column'
                alignContent='center'
                alignItems='center'
                justifyContent='center'>
                <Box px={2} py={1}>
                    <Label htmlFor='username'>Username</Label>
                    <Input
                        id='username'
                        name='username'
                        defaultValue='GoodFriend'
                    />
                </Box>
                <Box px={2} py={1}>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        id='password'
                        name='password'
                        type='password'
                        defaultValue='****'
                    />
                </Box>
                <Link to='/quiz'>
                    <Button>
                        Log In
                    </Button>
                </Link>
                {/*<Link to='/signup'>Sign Up</Link>*/}
            </Flex>
        </Box>
    </Flex>
);

export default Splash;
