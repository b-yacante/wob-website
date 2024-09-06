'use client'
import Image from 'next/image'
export default function Loading() {
  return (
    <body className="grid h-screen w-screen place-items-center bg-blue-600">
      <div className="scale-[2.5]">
        <div className="h-24 w-24 animate-[spin_4s_linear_infinite] rounded-full border-8 border-dashed border-red-600"></div>
      </div>
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
