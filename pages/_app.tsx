import 'styles/index.css'

import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { AppProps } from 'next/app'

import { mono, sans, serif } from '../styles/font'

export default function App({ Component, pageProps }: AppProps) {
  const navigation = pageProps?.global?.navigation
  const footer = pageProps?.global?.footer

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style>
      <Navigation menu={navigation?.menuLinks} />
      {pageProps?.preview && <PreviewBanner />}
      <Component {...pageProps} />
      <Footer {...footer} />
    </>
  )
}
