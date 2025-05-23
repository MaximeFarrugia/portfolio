import { SVGProps } from 'react'

const Delete = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="7" cy="7" r="7" fill="#7A7A7A" />
      <path
        d="M4.86914 4.86957L6.99957 7M9.13001 9.13044L6.99957 7M6.99957 7L4.86914 9.13044L9.13001 4.86957"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>
  )
}

export default Delete
