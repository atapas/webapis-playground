import '../styles/globals.css';

import React from 'react';
import { AppProps } from 'next/app';

import SEO from '@bradgarropy/next-seo';
import NextNProgress from 'nextjs-progressbar';

import { Header, Layout, GithubCodeLink } from '../components';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [favicon, setFavicon] = React.useState('/faviconLight.ico');
  const changeFavicon = () => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (!isDark.matches) return setFavicon('/faviconDark.ico');
    return setFavicon('/faviconLight.ico');
  };

  React.useEffect(() => {
    changeFavicon();
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', changeFavicon);
  }, []);

  const isDemoRoute = router.pathname && router.pathname.match(/demos/);
  const webApiPathname = isDemoRoute && router.pathname.split('/demos/')[1];

  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <NextNProgress height={3} color="#fff" options={{ showSpinner: false }} />

      <SEO
        title="Web APIs Playground - Create, Share, Learn JavaScript Web APIs"
        description="The Web APIs Playground is a project to showcase the JavaScript Web APIs with examples and demonstrations. Client-side JavaScript APIs provides wrapper functions for many low-level tasks."
        icon={favicon}
        keywords={[
          'javascript',
          'web apis',
          'drag and drop',
          'image capture',
          'full screen',
          'next.js',
        ]}
        twitter={{
          site: '@tapasadhikary',
          image: 'https://webapis-playground.vercel.app/readme/og.png',
          card: 'summary_large_image',
        }}
      />
      <Header />

      <Layout>
        <Component {...pageProps} />

        {isDemoRoute && (
          <GithubCodeLink
            url={`https://github.com/atapas/webapis-playground/blob/master/web-apis/${webApiPathname}/index.js`}
          />
        )}
      </Layout>
    </motion.div>
  );
}

export default MyApp;
