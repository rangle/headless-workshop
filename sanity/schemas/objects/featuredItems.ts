import { Star } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'FeaturedItems',
  title: 'Featured Items',
  type: 'object',
  icon: Star,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'blocks',
      title: 'Blocks',
      of: [
        {
          type: 'object',
          name: 'featuredItem',
          icon: Star,
          fields: [
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
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        subtitle: 'Featured Items',
        title,
      }
    },
  },
})
