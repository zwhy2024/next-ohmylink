import { Icons } from './icons'
import { useMobileMenuStore } from '@/hooks/useMobileMenu'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const MenuButton: React.FC<Props> = () => {
  const { visible, setVisible } = useMobileMenuStore()
  return (
    <button
      type="button"
      className="md:hidden"
      onClick={() => setVisible(!visible)}
    >
      {visible ? <Icons.close /> : <Icons.menu />}
    </button>
  )
}
