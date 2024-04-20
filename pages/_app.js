import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Ian Sui - Full Stack Developer</title>
        <meta name="title" content="Ian Sui - Software Engineer" />
        <meta property="og:title" content="Ian Sui - Software Engineer" />
        <meta property="og:image" content="../images/i.png" />
        <link rel="icon" type="image/png" href="../images/i.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )  
}

export default MyApp
