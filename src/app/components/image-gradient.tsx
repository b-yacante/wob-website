'use server'
import Link from 'next/link'

export interface ImageGradientProps {
  imgUrl: string
  title: string
  subtitle: string
  href: string
}

export default async function ImageGradient(props: ImageGradientProps) {
  return (
    <Link href={props.href}>
      <div className="relative aspect-square h-full w-full hover:scale-105 active:scale-100">
        <img src={props.imgUrl} alt="game" className="rounded-lg" />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-slate-800 to-transparent to-70%"></div>
        <div className="absolute bottom-8 px-4 text-white">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="text-base font-light">{props.subtitle}</p>
        </div>
      </div>
    </Link>
  )
}
