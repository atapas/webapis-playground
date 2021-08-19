import '../styles/globals.css';
import { Header, MetaTags } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaTags />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
