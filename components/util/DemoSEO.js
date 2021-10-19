import SEO from '@bradgarropy/next-seo';

const DemoSEO = ({ title, description }) => {
  return (
    <div>
      <meta
        name="image"
        property="og:image"
        content="https://webapis-playground.vercel.app/readme/og.png"
      />
      <SEO title={title} description={description} />
    </div>
  );
};

export default DemoSEO;
