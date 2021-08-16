import Head from 'next/head'

import { App } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web API Playground</title>
        <meta name="description" content="Demonstration of Web APIs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />

    </div>
  )
}
