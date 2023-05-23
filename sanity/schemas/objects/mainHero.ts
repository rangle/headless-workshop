import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'MainHero',
  title: 'Main Hero',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'eyebrow',
      title: 'Eyebrow',
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
    }),
    defineField({
      name: 'cta',
      title: 'Cta',
      type: 'Cta',
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'heroImage',
      title: 'Hero Image',
    }),
    defineField({
      type: 'string',
      name: 'heroImageAlt',
      title: 'Hero Image Alt',
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'backgroundImage',
      title: 'Background Image',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'heroImage',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Main Hero',
        media,
        title,
      }
    },
  },
})
