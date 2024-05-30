'use client'
import { useMobileMenuStore } from '@/hooks/useMobileMenu'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'

const NavLink: React.FC<
  PropsWithChildren<{ href: string; className?: string }>
> = ({ href, className, children }) => {
  return (
    <a
      href={href}
      className={clsx(
        'py-[18px] px-[7.5%] text-[16px] text-[#929292] active:text-[#1a1a1a]',
        className
      )}
    >
      {children}
    </a>
  )
}

export const MobileNav: React.FC = ({}) => {
  const { visible } = useMobileMenuStore()
  const pathname = usePathname()
  return (
    <div
      style={
        visible
          ? {
              visibility: 'visible',
              opacity: 1,
              transition: 'opacity 200ms linear',
            }
          : {
              visibility: 'hidden',
              opacity: 0,
              transition: 'visibility 0s 200ms, opacity 200ms linear',
            }
      }
      className="md:hidden min-h-[calc(100vh-(env(safe-area-inset-bottom)+65px))] absolute top-[65px] bottom-0 left-0 right-0 z-20 bg-white w-full border-b-4 border-b-[#3673fc] overflow-y-hidden"
    >
      <nav className="flex flex-col justify-center border-b border-b-[#e4e4e4]">
        {pathname !== '/' && <NavLink href="/">Home</NavLink>}
        <NavLink href="/how-it-works">How It Works</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
        <NavLink href="/extensions">Extensions</NavLink>
      </nav>
      <nav className="flex flex-col justify-center">
        <NavLink href="/sign-in">Sign In</NavLink>
        <NavLink href="/sign-up">Sign Up</NavLink>
      </nav>
    </div>
  )
}
