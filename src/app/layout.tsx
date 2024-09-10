import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import HeaderBar from './components/header-bar'
import WoBFooter from './components/footer-wob'

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
          className={`${roboto.className} flex min-h-screen w-screen flex-col bg-light text-dark`}
        >
          <HeaderBar />
          <main className="flex-grow px-6 md:px-28 lg:px-44 xl:px-64 2xl:px-80">
            {children}
          </main>
          <WoBFooter />
        </body>
      </Suspense>
    </html>
  )
}
