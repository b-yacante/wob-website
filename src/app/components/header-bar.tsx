'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'

export default function HeaderBar() {
  const currentPath = usePathname()
  const [tooggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="text-dark relative md:px-6 lg:px-9 xl:px-16 2xl:px-28">
      <div className="grid w-full grid-flow-col grid-cols-3 py-5">
        {/* NAV */}
        <nav className="ml-5 justify-self-start text-sm lg:ml-8">
          {/* Hamburger button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setToggleMenu(!tooggleMenu)}
              className="text-dark hover:text-dark active:text-gray-600"
            >
              <svg
                className="h-7 w-7"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16m-16 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {/* Menu items */}
          <div
            id="mobile-menu"
            className={`absolute z-20 h-64 w-40 rounded bg-black sm:h-72 sm:w-60 sm:p-4 md:hidden ${!tooggleMenu ? 'hidden' : ''}`}
          >
            <div className="text-dark grid h-full p-3">
              <div className="font-medium">
                <a href="/news" className="block w-full py-2 sm:p-4">
                  News
                </a>
                <a href="/games" className="block w-full py-2 sm:p-4">
                  Games
                </a>
                <a href="/about" className="block w-full py-2 sm:p-4">
                  About
                </a>
              </div>
              <div className="flex items-end justify-around text-center">
                <a
                  href="#"
                  className="grid w-full place-items-center rounded p-2"
                >
                  <FiInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="grid w-full place-items-center rounded p-2"
                >
                  <FiTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="grid w-full place-items-center rounded p-2"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Overlay */}
          {tooggleMenu && (
            <div
              onClick={() => setToggleMenu(false)}
              className={`fixed left-0 top-0 z-10 h-screen w-screen md:hidden`}
            ></div>
          )}
          {/* Desktop items */}
          <div className="hidden space-x-1 text-sm md:flex lg:space-x-3 lg:text-base">
            <Link
              href="/news"
              className={`text-dark hover:bg-primary hover:text-light rounded p-2 font-semibold ${
                currentPath === '/news' ? 'bg-primary text-light' : ''
              }`}
            >
              News
            </Link>
            <Link
              href="/games"
              className={`text-dark hover:bg-primary hover:text-light rounded p-2 font-semibold ${
                currentPath === '/games' ? 'bg-primary text-light' : ''
              }`}
            >
              Games
            </Link>
            <Link
              href="/about"
              className={`text-dark hover:bg-primary hover:text-light rounded p-2 font-semibold ${
                currentPath === '/about' ? 'bg-primary text-light' : ''
              }`}
            >
              About
            </Link>
          </div>
        </nav>
        {/* WOB SOFWARE */}
        <Link
          href="/news"
          className="absolute grid translate-y-6 place-items-center self-center justify-self-center"
        >
          <div className="border-primary bg-light hover:bg-light-deg-100 text-dark grid h-12 w-32 place-items-center rounded border-2 text-sm font-semibold md:h-14 md:w-40 md:text-base lg:h-16 lg:w-44 xl:w-52 2xl:h-20 2xl:w-60">
            WOB SOFTWARE
          </div>
        </Link>
        {/* REDES */}
        <nav className="col-span-3 mr-8 hidden space-x-3 justify-self-end md:flex md:items-center">
          <Link
            href="https://instagram.com"
            className="text-dark hover:text-light grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b hover:from-[#405DE6] hover:via-[#FD1D1D] hover:to-[#FCAF45]"
          >
            <FiInstagram size={23} />
          </Link>
          <Link
            href="https://x.com"
            className="text-dark hover:text-light grid h-9 w-9 place-items-center rounded-full hover:bg-[#1DA1F2]"
          >
            <FiTwitter size={23} />
          </Link>
          <Link
            href="mailto:braian.yac@gmail.com"
            className="text-dark hover:text-light grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b hover:from-[#DB4437] hover:via-[#F4B400] hover:to-[#4285F4]"
          >
            <FiMail size={23} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
