import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
};

const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body: 'Nunito',
    },
    styles: {
        global: ({ colorMode }) => ({
            body: {
                color: colorMode === 'light' ? 'black' : 'white',
                bg: colorMode === 'light' ? 'white' : 'gray.800',
            },
        }),
    },
    config,
});

export default theme;
