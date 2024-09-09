'use server'

import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'

export interface MemberCardProps {
  name: string
  imgUrl: string
  position: string
  instagram?: string
  github?: string
  twitter?: string
}
export default async function MemberCard(props: MemberCardProps) {
  return (
    <div className="container flex min-h-36 w-full space-x-5 bg-slate-500">
      <div className="min-h-full min-w-36 grow-0 bg-gray-300">
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <div className="flex shrink flex-col justify-around p-2">
        <h1 className="pt-1 text-start font-bold">{props.name}</h1>
        <p className="py-1 text-sm">{props.position}</p>
        <hr className="border-gray-100" />
        <div className="flex h-fit items-center justify-end space-x-3">
          {props.twitter && (
            <a
              href={props.twitter}
              target="_blank"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-[#1DA1F2]"
            >
              <FiTwitter />
            </a>
          )}
          {props.instagram && (
            <a
              href={props.instagram}
              target="_blank"
              className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b text-white hover:from-[#405DE6] hover:via-[#FD1D1D] hover:to-[#FCAF45]"
            >
              <FiInstagram />
            </a>
          )}
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              className="grid h-9 w-9 place-items-center rounded-full text-white hover:bg-slate-900"
            >
              <FiGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
