import '../styles/globals.css';

import React from 'react';
import { AppProps } from 'next/app';

import Head from 'next/head';
import SEO from '@bradgarropy/next-seo';
import NextNProgress from 'nextjs-progressbar';

import { Header, Layout } from 'components';
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
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="theme-color" content="#317EFB" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>

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

      <NextNProgress height={3} color="#fff" options={{ showSpinner: false }} />
      <Header />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}

export default MyApp;
