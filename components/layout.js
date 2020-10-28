import getConfig from 'next/config'
import Head from 'next/head'
import Nav from './nav'
import Header from './header'
import Footer from './footer'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export const siteTitle = 'Speakers App'

export default function Layout({ children }) {
  return (
    <div className="mx-4 my-3">
      <Head>
        <link
          rel="icon"
          href={`${publicRuntimeConfig.rootFolder}/favicon.ico`}
        />
        <meta name="description" content="Speakers app website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Header />
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
