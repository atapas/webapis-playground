import { ReactNode } from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const paddingY = useBreakpointValue({
    sm: '96px',
    lg: '128px',
  });

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      width="full"
      maxWidth="1600px"
      minHeight="100%"
      px="4"
      paddingTop="28"
      paddingBottom="16"
      margin="auto"
    >
      {children}
    </Flex>
  );
}

export default Layout;
