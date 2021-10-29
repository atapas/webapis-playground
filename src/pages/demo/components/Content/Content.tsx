import React, { ReactNode } from 'react';
import { Demo } from 'types/demo';

import { FaGithubAlt, FaBook, FaLifeRing } from 'react-icons/fa';

import { Tag } from 'components/Tag';

export interface ContentProps {
  /**
   * The `demo` id
   */
  id: Demo['id'];

  /**
   * The `demo` title
   */
  title: Demo['title'];

  /**
   * The `demo` description
   */
  description: Demo['description'];

  /**
   * The `demo` metadata info
   */
  meta?: Pick<Demo['meta'], 'apiDocURL' | 'canIUseURL'>;

  /**
   * Render demo
   */
  children: ReactNode;
}

function Content({ id, title, description, meta, children }: ContentProps) {
  return (
    <React.Fragment>
      <h1
        className="
          tw-text-2xl lg:tw-text-4xl
          tw-font-bold
          tw-mb-2 lg:tw-mb-4
        "
      >
        {title}
      </h1>
      <p
        className="
          tw-prose
          tw-prose-sm sm:tw-prose
          lg:tw-prose-lg
          xl:tw-prose-xl
          tw-mb-6
        "
      >
        {description}
      </p>
      <div
        className="
          tw-grid
          tw-gap-2
          tw-grid-cols-2
          lg:tw-flex
        "
      >
        <Tag
          as="a"
          href={`https://github.com/atapas/webapis-playground/blob/master/src/modules/apis/${id}/index.ts`}
          rel="noopener noreferrer"
          target="_blank"
          leftIcon={<FaGithubAlt />}
          className="tw-bg-black"
        >
          Source code
        </Tag>
        <Tag
          as="a"
          href={meta?.apiDocURL}
          rel="noopener noreferrer"
          target="_blank"
          leftIcon={<FaBook />}
        >
          Documentation
        </Tag>
        <Tag
          as="a"
          href={meta?.canIUseURL}
          rel="noopener noreferrer"
          target="_blank"
          leftIcon={<FaLifeRing />}
        >
          Support
        </Tag>
      </div>
      <div className="tw-mt-24">{children}</div>
    </React.Fragment>
  );
}

export default Content;
