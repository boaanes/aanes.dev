import { Box, HStack, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { Moon, Sun } from 'react-feather';

const ColorModeButton = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    const sunBg = useColorModeValue('yellow.500', 'yellow.200');
    const moonBg = useColorModeValue('blue.500', 'blue.200');

    return (
        <HStack pos="absolute" right={5} top={5}>
            <Box color={sunBg}>
                <Sun />
            </Box>
            <Switch
                size="lg"
                isChecked={colorMode === 'light' ? false : true}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    if (event.target.checked && colorMode === 'light') toggleColorMode();
                    else if (!event.target.checked && colorMode === 'dark') toggleColorMode();
                }}
            />
            <Box color={moonBg}>
                <Moon />
            </Box>
        </HStack>
        /*<Button color={iconBg} pos="absolute" right={5} top={5} onClick={toggleColorMode}>
            {colorMode === 'light' ? <Moon /> : <Sun />}
        </Button>*/
    );
};

export default ColorModeButton;
