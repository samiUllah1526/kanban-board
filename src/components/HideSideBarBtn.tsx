import React, { useState } from 'react'
import { EyeSvg, OpenEyeSvg } from '@/assets/svgs'

type PropsType = {
  showSidebar: (e: Event) => void
  hideSidebar: (e: Event) => void
  hide: boolean
}

const HideSideBarBtn = ({ hideSidebar, showSidebar, hide }: PropsType) => {
  return (
    <div className='relative flex gap-2 w-4/5 py-2'>
      <div onClick={hideSidebar} className='self-center'><EyeSvg /></div>
      <p>Hide Sidebar</p>
      {
        hide && (
          <div onClick={showSidebar} className='absolute -right-[115px] bg-color-secondary text-white py-2 pl-2 pr-8 rounded-r-full'><OpenEyeSvg /></div>
        )
      }
    </div>
  )
}

export default HideSideBarBtn
