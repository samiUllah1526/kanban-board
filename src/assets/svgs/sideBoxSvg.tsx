import React from 'react'

type PropsType = {
  fillColor: string
}


function SideBoxSvg({ fillColor }: PropsType) {
  return (
    <svg
    fill={fillColor}
    width="16" 
    height="16" 
    viewBox="-1.71 0 33.633 33.633"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-416.713 -257.48)">
      <path d="M446.921,291.113H416.882l-.169-5.8,2-.059.112,3.857h28.095Z" />
      <path d="M446.8,286.425h-2v-.14h-28.09v-22.53a6.282,6.282,0,0,1,6.274-6.275h18.3c4.036,0,5.369,3.558,5.509,5.439Zm-28.09-2.14H444.8V262.993c-.027-.289-.386-3.513-3.512-3.513h-18.3a4.279,4.279,0,0,0-4.274,4.275Z" />
      <rect height={4.842} transform="translate(442.98 285.274)" width={2} />
    </g>
  </svg>

  )
}

export default SideBoxSvg
