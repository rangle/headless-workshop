import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'FeaturedItems',
  title: 'Featured Items',
  type: 'object',
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
})
