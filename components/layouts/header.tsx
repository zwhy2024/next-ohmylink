'use client'
import { Brand } from '../brand'
import { Icons } from '../icons'
import { Link } from '../link'
import clsx from 'clsx'
import { useMobileMenuStore } from '@/hooks/useMobileMenu'

export const Header: React.FC = () => {
  const { visible, setVisible } = useMobileMenuStore()
  
  return (
    <header className="w-full h-[65px] bg-white border-b backdrop-blur-xl border-[#e4e4e4] box-border relative z-10">
      <div className="max-md:w-[85%] md:w-[75%] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center">
          <Brand />
          <nav className="flex items-center max-md:hidden">
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/extensions">Extensions</Link>
          </nav>
        </div>
        <div className="flex items-center max-md:hidden">
          <Link href="/login">Sign In</Link>
          <Link href="/register">Sign Up</Link>
        </div>
        <button
          type="button"
          className="md:hidden"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <Icons.close /> : <Icons.menu />}
        </button>
      </div>
      <div
        className={clsx(
          'md:hidden opacity-0 transition-opacity duration-300 ease-in absolute top-[65px] bottom-0 left-0 right-0 z-20 bg-white w-full min-h-[calc(100vh-65px)] border-b-4 border-b-[#3673fc] overflow-hidden pb-[20px]',
          visible ? 'opacity-[1]' : 'opacity-0'
        )}
      >
        <nav className="flex flex-col justify-center border-b border-b-[#e4e4e4]">
          <a
            className="py-[18px] px-[7.5%] text-[16px] text-[#929292] active:text-[#1a1a1a]"
            href="/how-it-works"
          >
            How It Works
          </a>
          <a
            className="py-[18px] px-[7.5%] text-[16px] text-[#929292] active:text-[#1a1a1a]"
            href="/how-it-works"
          >
            Pricing
          </a>
          <a
            className="py-[18px] px-[7.5%] text-[16px] text-[#929292] active:text-[#1a1a1a]"
            href="/how-it-works"
          >
            Extensions
          </a>
        </nav>
        <nav className="flex flex-col justify-center">
          <a
            className="py-[18px] px-[7.5%] text-[16px] text-[#929292] active:text-[#1a1a1a]"
            href="/login"
          >
            Sign In
          </a>
          <a
            className="py-[18px] px-[7.5%] text-[16px] text-[#929292] active:text-[#1a1a1a]"
            href="/register"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  )
}
