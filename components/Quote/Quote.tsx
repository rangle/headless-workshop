import * as React from 'react'

import { Cta } from '../Cta/Cta'
import { QuoteIcon } from '../QuoteIcon/QuoteIcon'

export type Quote = {
  body: string
  hasDarkBackground: boolean
  hasIcon: boolean
  author?: string
}

export type Props = Quote

export const Quote = ({ hasDarkBackground, hasIcon, body, author }: Props) => {
  return (
    <div className={hasDarkBackground ? 'bg-primary-500' : 'bg-secondary-100'}>
      <div className="mx-auto max-w-5xl px-8 py-24 sm:px-36 md:py-32">
        <div className="relative">
          {hasIcon && (
            <div
              className={`text-center ${
                hasDarkBackground ? 'text-grey-50' : 'text-primary-700'
              }`}
            >
              <QuoteIcon />
            </div>
          )}
          <div
            className={`relative text-center font-times text-2xl font-bold md:text-4xl md:leading-10 ${
              hasIcon ? 'pt-10' : ''
            } ${hasDarkBackground ? 'text-grey-50' : 'text-primary-700'}`}
          >
            “{body}”
          </div>
          {author && (
            <>
              <div
                className={`mx-auto my-4 w-12 border ${
                  hasDarkBackground ? 'border-grey-50' : 'border-primary-700'
                }`}
              ></div>
              <span
                className={`mt-4 block text-center text-xs md:text-sm ${
                  hasDarkBackground
                    ? 'text-secondary-500'
                    : 'text-secondary-600'
                }`}
              >
                {author}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
