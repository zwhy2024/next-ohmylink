import { memo } from 'react'

type IconProps = React.HTMLAttributes<SVGElement> | React.SVGProps<SVGSVGElement>

export const Icons = {
  logo: memo((props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g stroke="#3673fc" strokeLinecap="round" strokeWidth={1.5}>
        <path d="M14 12a6 6 0 1 1-6-6" />
        <path d="M10 12a6 6 0 0 1 6-6m0 12a6 6 0 0 0 5-9.318" />
      </g>
    </svg>
  )),
}
