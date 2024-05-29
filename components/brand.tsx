import { Icons } from "./icons"

export const Brand: React.FC = () => {
  return (
    <h1>
      <a href="/" className="flex text-xl gap-1 items-center mr-[25px]">
        <Icons.logo />oh my link
      </a>
    </h1>
  )
}