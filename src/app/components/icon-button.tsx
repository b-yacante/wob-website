'use client'

interface WoBIconButtonProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: string
  onClick?: () => void
  href?: string
}

export default function WoBIconButton(props: WoBIconButtonProps) {
  return (
    <a
      onClick={props.onClick}
      href={props.href}
      target="_blank"
      className={`grid h-9 w-9 place-items-center rounded-full bg-${props.color}`}
    >
      <div className="size-6">{props.children}</div>
    </a>
  )
}
