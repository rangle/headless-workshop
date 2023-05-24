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
  image:
    'https://cdn.sanity.io/images/bhgv5hzu/production/0dd394b89a262d96cfe4dfa2b05be4bc93225ed1-3374x3374.jpg',
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
  image:
    'https://cdn.sanity.io/images/bhgv5hzu/production/0dd394b89a262d96cfe4dfa2b05be4bc93225ed1-3374x3374.jpg',
  imageAlt: 'plants',
  cta: {
    url: '/',
    text: 'Learn more',
    isEnabled: true,
  },
}
