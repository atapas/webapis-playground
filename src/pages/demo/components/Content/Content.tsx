import { ReactNode } from 'react';
import { Demo } from 'types/demo';

import { FiGithub } from 'react-icons/fi';

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
    <div>
      <h1
        className="
          tw-text-4xl
          tw-font-bold
          tw-mb-6
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
          tw-mb-4
        "
      >
        {description}
      </p>
      <div className="tw-space-x-2 tw-mb-12">
        <Tag
          as="a"
          href={`https://github.com/atapas/webapis-playground/blob/master/src/modules/apis/${id}/index.ts`}
          rel="noopener noreferrer"
          target="_blank"
          leftIcon={<FiGithub />}
        >
          Source code
        </Tag>
        <Tag
          as="a"
          href={meta?.apiDocURL}
          rel="noopener noreferrer"
          target="_blank"
        >
          Documentation
        </Tag>
        <Tag
          as="a"
          href={meta?.canIUseURL}
          rel="noopener noreferrer"
          target="_blank"
        >
          Support
        </Tag>
      </div>
      {children}
    </div>
  );
}

export default Content;
