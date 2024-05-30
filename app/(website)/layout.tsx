import { PropsWithChildren } from 'react'
import { Header } from '../../components/layouts/header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-65px)] w-full relative">{children}</main>
    </>
  )
}

export default Layout
