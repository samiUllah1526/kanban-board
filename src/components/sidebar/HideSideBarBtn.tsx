import React, { useState } from 'react'
import { EyeSvg, OpenEyeSvg } from '@/assets/svgs'

type PropsType = {
  showSidebar: (e: Event) => void
  hideSidebar: (e: Event) => void
  hide: boolean
}

const HideSideBarBtn = ({ hideSidebar, showSidebar, hide }: PropsType) => {
  return (
    // w-4/5
    <div className='relative flex  py-2'>
      <div onClick={hideSidebar} className='flex cursor-pointer'>
        <div className='self-center'><EyeSvg /></div>
        <p className='mr-2'>Hide Sidebar</p>
      </div>

      <div onClick={showSidebar} className='cursor-pointer -z-1'>
        {
          hide && (
            <div className='absolute -right-[55px] -top-5 bg-color-secondary text-white py-4 pl-2 pr-8 rounded-r-full'><OpenEyeSvg /></div>
          )
        }
      </div>
    </div>
  )
}

export default HideSideBarBtn
