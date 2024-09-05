import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import HeaderBar from './components/header-bar'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'WoB Sofware',
  description: 'Development Game Studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <Suspense fallback={<Loading />}>
        <body
          className={`${roboto.className} h-screen w-screen bg-blue-500 text-white md:px-28 lg:px-44 xl:px-64`}
        >
          <HeaderBar />
          <div className="px-6 md:px-7 lg:px-8 xl:px-9">{children}</div>
        </body>
      </Suspense>
    </html>
  )
}
