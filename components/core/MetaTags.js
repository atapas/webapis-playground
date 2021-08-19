// head
import Head from 'next/head';

const MetaTags = () => {
  return (
    <Head>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#ebebeb" />

      <title>
        Web APIs Playground - Create, Share, Learn JavaScript Web APIs
      </title>
      <meta
        name="description"
        content="The Web APIs Playground is a project to showcase the JavaScript Web APIs with examples and demonstrations. Client-side JavaScript APIs provides wrapper functions for many low-level tasks."
      />
      <meta
        name="keywords"
        content="javascript, web apis, drag and drop, image capture, full screen, next.js"
      />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta
        name="title"
        content="Web APIs Playground - Create, Share, Learn JavaScript Web APIs"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://webapis-playground.vercel.app/"
      />
      <meta
        property="og:title"
        content="Web APIs Playground - Create, Share, Learn JavaScript Web APIs."
      />
      <meta
        property="og:description"
        content="The Web APIs Playground is a project to showcase the JavaScript Web APIs with examples and demonstrations. Client-side JavaScript APIs provides wrapper functions for many low-level tasks."
      />
      <meta
        property="og:image"
        content="https://webapis-playground.vercel.app/readme/og.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://webapis-playground.vercel.app/"
      />
      <meta
        property="twitter:title"
        content="Web APIs Playground - Create, Share, Learn JavaScript Web APIs."
      />
      <meta
        property="twitter:description"
        content="The Web APIs Playground is a project to showcase the JavaScript Web APIs with examples and demonstrations. Client-side JavaScript APIs provides wrapper functions for many low-level tasks."
      />
      <meta
        property="twitter:image"
        content="https://webapis-playground.vercel.app/readme/og.png"
      />
    </Head>
  );
};

export default MetaTags;
