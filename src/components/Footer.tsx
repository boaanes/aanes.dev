import { Box, Center, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';

const Footer = (): JSX.Element => (
    <Box w="100%" bottom={0} pos="absolute">
        <Center>
            <Text>©{format(new Date(), 'yyyy')} | Bo Aanes</Text>
        </Center>
    </Box>
);

export default Footer;
