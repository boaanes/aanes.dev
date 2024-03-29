import React from 'react';
import bo from '../assets/1747.png';
import { Box, Flex, Image, Text, keyframes, usePrefersReducedMotion, HStack } from '@chakra-ui/react';
import { GitHub, Linkedin, Mail } from 'react-feather';
import IconLink from './IconLink';
import Footer from './Footer';
import ColorModeButton from './ColorModeButton';

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
            <Box pos="relative" minHeight="100vh">
                <ColorModeButton />
                <Flex pt="20vh" flexDir="column" alignItems="center" justifyContent="center" textAlign="center">
                    <Box borderRadius="100%" boxShadow="md">
                        <Image
                            src={bo}
                            animation={animation}
                            height={['60vmin', '50vmin', '40vmin']}
                            pointerEvents="none"
                            borderRadius="100%"
                            alt="me"
                        />
                    </Box>
                    <Text fontSize="3xl" mt={5}>
                        Bo Aanes
                    </Text>
                    <HStack>
                        <IconLink href="https://github.com/boaanes" icon={<GitHub />} />
                        <IconLink href="https://www.linkedin.com/in/bo-aanes-946566182/" icon={<Linkedin />} />
                        <IconLink href="mailto:boaanes@gmail.com" icon={<Mail />} />
                    </HStack>
                </Flex>
                <Footer />
            </Box>
        </>
    );
};

export default App;
