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
      <main className={clsx('min-h-[calc(100vh-65px)] w-full', visible && 'fixed')}>
        {children}
      </main>
    </>
  )
}

export default Layout
