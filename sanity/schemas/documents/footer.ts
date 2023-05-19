import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const socialLink = {
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Url',
      name: 'url',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
}

export default defineType({
  type: 'document',
  name: 'footer',
  title: 'Footer',
  icon: DocumentIcon,
  fields: [
    defineField({
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [socialLink],
    }),
    defineField({
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
    }),
    defineField({
      title: 'Privacy Policy',
      name: 'privacyPolicy',
      type: 'object',
      fields: [
        defineField({
          title: 'Label',
          name: 'label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Url',
          name: 'url',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})
