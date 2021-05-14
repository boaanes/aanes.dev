import React from 'react';
import { Link, useBreakpointValue } from '@chakra-ui/react';

const IconLink = ({ href, icon }: { href: string; icon: JSX.Element }): JSX.Element => {
    const iconSize = useBreakpointValue([48, 36, 24]);

    return (
        <Link
            _hover={{ cursors: 'pointer', bg: 'gray.600' }}
            transition="0.1s ease-out"
            bg="gray.700"
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
