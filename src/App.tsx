import React from 'react';
import bo from './bo.png';
import { Box, Flex, Image, Text, keyframes, usePrefersReducedMotion, HStack } from '@chakra-ui/react';
import { GitHub, Linkedin, Mail } from 'react-feather';
import IconLink from './IconLink';

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
        <>
            <Box textAlign="center">
                <Flex
                    bg="gray.800"
                    color="white"
                    minH="100vh"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="calc(10px + 2vmin)"
                >
                    <Image
                        src={bo}
                        animation={animation}
                        height="40vmin"
                        pointerEvents="none"
                        borderRadius="100%"
                        alt="me"
                    />
                    <Text mt={5}>Bo Aanes</Text>
                    <HStack>
                        <IconLink href="https://github.com/boaanes" icon={<GitHub />} />
                        <IconLink href="https://www.linkedin.com/in/bo-aanes-946566182/" icon={<Linkedin />} />
                        <IconLink href="mailto:boaanes@gmail.com" icon={<Mail />} />
                    </HStack>
                </Flex>
            </Box>
        </>
    );
};

export default App;
