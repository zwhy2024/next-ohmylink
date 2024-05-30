import clsx from 'clsx'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}
export const Input: React.FC<Props> = (props) => {
  const { className } = props
  return (
    <input
      className={clsx(
        'w-full min-h-[60px] px-[12px] outline-none text-[#1a1a1a] placeholder:text-[#929292] focus:border-l-[#3673fc] border-l-4 border-l-transparent rounded-sm text-[16px] transition-all duration-300 font-[400]',
        className
      )}
      {...props}
    />
  )
}
