import Link from 'next/link'
import * as React from 'react'

import { NavLogo } from './NavLogo'

type MenuItem = {
  label: string
  url: string
  _key: string
}

export type NavigationProps = {
  menu: MenuItem[]
}

export type Props = NavigationProps

export const Navigation = ({ menu }: Props) => {
  return (
    <div className="container relative z-10 mx-auto">
      <div className="absolute w-full px-5 pt-6">
        <div className="flex justify-between">
          <Link href={'/'}>
            <NavLogo />
          </Link>
          <nav>
            {menu && (
              <ul className="ml-0 flex flex-row gap-8 ">
                {menu.map((item) => {
                  return (
                    <li key={item._key}>
                      <Link
                        className="border-b-2 border-transparent font-semibold text-black hover:border-black"
                        href={item.url}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
