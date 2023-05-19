import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const menuLink = {
  title: 'Menu Link',
  name: 'menuLink',
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
  name: 'navigation',
  title: 'Navigation',
  icon: DocumentIcon,
  fields: [
    defineField({
      title: 'Menu',
      name: 'menu',
      type: 'array',
      of: [menuLink],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
      }
    },
  },
})
