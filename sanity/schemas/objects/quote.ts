import { Quotes } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Quote',
  title: 'Quote',
  type: 'object',
  icon: Quotes,
  fields: [
    defineField({
      type: 'boolean',
      name: 'hasDarkBackground',
      title: 'Has Dark Background',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'author',
      title: 'Author',
    }),
    defineField({
      type: 'boolean',
      name: 'hasIcon',
      title: 'Has Icon',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'body',
    },
    prepare({ title }) {
      return {
        subtitle: 'Quote',
        title,
      }
    },
  },
})
