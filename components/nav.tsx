import { Link } from "./link"

interface Props {}
export const Nav: React.FC<Props> = ({}) => {
  return (
    <nav className="flex items-center max-md:hidden">
      <Link href="/how-it-works">How It Works</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/extensions">Extensions</Link>
    </nav>
  )
}
