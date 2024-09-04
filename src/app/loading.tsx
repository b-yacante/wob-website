'use client'
import Image from 'next/image'
export default function Loading() {
  return (
    <body className="grid h-screen w-screen place-items-center bg-blue-600">
      <Image
        src="/vercel.svg"
        alt="Logo"
        className="dark:invert"
        width={100}
        height={100}
        priority
      />
    </body>
  )
}
