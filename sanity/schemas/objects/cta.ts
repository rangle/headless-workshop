import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Cta',
  title: 'Cta',
  type: 'object',
  fields: [
    defineField({
      type: 'boolean',
      name: 'isEnabled',
      title: 'Is Enabled?',
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'boolean',
      name: 'hasPrimaryCta',
      title: 'Has Primary Cta',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'url',
      title: 'Url',
    }),
    defineField({
      type: 'text',
      name: 'text',
      title: 'Text',
    }),
  ],
})
