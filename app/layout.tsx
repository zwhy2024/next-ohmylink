import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

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
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
