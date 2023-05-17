import React from 'react'
import * as NextImage from 'next/image'
import type { Preview } from '@storybook/react'
import { mono, sans, serif } from '../styles/font'
import '../styles/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
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
        <Story />
      </>
    ),
  ],
}

// Workaround to allowing Nextjs image to render properly
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    React.createElement(OriginalNextImage, { ...props, unoptimized: true }),
})

export default preview
