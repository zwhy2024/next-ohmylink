import { Brand } from '../brand'
import { Link } from '../link'
import { Nav } from '../nav'
import { MobileNav } from '../mobile-nav'
import { MenuButton } from '../menu-button'
import { MaxWidthWrapper } from '../MaxWidthWrapper'

export const Header: React.FC = () => {
  return (
    <header className="w-full h-[65px] bg-white border-b backdrop-blur-xl border-[#e4e4e4] box-border relative z-10">
      <MaxWidthWrapper className="flex justify-between items-center">
        <div className="flex items-center">
          <Brand />
          <Nav />
        </div>
        <div className="flex items-center max-md:hidden">
          <Link href="/sign-in">Sign In</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
        <MenuButton />
      </MaxWidthWrapper>
      <MobileNav />
    </header>
  )
}
