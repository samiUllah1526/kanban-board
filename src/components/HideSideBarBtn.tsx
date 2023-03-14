import React, { useState } from 'react'
import { EyeSvg } from '@/assets/svgs'


const HideSideBarBtn = () => {
  return (
    <>
    <div className='flex gap-2 w-4/5 py-2'>
      <div className='self-center'><EyeSvg /></div>
      <p>Hide Sidebar</p>
    </div>
    </>
  )
}

export default HideSideBarBtn
