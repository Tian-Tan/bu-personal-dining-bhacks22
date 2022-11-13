import type { AppProps } from 'next/app'
import { SSRProvider } from 'react-bootstrap'
import Layout from '../components/Layout'


// Main App
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout> 
        <Component {...pageProps} /> 
      </Layout>
    </SSRProvider>
  )
}
