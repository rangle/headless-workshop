import * as React from 'react'

export type FeaturedText = {
  heading: string
  body: string
  isDark: boolean
}

export type Props = FeaturedText

export const FeaturedText = ({ heading, body, isDark }: Props) => {
  return (
    <div className={`${isDark ? 'bg-primary-200' : 'bg-secondary-100'}`}>
      <div className="container mx-auto">
        <div className="flex flex-col px-12 py-24 sm:gap-x-10 md:px-24 lg:flex-row lg:gap-x-12 xl:px-44 xl:py-44">
          {heading && (
            <h2
              className={`my-auto flex-1 font-times text-2xl xl:text-3xl ${
                isDark ? 'text-grey-50' : 'text-primary-700'
              }`}
            >
              <span className="block font-bold leading-tight xl:inline">
                {heading}
              </span>
            </h2>
          )}
          {body && (
            <div
              className={`prose my-auto flex-1 pt-8 text-base lg:flex-[2_2_0%] lg:pt-0 ${
                isDark ? 'text-grey-50' : 'text-primary-700'
              }`}
            >
              {body}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
