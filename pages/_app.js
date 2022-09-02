import Head from 'next/head';
import '../styles/globals.css';
import { Provider } from "react-redux";
import { store } from '../redux-toolkit/store'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>Breaking Bad World</title>
        <meta name="description" content="Explore the 'Breaking Bad' world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
