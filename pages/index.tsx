import React, { ChangeEvent } from 'react';
import { SimpleGrid, VStack } from '@chakra-ui/react';

import { Search, Card } from 'components';

import { getAllDemos } from 'utils/data/data-access';

const NOT_FOUND_TEXT = 'No matched demo found';

export default function Home() {
  const [demos, setDemos] = React.useState(getAllDemos());

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerSearchText = event.target.value.toLowerCase();

    let searchedDemos = getAllDemos();

    if (event.target.value) {
      searchedDemos = searchedDemos.filter((demo: any) =>
        demo.title?.toLowerCase().includes(lowerSearchText)
      );
    }

    setDemos(searchedDemos as any);
  };

  return (
    <VStack spacing="8">
      <Search onSearch={handleSearch} />

      {demos.length > 0 ? (
        <SimpleGrid
          columns={{
            sm: 1,
            md: 3,
            lg: 4,
          }}
          spacing={4}
        >
          {demos.map((demo, index) => (
            <Card data={demo} key={index} />
          ))}
        </SimpleGrid>
      ) : (
        <div className="not-found">{NOT_FOUND_TEXT}</div>
      )}
    </VStack>
  );
}
