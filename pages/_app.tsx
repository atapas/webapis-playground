import '../styles/globals.css';

import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import SEO from '@bradgarropy/next-seo';

import { GithubCodeLink } from '../components';
import { Header, Layout } from 'components';

function MyApp({ Component, pageProps, router }: AppProps) {
  const isDemoRoute = router.pathname && router.pathname.match(/demos/);
  const webApiPathname = isDemoRoute && router.pathname.split('/demos/')[1];

  return (
    <ChakraProvider>
      <SEO
        title="Web APIs Playground - Create, Share, Learn JavaScript Web APIs"
        description="The Web APIs Playground is a project to showcase the JavaScript Web APIs with examples and demonstrations. Client-side JavaScript APIs provides wrapper functions for many low-level tasks."
        icon="/favicon.ico"
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
      </Layout>

      {isDemoRoute && (
        <GithubCodeLink
          url={`https://github.com/atapas/webapis-playground/blob/master/web-apis/${webApiPathname}/index.js`}
        />
      )}
    </ChakraProvider>
  );
}

export default MyApp;
