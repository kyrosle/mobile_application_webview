import Layout from '@/components/layout'
import { AppProps } from 'next/app'
import HomePage from './home'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>

  )
}
