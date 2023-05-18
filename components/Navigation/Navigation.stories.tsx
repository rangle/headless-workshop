import React, { ComponentProps } from 'react'

import { Navigation } from './Navigation'

export default {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args: ComponentProps<typeof Navigation>) => {
  return (
    <>
      <Navigation {...args} />
      <div className="bg-primary-50 ">
        <div className="container mx-auto h-[50vh] px-5 pt-[10vh]">
          Hero content starts here
        </div>
      </div>
      <div className="bg-primary-200">
        <div className="container mx-auto h-[50vh] px-5">Section 1</div>
      </div>
      <div className="bg-primary-500">
        <div className="container mx-auto h-[50vh] px-5">Section 2</div>
      </div>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  // image:,
  // imageAlt:,
  menu: [
    {
      label: 'Home',
      hasPrimaryCta: false,
      url: '/',
    },
    {
      label: 'Services',
      url: '/services',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
}
