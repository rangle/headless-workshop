import * as React from 'react'
import { Cta } from '../Cta/Cta'

import ImageBox from 'components/shared/ImageBox'

export type MediaModule = {
  body?: string
  cta?: any
  heading?: string
  imageAlt?: string
  imageOnRight: boolean
  image: any
  isDark: boolean
}

export type Props = MediaModule

export const MediaModule = ({
  body,
  cta,
  heading,
  imageAlt = '',
  imageOnRight = false,
  image,
  isDark = false,
}: Props) => {
  return (
    <div className={isDark ? 'bg-primary-200' : 'bg-grey-100'}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 px-5 py-12 sm:gap-x-5 md:grid-cols-2 md:py-20">
          <div
            className={`relative mx-auto mb-6 mt-10 h-64 w-64 self-start sm:h-72 sm:w-72 md:mt-0 ${
              imageOnRight ? 'order-last mt-8' : ''
            }`}
          >
            <div
              className={`absolute inset-0 h-64 w-64 translate-x-3 transform ${
                isDark ? 'bg-secondary-300' : 'bg-secondary-600'
              } sm:h-72 sm:w-72`}
            >
              <ImageBox
                width={350}
                height={350}
                image={image}
                alt={imageAlt}
                className="absolute inset-0 h-64 w-64 -translate-x-6 translate-y-6 transform sm:h-72 sm:w-72"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-center md:mt-0">
            {heading && (
              <h2
                className={`font-times text-2xl font-bold lg:text-3xl ${
                  isDark ? 'text-grey-50' : 'text-primary-700'
                }`}
              >
                {heading}
              </h2>
            )}
            {body && (
              <div
                className={`prose mt-6 text-base ${
                  isDark ? 'text-grey-50' : 'text-primary-700'
                }`}
              >
                {body}
              </div>
            )}
            {cta && cta.isEnabled && (
              <div className="pt-10">
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
  )
}
