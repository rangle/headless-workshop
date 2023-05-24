import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Cta } from './Cta'

export default {
  title: 'Components/Cta',
  component: Cta,
} as ComponentMeta<typeof Cta>

const Template: ComponentStory<typeof Cta> = (
  args: ComponentProps<typeof Cta>
) => <Cta {...args} />

export const Primary = Template.bind({})
Primary.args = {
  url: '/',
  text: 'Learn more',
  hasPrimaryCta: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  url: '/',
  text: 'Who we are',
  hasPrimaryCta: false,
}

export const SecondaryExternal = Template.bind({})
SecondaryExternal.args = {
  url: 'https://rangle.io',
  text: 'Read more',
  hasPrimaryCta: false,
}
