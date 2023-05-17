import * as React from 'react'
import { FeaturedItem } from '../FeaturedItem/FeaturedItem'
import type * as types from '../../types'

type Blocks = {
  eyebrow: string
  heading: string
  body: string
  ctaSecondary: any
}

export type FeaturedItems = {
  heading: string
  blocks: Blocks[]
}

export type Props = FeaturedItems

export const FeaturedItems = ({ heading, blocks }: Props) => {
  return (
    <div className="bg-grey-100">
      <div className="container mx-auto pt-14 lg:pt-28">
        <h2 className="mx-auto px-5 pb-14 text-center font-times text-3xl font-bold text-primary-700 lg:w-8/12 lg:pb-16 lg:text-2xl">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-y-8 px-5 pb-14 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {blocks?.map((block, i) => {
            return (
              <FeaturedItem
                key={block.heading + block.eyebrow}
                heading={block.heading}
                body={block.body}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
