import getConfig from 'next/config'
import Head from 'next/head'
import Nav from './nav'

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
        <div className="bg-gray-200 rounded-md mb-6 p-6 pt-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 text-center mb-6 md:mb-0">
              <h6 className="uppercase">October 19-20&nbsp;&nbsp;2019</h6>
              <h6 className="uppercase">San Jose, California</h6>
            </div>
            <div className="col-span-2 text-center md:text-right">
              <div className="flex justify-center md:justify-end">
                <img
                  src={`${publicRuntimeConfig.rootFolder}/SVCClogo.png`}
                  alt="SVCClogo"
                />
              </div>
              <h2>Silicon Valley Code Camp 2019</h2>
            </div>
          </div>
        </div>
        <Nav />
      </header>
      <main>{children}</main>
      <div className="bg-gray-200 rounded-md mt-6 p-6 pt-12 pb-12">
        <b>Silicon Valley Code Camp 2019</b> &nbsp;is in San Jose, California.
        Join us for our 14th annual weekend event&nbsp;
        <b>October 19-20, 2019</b>
      </div>
    </div>
  )
}
