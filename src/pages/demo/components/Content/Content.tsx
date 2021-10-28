import { ReactNode } from 'react';
import { Demo } from 'types/demo';

export interface ContentProps {
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

function Content({ title, description, meta, children }: ContentProps) {
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
          tw-mb-12
        "
      >
        {description}
      </p>
      {children}
    </div>
  );
}

export default Content;
