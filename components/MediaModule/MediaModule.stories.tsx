import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MediaModule } from './MediaModule'

export default {
  title: 'Modules/MediaModule',
  component: MediaModule,
} as ComponentMeta<typeof MediaModule>

const Template: ComponentStory<typeof MediaModule> = (
  args: ComponentProps<typeof MediaModule>
) => <MediaModule {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isDark: false,
  heading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  image: {
    _type: 'image',
    asset: {
      _ref: 'image-df779a75311428c758ae465788c29456bbb0ba04-6000x4000-jpg',
      _type: 'reference',
    },
  },
  imageAlt: 'plants',
  imageOnRight: true,
  cta: {
    url: '/',
    text: 'Learn more',
    isEnabled: true,
  },
}

export const Dark = Template.bind({})
Dark.args = {
  isDark: true,
  heading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  image: {
    _type: 'image',
    asset: {
      _ref: 'image-df779a75311428c758ae465788c29456bbb0ba04-6000x4000-jpg',
      _type: 'reference',
    },
  },
  imageAlt: 'plants',
  cta: {
    url: '/',
    text: 'Learn more',
    isEnabled: true,
  },
}
