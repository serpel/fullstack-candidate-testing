import Head from 'next/head'
import { createContext } from 'react';
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  return ( 
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </>
  )
}

export default MyApp
