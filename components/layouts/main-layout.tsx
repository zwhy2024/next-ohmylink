import { PropsWithChildren } from 'react'
import { Header } from './header'

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Header />
      <main className='min-h-[calc(100vh-65px)] w-full bg-[#f4f4f7]'>
        {children}
      </main>
    </div>
  )
}
