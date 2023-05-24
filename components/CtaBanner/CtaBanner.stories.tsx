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
  image: {
    _type: 'image',
    asset: {
      _ref: 'image-df779a75311428c758ae465788c29456bbb0ba04-6000x4000-jpg',
      _type: 'reference',
    },
  },
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
