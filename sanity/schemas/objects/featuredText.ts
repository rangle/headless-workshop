import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'FeaturedText',
  title: 'Featured Text',
  type: 'object',
  fields: [
    defineField({
      type: 'boolean',
      name: 'isDark',
      title: 'Is Dark?',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
      validation: (rule) => rule.required(),
    }),
  ],
})
