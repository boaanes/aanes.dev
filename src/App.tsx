import React from 'react';
import bo from './bo.png';
import { Box, ChakraProvider, Flex, Image, Text, keyframes, usePrefersReducedMotion, Link } from '@chakra-ui/react';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const App = (): JSX.Element => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const animation = prefersReducedMotion ? undefined : `${spin} infinite 20s linear`;

    return (
        <ChakraProvider>
            <Box textAlign="center">
                <Flex
                    bg="#282c34"
                    minH="100vh"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="calc(10px + 2vmin)"
                    color="white"
                >
                    <Image
                        src={bo}
                        animation={animation}
                        height="40vmin"
                        pointerEvents="none"
                        borderRadius="100%"
                        alt="me"
                    />
                    <Text mt={5}>aanes.dev</Text>
                    <Link href="https://github.com/boaanes" color="#61dafb" isExternal>
                        GitHub
                    </Link>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};

export default App;
