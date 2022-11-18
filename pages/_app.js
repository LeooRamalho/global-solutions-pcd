import '../styles/globals.css'
import "../styles/scss/global.scss"
import Head from 'next/head'
import Layout from "./components/Layout/"
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale = 1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp