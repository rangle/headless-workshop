import 'styles/index.css'
import { mono, sans, serif } from '../styles/font'
import { AppProps } from 'next/app'
import { PreviewBanner } from 'components/preview/PreviewBanner'

export default function App({ Component, pageProps }: AppProps) {
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
      {pageProps?.preview && <PreviewBanner />}
      <Component {...pageProps} />
    </>
  )
}
