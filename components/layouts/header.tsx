import { Brand } from '../brand'
import { Link } from '../link'

export const Header: React.FC = () => {
  return (
    <header className="w-full h-[65px] bg-white border-b backdrop-blur-xl border-[#e4e4e4] box-border">
      <div className="max-md:w-[85%] md:w-[75%] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center">
          {/* <h1 className='mr-[25px]'>
            <a href="/">LOGO</a>
          </h1> */}
          <Brand />
          <nav className="flex items-center max-md:hidden">
            <Link href="/a">How It Works</Link>
            <Link href="/b">Pricing</Link>
            <Link href="/c">Extensions</Link>
          </nav>
        </div>
        <div className='flex max-md:hidden'>
          <Link href='/sign-in'>Sign In</Link>
          <Link href='/sign-up'>Sign Up</Link>
        </div>
      </div>
    </header>
  )
}
