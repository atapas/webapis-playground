import React, { ChangeEvent } from 'react';

import { Card } from 'components';

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
    <React.Fragment>
      {Boolean(demos.length) ? (
        <div
          className="
            tw-w-full
            tw-max-w-container
            tw-m-auto

            tw-grid
            tw-grid-cols-1
            tw-gap-4
            
            md:tw-grid-cols-2
            lg:tw-grid-cols-5
          "
        >
          {demos.map((demo, index) => (
            <Card data={demo} key={index} />
          ))}
        </div>
      ) : (
        <div className="not-found">{NOT_FOUND_TEXT}</div>
      )}
    </React.Fragment>
  );
}
