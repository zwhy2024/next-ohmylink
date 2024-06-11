import Link from 'next/link'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="w-full bg-white h-[60px] px-[64px] flex justify-between items-center border-b box-border">
        <Link href="/">LOGO</Link>
        <div className="w-[36px] h-[36px] overflow-hidden rounded-full bg-pink-500"></div>
      </header>
      {children}
    </>
  )
}
