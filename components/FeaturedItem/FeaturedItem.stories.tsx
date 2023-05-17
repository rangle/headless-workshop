import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FeaturedItem } from './FeaturedItem'

export default {
  title: 'Components/FeaturedItem',
  component: FeaturedItem,
} as ComponentMeta<typeof FeaturedItem>

const Template: ComponentStory<typeof FeaturedItem> = (
  args: ComponentProps<typeof FeaturedItem>
) => (
  <div className="grid grid-cols-1 gap-y-8 px-5 pb-14 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
    <FeaturedItem {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
}
