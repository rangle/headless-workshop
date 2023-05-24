import 'styles/index.css'

import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { mono, sans, serif } from '../styles/font'

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter()
  const isSanityStudio = route.startsWith('/studio')
  const navigation = pageProps?.global?.navigation
  const footer = pageProps?.global?.footer

  return (
    <>
      {!isSanityStudio && (
        <Head>
          <title>{pageProps?.page?.title}</title>
        </Head>
      )}

      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style>
      {!isSanityStudio && <Navigation menu={navigation?.menu} />}
      {pageProps?.preview && <PreviewBanner />}
      <Component {...pageProps} />
      {!isSanityStudio && <Footer {...footer} />}
    </>
  )
}
