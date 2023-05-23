import { Link } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

const menuLink = {
  title: 'Menu Link',
  name: 'menuLink',
  type: 'object',
  icon: Link,
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
