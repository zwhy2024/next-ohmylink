import Link from 'next/link'

export default ({ children }: { children: React.ReactNode }) => {

  // const { data: session } = useSession()

  return (
    <>
      <header className="w-full bg-white h-[60px] px-[64px] flex justify-between items-center border-b box-border">
        <Link href="/">LOGO</Link>
        <div className='flex gap-2 items-center h-full'>
          <Link href="/" className='mr-4 text-base underline text-blue-400 font-sans' >oml.zeabur.app/david</Link>
          <div className="w-[36px] h-[36px] overflow-hidden rounded-full bg-pink-500"></div>
        </div>
      </header>
      <main className='grid grid-flow-col h-[calc(100vh-60px)] grid-cols-2'>
        <aside className='w-full h-full bg-white flex justify-center items-center overflow-y-auto'>
          <div className='w-[350px] max-w-[350px] border-[15px] border-[#222] rounded-[40px] h-[700px] overflow-hidden max-h-[700px]'>
            <iframe src="https://bio.link/poemsforher?preview=1" width="100%" height="100%" className='bg-white'></iframe>
          </div>
        </aside>
        {children}
      </main>
    </>
  )
}
