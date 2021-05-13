import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body: 'Nunito',
    },
    styles: {
        global: ({ colorMode }) => ({
            body: {
                color: 'white',
                bg: 'gray.800',
            },
        }),
    },
    config,
});

export default theme;
