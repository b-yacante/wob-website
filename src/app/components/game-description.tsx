'use client'
import { FiPlay } from 'react-icons/fi'

export interface GameDescriptionProps {
  imgUrl: string
  title: string
  content: React.ReactNode
  href: string
}

export default function GameDescriptionComponent(props: GameDescriptionProps) {
  return (
    <div className="relative h-full w-full px-6 sm:px-0">
      <div className="float-none grid h-fit w-full place-items-center pb-6 pr-6 sm:float-start sm:w-2/5">
        <img className="rounded-md" src={props.imgUrl} alt="" />
      </div>
      <div className="space-y-2">
        <h1 className="text-center text-xl font-bold text-slate-400 lg:text-2xl">
          {props.title}
        </h1>
        <p className="pb-16 text-sm md:text-base">{props.content}</p>
      </div>
      <a
        href={props.href}
        className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-red-500 shadow shadow-red-700"
      >
        <FiPlay className="translate-x-0.5 text-xl hover:scale-110" />
      </a>
    </div>
  )
}
