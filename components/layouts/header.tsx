import { Brand } from '../brand'
import { Link } from '../link'
import { Nav } from '../nav'
import { MobileNav } from '../mobile-nav'
import { MenuButton } from '../menu-button'

export const Header: React.FC = () => {
  return (
    <header className="w-full h-[65px] bg-white border-b backdrop-blur-xl border-[#e4e4e4] box-border relative z-10">
      <div className="max-md:w-[85%] md:w-[75%] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center">
          <Brand />
          <Nav />
        </div>
        <div className="flex items-center max-md:hidden">
          <Link href="/sign-in">Sign In</Link>
          <Link href="/sign-up">Sign Up</Link>
        </div>
        <MenuButton />
      </div>
      <MobileNav />
    </header>
  )
}
