'use server'

import Link from 'next/link'
import { FiInstagram, FiTwitter, FiCalendar } from 'react-icons/fi'

interface NewsComponentProps {
  imgURL: string
  title: string
  content: string
  date: string
  twitterLink?: string
  instagramLink?: string
}
export default async function NewsComponent(props: NewsComponentProps) {
  return (
    <div className="bg-light-deg-100 flex min-h-40 w-full grow space-x-3 sm:h-48 md:h-52 lg:h-64">
      <div className="grid min-h-full w-2/5 place-items-center bg-secondary py-2">
        <img src={props.imgURL} alt={props.title} />
      </div>
      <div className="flex min-h-full w-3/5 flex-col justify-between py-4">
        <div className="flex w-full flex-col text-start">
          <div className="flex items-center space-x-2">
            <FiCalendar className="size-3" />
            <p className="text-sm font-extralight">{props.date}</p>
          </div>
          <h1 className="text-lg font-semibold"> {props.title}</h1>
          <p className="grow text-base font-normal">{props.content}</p>
        </div>

        <div className="flex w-full flex-col space-y-2 px-5">
          <hr className="border-dark" />
          <div className="flex items-center justify-end space-x-3 md:space-x-5">
            <Link
              className="hover:text-light grid h-8 w-8 place-items-center rounded-full hover:bg-[#1DA1F2] md:h-9 md:w-9"
              href=""
            >
              <FiTwitter className="size-4 md:size-5" />
            </Link>
            <Link
              className="hover:text-light grid h-8 w-8 place-items-center rounded-full bg-gradient-to-b hover:from-[#405DE6] hover:via-[#FD1D1D] hover:to-[#FCAF45] md:h-9 md:w-9"
              href=""
            >
              <FiInstagram className="size-4 md:size-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
