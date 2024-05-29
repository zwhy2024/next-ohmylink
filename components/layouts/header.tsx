import { Brand } from '../brand'
import { Link } from '../link'

export const Header: React.FC = () => {
  return (
    <header className="w-full h-[65px] bg-white border-b backdrop-blur-xl border-[#e4e4e4] box-border">
      <div className="max-md:w-[85%] md:w-[75%] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center">
          <Brand />
          <nav className="flex items-center max-md:hidden">
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/extensions">Extensions</Link>
          </nav>
        </div>
        <div className='flex items-center max-md:hidden'>
          <Link href='/login'>Sign In</Link>
          <Link href='/register'>Sign Up</Link>
        </div>
      </div>
    </header>
  )
}
