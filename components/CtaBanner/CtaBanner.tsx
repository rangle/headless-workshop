/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import { Cta, CtaProps } from '../Cta/Cta'
import * as React from 'react'

export type CtaBanner = {
  heading?: string
  image?: any
  imageAlt?: string
  cta?: CtaProps
}

export type Props = CtaBanner

export const CtaBanner = ({ heading, image, imageAlt, cta }: Props) => {
  return (
    <div className="bg-secondary-100">
      <div className="container mx-auto px-5 py-12 md:py-20">
        {image && (
          <div className="relative pb-14">
            <ImageBox
              width={905}
              height={350}
              image={image}
              alt={imageAlt}
              className="h-56 w-full object-cover sm:h-72 md:h-80 lg:h-96"
            />
          </div>
        )}
        <div>
          {heading && (
            <h2 className="font-times text-3xl text-primary-700 lg:text-4xl">
              <span className="block font-bold leading-tight xl:inline">
                {heading}
              </span>
            </h2>
          )}
          {cta && cta.isEnabled && (
            <div className="pt-5">
              <Cta
                url={cta.url}
                text={cta.text}
                hasPrimaryCta={cta.hasPrimaryCta}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
