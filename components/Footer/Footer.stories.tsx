import React, { ComponentProps } from 'react'

import { Footer } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args: ComponentProps<typeof Footer>) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  copyright: '© Pangea, 2023.  All rights reserved.',
  privacyPolicy: {
    label: 'Privacy Policy',
    url: '/',
  },
  socialLinks: [
    {
      label: 'Twitter',
      url: 'https://twitter.com/home?lang=en',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/',
    },
  ],
}
