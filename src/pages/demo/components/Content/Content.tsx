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
          tw-prose-sm
          md:tw-prose-lg
          lg:tw-prose-lg
          xl:tw-prose-2xl
          tw-mb-6
        "
      >
        {description}
      </p>
      <div className="tw-flow-root">
        <div
          className="
            tw--m-1
            tw-flex
            tw-flex-wrap
          "
        >
          <Tag
            as="a"
            href={`https://github.com/atapas/webapis-playground/blob/master/src/modules/apis/${id}/index.ts`}
            rel="noopener noreferrer"
            target="_blank"
            leftIcon={<FaGithubAlt />}
            className="tw-m-1 tw-bg-gray-900 hover:tw-bg-gray-800"
          >
            Source code
          </Tag>
          <Tag
            as="a"
            href={meta?.apiDocURL}
            rel="noopener noreferrer"
            target="_blank"
            leftIcon={<FaBook />}
            className="tw-m-1"
          >
            Documentation
          </Tag>
          <Tag
            as="a"
            href={meta?.canIUseURL}
            rel="noopener noreferrer"
            target="_blank"
            leftIcon={<FaLifeRing />}
            className="tw-m-1"
          >
            Support
          </Tag>
        </div>
      </div>

      <span
        className="
          tw-block
          tw-text-1xl lg:tw-text-2xl
          tw-font-semibold
          tw-mt-8 lg:tw-mt-16
          tw-mb-8
        "
      >
        Live preview
      </span>
      {children}
    </React.Fragment>
  );
}

export default Content;
