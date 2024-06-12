import cn from 'classnames'

interface Props {
  className?: string
}
export const MaxWidthWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'max-w-6xl max-md:max-w-5xl mx-auto max-md:px-6',
        className
      )}
    >
      {children}
    </div>
  )
}
