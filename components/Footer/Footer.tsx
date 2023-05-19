import Link from 'next/link'
import * as React from 'react'

import { FooterLogo } from './FooterLogo'

type FooterLink = {
  label: string
  url: string
}

export type FooterProps = {
  image?: string
  imageAlt?: string
  copyright: string
  socialLinks: FooterLink[]
  privacyPolicy: FooterLink
}

export type Props = FooterProps

export const Footer = ({ copyright, socialLinks, privacyPolicy }: Props) => {
  return (
    <footer className="bg-primary-700 py-8 md:py-16">
      <div className="container mx-auto px-5 text-white">
        <div>
          <Link href={'/'}>
            <FooterLogo />
          </Link>
        </div>
        <div className="flex flex-col-reverse gap-12 pt-12 md:flex-row md:items-center md:justify-between md:pt-8">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 ">
            {copyright && <span>{copyright}</span>}
            {privacyPolicy && (
              <Link
                className="underline hover:no-underline"
                href={privacyPolicy.url}
              >
                {privacyPolicy.label}
              </Link>
            )}
          </div>
          {socialLinks && (
            <ul className="ml-0 flex flex-wrap gap-4 md:flex-row ">
              {socialLinks.map((link) => {
                return (
                  <li key={link.url}>
                    <Link
                      className="border-b-2 border-transparent font-semibold text-white hover:border-white"
                      href={link.url}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}
