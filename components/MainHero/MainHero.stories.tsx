import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MainHero } from './MainHero'

export default {
  title: 'Modules/MainHero',
  component: MainHero,
} as ComponentMeta<typeof MainHero>

const Template: ComponentStory<typeof MainHero> = (
  args: ComponentProps<typeof MainHero>
) => <MainHero {...args} />

export const AllOptions = Template.bind({})
AllOptions.args = {
  eyebrow: 'Mauris',
  heading: 'Donec ultricies tellus.',
  heroImage:
    'https://cdn.sanity.io/images/bhgv5hzu/production/df779a75311428c758ae465788c29456bbb0ba04-6000x4000.jpg',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh ligula, consequat nec fermentum sit amet, vehicula id dolor. Mauris fringilla mauris pulvinar, dignissim nibh nec, luctus mi.',
  cta: {
    url: '/',
    text: 'Learn more',
    isEnabled: true,
  },
  backgroundImage:
    'https://cdn.sanity.io/images/bhgv5hzu/production/9e1b9217544a6fc23980ff65ac89bbdbc031bf67-3000x2002.jpg',
}

export const NoBackgroundImage = Template.bind({})
NoBackgroundImage.args = {
  eyebrow: 'Mauris',
  heading: 'Donec ultricies tellus.',
  heroImage:
    'https://cdn.sanity.io/images/bhgv5hzu/production/df779a75311428c758ae465788c29456bbb0ba04-6000x4000.jpg',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh ligula, consequat nec fermentum sit amet, vehicula id dolor. Mauris fringilla mauris pulvinar, dignissim nibh nec, luctus mi.',
  cta: {
    url: '/',
    text: 'Learn more',
    isEnabled: true,
  },
}

export const NoEyebrowOrCta = Template.bind({})
NoEyebrowOrCta.args = {
  heading: 'Donec ultricies tellus.',
  heroImage:
    'https://cdn.sanity.io/images/bhgv5hzu/production/df779a75311428c758ae465788c29456bbb0ba04-6000x4000.jpg',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh ligula, consequat nec fermentum sit amet, vehicula id dolor. Mauris fringilla mauris pulvinar, dignissim nibh nec, luctus mi.',
}

export const Minimal = Template.bind({})
Minimal.args = {
  heading: 'Donec ultricies tellus.',
  heroImage:
    'https://cdn.sanity.io/images/bhgv5hzu/production/df779a75311428c758ae465788c29456bbb0ba04-6000x4000.jpg',
}
