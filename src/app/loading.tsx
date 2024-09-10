'use server'
import Image from 'next/image'
export default async function Loading() {
  return (
    <body className="flex h-screen w-screen justify-center items-center bg-light-deg-100">
      <span className="loader"></span>
      <Image
        src="/wob.svg"
        alt="wob-logo"
        width={200}
        height={200}
        priority
      />
    </body>
  )
}
