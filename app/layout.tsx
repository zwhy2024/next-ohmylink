import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import clsx from 'clsx'
import '../styles/global.css'

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Oh My Link',
  description:
    'One bio link for everything, Share and cross promote your links, music, videos, social media, and more on one page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={clsx(
          'bg-[#f4f4f7] antialiased w-full overflow-x-hidden text-sm'
        )}
      >
        {children}
      </body>
    </html>
  )
}
