'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'

export default function HeaderBar() {
  const currentPath = usePathname()
  const [tooggleMenu, setToggleMenu] = useState(false)

  function toggleMenuAction() {
    const menu = document.getElementById('mobile-menu')
    menu?.classList.toggle('hidden')
    setToggleMenu(!tooggleMenu)
  }
  return (
    <header className="relative text-white">
      <div className="grid w-full grid-flow-col grid-cols-3 py-5">
        {/* NAV */}
        <nav className="ml-5 justify-self-start text-sm lg:ml-8">
          {/* Hamburger button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenuAction}
              className="text-white hover:text-white active:text-gray-600"
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
            className="absolute z-10 hidden h-52 w-36 bg-black md:hidden"
          >
            <div className="grid h-full p-3 text-white">
              <div className="font-medium">
                <a href="#" className="block w-full py-2">
                  News
                </a>
                <a href="#" className="block w-full py-2">
                  Games
                </a>
                <a href="#" className="block w-full py-2">
                  About
                </a>
              </div>
              <div className="flex items-end justify-around text-center">
                <a href="#" className="block w-full rounded p-2">
                  <FiInstagram size={20} />
                </a>
                <a href="#" className="block w-full rounded p-2">
                  <FiTwitter size={20} />
                </a>
                <a href="#" className="block w-full rounded p-2">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Desktop items */}
          <div className="hidden space-x-1 text-sm md:flex lg:space-x-3 lg:text-base">
            <Link
              href="/news"
              className={`rounded p-2 font-semibold text-white hover:bg-blue-800 ${
                currentPath === '/news' ? 'bg-blue-800' : ''
              }`}
            >
              News
            </Link>
            <Link
              href="/games"
              className={`rounded p-2 font-semibold text-white hover:bg-blue-800 ${
                currentPath === '/games' ? 'bg-blue-800' : ''
              }`}
            >
              Games
            </Link>
            <Link
              href="/about"
              className={`rounded p-2 font-semibold text-white hover:bg-blue-800 ${
                currentPath === '/about' ? 'bg-blue-800' : ''
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
          <div className="grid h-12 w-32 place-items-center rounded border-2 border-slate-900 bg-slate-600 text-sm font-semibold md:h-14 md:w-40 md:text-base lg:h-16 lg:w-44">
            WOB SOFTWARE
          </div>
        </Link>
        {/* REDES */}
        <nav className="col-span-3 mr-8 hidden space-x-3 justify-self-end md:flex md:items-center">
          <Link
            href="https://instagram.com"
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b text-white hover:from-[#405DE6] hover:via-[#FD1D1D] hover:to-[#FCAF45]"
          >
            <FiInstagram size={23} />
          </Link>
          <Link
            href="https://x.com"
            className="grid h-9 w-9 place-items-center rounded-full text-white hover:bg-[#1DA1F2]"
          >
            <FiTwitter size={23} />
          </Link>
          <Link
            href="mailto:braian.yac@gmail.com"
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b text-white hover:from-[#DB4437] hover:via-[#F4B400] hover:to-[#4285F4]"
          >
            <FiMail size={23} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
