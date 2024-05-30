import { memo } from 'react'

type IconProps =
  | React.HTMLAttributes<SVGElement>
  | React.SVGProps<SVGSVGElement>

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
  menu: memo((props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h10M4 18h5"
      />
    </svg>
  )),
  close: memo((props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
      />
    </svg>
  )),
}
