/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

type FeaturedItemProps = {
  heading: string
  body: string
}

export type Props = FeaturedItemProps

export const FeaturedItem = ({ heading, body }: Props) => {
  return (
    <div>
      <section className="pb-6">
        <h2 className="text-xl font-bold text-primary-700">{heading}</h2>
        {body && (
          <div className="prose mt-3 text-base text-primary-700">{body}</div>
        )}
      </section>
    </div>
  )
}
