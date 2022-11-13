import { info } from 'console'
import type { AppProps } from 'next/app'
import { Card, SSRProvider } from 'react-bootstrap'
import Layout from '../components/Layout'
import "../styles/global.style.css"


// Main App
export default function App({ Component, pageProps }: AppProps) {
  return (
      <SSRProvider>
          <Card className='card'>
            <Layout> 
              <Component {...pageProps} /> 
            </Layout>
          </Card>
      </SSRProvider>
  )
}
