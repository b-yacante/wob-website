'use client'

interface WoBIconButtonProps {
  icon: string
  size?: 'sm' | 'md' | 'lg'
  color?: string
  onClick: () => void
}

export default function WoBIconButton(props: WoBIconButtonProps) {
  let btnClass = 'bg-red-500'
  return (
    <a className={btnClass}>
      <i>icon</i>
    </a>
  )
}
