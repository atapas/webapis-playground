import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section
      className="
        tw-w-full
        tw-max-w-container
        tw-min-h-full
        tw-m-auto
        tw-px-4
        tw-py-24 lg:tw-py-32
      "
    >
      {children}
    </section>
  );
}

export default Layout;
