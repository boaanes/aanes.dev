import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = (): JSX.Element => (
    <Box w="100%" bottom={0} pos="absolute">
        <Center>
            <Text>©2021 | Bo Aanes</Text>
        </Center>
    </Box>
);

export default Footer;
