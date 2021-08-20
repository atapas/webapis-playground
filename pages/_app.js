import '../styles/globals.css';
import { Header } from '../components';
import SEO from '@bradgarropy/next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
          image: '/readme/og.png',
          card: 'summary_large_image',
        }}
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
