'use server'
import Image from 'next/image'
export default async function Loading() {
  return (
    <body className="flex h-screen w-screen justify-center items-center bg-blue-600">
      <span className="loader"></span>
      <Image
        src="/vercel.svg"
        alt="Logo"
        className="dark:invert"
        width={200}
        height={200}
        priority
      />
    </body>
  )
}
