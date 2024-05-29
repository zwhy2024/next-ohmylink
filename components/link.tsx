'use client'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

interface Props {
  href: string
  className?: string
}
export const Link: React.FC<PropsWithChildren<Props>> = ({
  href,
  className,
  children,
}) => {
  const pathname = usePathname()
  const isActive = href === pathname
  return (
    <a
      href={href}
      className={clsx(
        'mx-[15px] py-[20px] box-border transition-all duration-200 border-b-2 text-[#929292] text-base hover:border-b-[#3673fc] hover:text-[#1a1a1a]',
        className,
        isActive ? 'border-b-[#3673fc]' : 'border-b-transparent'
      )}
    >
      {children}
    </a>
  )
}
