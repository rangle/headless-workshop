import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CtaBanner } from './CtaBanner'

export default {
  title: 'Modules/CtaBanner',
  component: CtaBanner,
} as ComponentMeta<typeof CtaBanner>

const Template: ComponentStory<typeof CtaBanner> = (
  args: ComponentProps<typeof CtaBanner>
) => <CtaBanner {...args} />

export const AllOptions = Template.bind({})
AllOptions.args = {
  heading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image:
    'https://cdn.sanity.io/images/bhgv5hzu/production/ad273226e0d173fffa63471e379db10ad22b11f1-6000x4000.jpg',
  cta: {
    url: '/',
    text: 'Learn more',
  },
}

export const Minimal = Template.bind({})
Minimal.args = {
  heading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  cta: {
    url: '/',
    text: 'Learn more',
  },
}
