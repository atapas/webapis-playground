import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      width="full"
      maxWidth="1600px"
      minHeight="100%"
      px="4"
      py="128px"
      margin="auto"
    >
      {children}
    </Flex>
  );
}

export default Layout;
