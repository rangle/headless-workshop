import * as React from 'react'
import Link from 'next/link'
import ImageBox from 'components/shared/ImageBox'

type SocialIcon = {
  title: string
  url: string
  icon: {
    src: string
    alt: string
  }
}

type MenuItem = {
  label: string
  url: string
}

export type FooterProps = {
  image?: string
  imageAlt?: string
  menu: MenuItem[]
  copyright: string
  socialIcons: SocialIcon[]
  privacyPolicy: MenuItem
}

export type Props = FooterProps

export const Footer = ({
  image,
  imageAlt,
  menu,
  copyright,
  socialIcons,
  privacyPolicy,
}: Props) => {
  return (
    <footer className="bg-primary-700 py-8 md:py-16">
      <div className="container mx-auto px-5 text-white">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>Pangea</div>
          {menu && (
            <ul className="ml-0 flex flex-col gap-4 md:flex-row md:gap-4 ">
              {menu.map((item) => {
                return (
                  <li key={item.label}>
                    <Link
                      className="border-b-2 border-transparent font-semibold text-white hover:border-white"
                      href={item.url}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <div className="flex flex-col-reverse gap-4 pt-12 md:flex-row md:items-center md:justify-between md:pt-8">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 ">
            {copyright && <span>{copyright}</span>}
            {privacyPolicy && (
              <Link
                className="border-b-2 border-transparent text-white hover:border-white"
                href={privacyPolicy.url}
              >
                {privacyPolicy.label}
              </Link>
            )}
          </div>
          {socialIcons && (
            <ul className="ml-0 flex gap-4 md:flex-row ">
              {socialIcons.map((icon) => {
                return <li key={icon.url}>{icon.title}</li>
              })}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}
