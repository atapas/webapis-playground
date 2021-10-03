import Link from 'next/link';

import { Box, Heading, Text, Button, useColorMode } from '@chakra-ui/react';

import { FaBolt } from 'react-icons/fa';

/**
 *
 * NOTE:
 * I will add the types soon
 */
export interface CardProps {
  data: any;
}

function Card({ data }: CardProps) {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Box
      as="article"
      px="6"
      py="6"
      textAlign="center"
      borderStyle="solid"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={isLightMode ? 'gray.200' : 'gray.600'}
      backgroundColor={isLightMode ? 'white' : 'gray.700'}
    >
      <Heading as="div" marginBottom="4">
        {data.emoji}
      </Heading>
      <Heading as="h1" size="md" mb="2">
        {data.title}
      </Heading>

      <Text
        fontSize="sm"
        color={isLightMode ? 'gray.600' : 'gray.200'}
        noOfLines={3}
        dangerouslySetInnerHTML={{ __html: data.desc }}
      />
      <Box height="8" />

      <Link href={`/demos/${data.path}`} passHref>
        <Button leftIcon={<FaBolt />} colorScheme="blue" as="a">
          Try it
        </Button>
      </Link>
    </Box>
  );
}

export default Card;
