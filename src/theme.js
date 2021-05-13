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
    config,
});

export default theme;
