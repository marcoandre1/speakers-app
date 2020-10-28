import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Speakers from '../components/speakers'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Speakers />
    </Layout>
  )
}
