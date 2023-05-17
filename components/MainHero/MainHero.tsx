/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import { Cta, CtaProps } from '../Cta/Cta'
import * as React from 'react'

export type MainHero = {
  backgroundImage?: any
  eyebrow?: string
  heading?: string
  body?: string
  heroImage?: any
  heroImageAlt?: string
  cta?: CtaProps
}

export type Props = MainHero

export const MainHero = ({
  backgroundImage,
  eyebrow,
  heading,
  body,
  heroImage,
  heroImageAlt,
  cta,
}: Props) => {
  return (
    <div className="relative bg-grey-50 after:absolute after:bottom-0 after:block  after:h-28 after:w-full after:bg-gradient-to-t after:from-grey-50 after:content-['']">
      {backgroundImage && (
        <ImageBox
          image={backgroundImage}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      )}

      <div className="container mx-auto">
        <div className="relative z-10 lg:w-full lg:max-w-lg xl:max-w-xl">
          <div className="container mx-auto px-4 py-24 sm:px-6 md:py-28 lg:py-40 lg:pl-6 lg:pr-0 xl:pt-48">
            <div className="sm:text-center lg:text-left">
              {eyebrow && (
                <span className="mb-6 block text-secondary-600">{eyebrow}</span>
              )}
              {heading && (
                <h1 className="font-times text-4xl text-primary-700 lg:text-5xl">
                  <span className="block font-bold leading-tight xl:inline">
                    {heading}
                  </span>
                </h1>
              )}
              {body && (
                <p className="mt-4 text-base leading-normal text-primary-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  {body}
                </p>
              )}
              {cta && cta.isEnabled && (
                <div className="pb-5 pt-10">
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
      </div>
      {heroImage && (
        <div className="relative z-10 -mt-24 translate-y-10 transform overflow-hidden pl-10 lg:absolute lg:inset-y-0 lg:bottom-0 lg:left-auto lg:right-0 lg:-mt-10 lg:w-1/2 lg:pt-24 xl:pl-0">
          <ImageBox
            width={905}
            height={785}
            image={heroImage}
            alt={heroImageAlt}
            className="left-slash-16 lg:left-slash-36 h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          />
        </div>
      )}
    </div>
  )
}
