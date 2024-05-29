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
  const isActive = pathname === href
  return (
    <a
      href={href}
      className={clsx(
        'mx-[15px] pt-[22px] pb-[20px] transition-all duration-200 border-b-2 border-b-transparent text-[#929292] text-[14px] hover:border-b-[#3673fc] hover:text-[#1a1a1a]'
      )}
    >
      {children}
    </a>
  )
}
