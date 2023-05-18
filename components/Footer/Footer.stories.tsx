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
  // image:,
  // imageAlt:,
  privacyPolicy: {
    label: 'Privacy Policy',
    url: '/',
  },
  copyright: '© Pangea, 2023.  All rights reserved. ',
  menu: [
    {
      label: 'Home',
      hasPrimaryCta: false,
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Services',
      url: '/services',
    },
  ],
  // copyright:
  socialIcons: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/home?lang=en',
      icon: {
        src: 'https://res.cloudinary.com/rangle/image/upload/v1645629090/rangle.io/sziiu85whspmgndswxhb.svg',
        alt: 'Sample',
      },
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/',
      icon: {
        src: 'https://res.cloudinary.com/rangle/image/upload/v1636551372/rangle.io/fpso5d9q4jb8mmm4rdkv.svg',
        alt: 'Sample',
      },
    },
  ],
}
