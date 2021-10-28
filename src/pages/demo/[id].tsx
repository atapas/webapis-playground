import React from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import SEO from '@bradgarropy/next-seo';

import { getDemoById } from 'services/demo';
import { Demo } from 'types/demo';

import { Author } from './components/Author';
import { Content } from './components/Content';

function DemoPage() {
  let router = useRouter();
  let id = router.query.id as string;

  let [demo, setdemo] = React.useState<Demo | undefined>(getDemoById(id));

  React.useEffect(() => {
    setdemo(getDemoById(id));
  }, [id]);

  let Component = dynamic(() => import(`../../modules/demos/${id}`), {
    ssr: false,
  });

  if (!demo?.meta) {
    return null;
  }

  return (
    <article>
      <SEO
        title={`Web APIs Playground - ${demo?.title}`}
        description={demo?.description}
        icon={demo?.emoji}
      />

      <div
        className="
          tw-w-full
          tw-grid
          tw-grid-cols-12
          tw-gap-4
        "
      >
        <div className="tw-col-span-4">
          <Author meta={demo?.meta} />
        </div>

        <div className="tw-col-span-8">
          <Content title={demo?.title} description={demo?.description}>
            <Component />
          </Content>
        </div>
      </div>
    </article>
  );
}

export default DemoPage;
