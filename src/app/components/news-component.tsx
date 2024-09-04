'use client'
export interface NewsComponentProps {
  img: React.ReactNode
  title: string
  children: React.ReactNode
}
export default function NewsComponent(props: NewsComponentProps) {
  return (
    <div className="h-40 w-full bg-black sm:h-48 md:h-52 lg:h-64">
      <div>{props.img}</div>
      <h1> {props.title}</h1>
      <p>{props.children}</p>
    </div>
  )
}
