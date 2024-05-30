import { Icons } from './icons'

export const Brand: React.FC = () => {
  return (
    <h1>
      <a href="/" className="flex gap-1 items-center mr-[25px]">
        <Icons.logo className="text-2xl" />
        <span className="text-xl">oh my link</span>
      </a>
    </h1>
  )
}
