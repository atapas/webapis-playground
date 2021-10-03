import { Flex, HStack, IconButton, useColorMode } from '@chakra-ui/react';

import { FiMoon, FiSun, FiTwitter, FiGithub } from 'react-icons/fi';
import { FaBolt } from 'react-icons/fa';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLightMode = colorMode === 'light';

  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      width="full"
      zIndex="4"
      justify="center"
      backgroundColor={isLightMode ? 'white' : 'gray.800'}
      borderBottomWidth="1px"
      borderBottomStyle="solid"
    >
      <Flex
        py="3"
        px="4"
        width="full"
        maxWidth="1600px"
        align="center"
        justify="space-between"
      >
        <FaBolt />

        <HStack align="center">
          <IconButton
            as="a"
            href="https://github.com/atapas/webapis-playground"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Source code"
            icon={<FiGithub />}
            variant="ghost"
            color="gray.500"
          />

          <IconButton
            as="a"
            href="https://twitter.com/intent/tweet?text=Check%20this%20amazing%20Web%20APIs%20demo%20https://webapis-playground.vercel.app/,%20created%20by%20@tapasadhikary%20@MaxProgramming1%0A%0A%23DEVCommunity%20%23100DaysOfCode"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Share on twitter"
            icon={<FiTwitter />}
            variant="ghost"
            color="gray.500"
          />

          <IconButton
            icon={isLightMode ? <FiMoon /> : <FiSun />}
            aria-label={
              isLightMode ? 'Switch to dark mode' : 'Switch to light mode'
            }
            variant="ghost"
            color="gray.500"
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Header;
