import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-gray-600">
        <div className="m-6">
          <p>
            Silicon Valley Code Camp is a two-day technical conference in
            Silicon Valley where developers learn from developers focusing on
            open source, the latest enterprise-focused technologies, software
            branding, legal issues around software as well as other topics
            developers are interested in hearing about such as career building
            and more. topics developers are interested in hearing about.
          </p>
        </div>
      </section>
    </Layout>
  )
}
