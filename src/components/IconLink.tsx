import React from 'react';
import { Link, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';

const IconLink = ({ href, icon }: { href: string; icon: JSX.Element }): JSX.Element => {
    const iconSize = useBreakpointValue([48, 36, 24]);
    const bg = useColorModeValue('gray.300', 'gray.700');
    const color = useColorModeValue('gray.700', 'gray.300');
    const hoverBg = useColorModeValue('gray.400', 'gray.600');

    return (
        <Link
            _hover={{ cursors: 'pointer', bg: hoverBg }}
            transition="0.1s ease-out"
            bg={bg}
            color={color}
            p={2.5}
            borderRadius="25%"
            boxShadow="md"
            href={href}
            isExternal
        >
            {React.cloneElement(icon, { size: iconSize })}
        </Link>
    );
};

export default IconLink;
