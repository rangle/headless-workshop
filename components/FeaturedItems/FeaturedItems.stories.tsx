import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FeaturedItems } from './FeaturedItems'

export default {
  title: 'Modules/FeaturedItems',
  component: FeaturedItems,
} as ComponentMeta<typeof FeaturedItems>

const Template: ComponentStory<typeof FeaturedItems> = (
  args: ComponentProps<typeof FeaturedItems>
) => <FeaturedItems {...args} />

const featuredItem = (enableImage: boolean = true, enableBody = true) => [
  {
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    body: enableBody
      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      : '',
  },
  {
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    body: enableBody
      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      : '',
  },
  {
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    body: enableBody
      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      : '',
  },
]

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  blocks: featuredItem(),
}

export const Minimal = Template.bind({})
Minimal.args = {
  heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  blocks: featuredItem(false, false),
}
