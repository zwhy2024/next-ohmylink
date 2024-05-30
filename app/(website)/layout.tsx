'use client'
import { PropsWithChildren } from 'react'
import { Header } from '../../components/layouts/header'
import { useMobileMenuStore } from '@/hooks/useMobileMenu'
import clsx from 'clsx'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { visible } = useMobileMenuStore()
  return (
    <>
      <Header />
      <main className={clsx('h-[calc(100vh-65px)] w-full', visible && 'h-0 overflow-hidden')}>
        {children}
      </main>
    </>
  )
}

export default Layout
