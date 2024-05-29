import { PropsWithChildren } from 'react'
import { Header } from '../../components/layouts/header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-65px)] w-full">
        {children}
      </main>
    </>
  )
}

export default Layout