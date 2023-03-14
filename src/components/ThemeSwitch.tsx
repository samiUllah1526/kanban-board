import React, { useState } from 'react'
import { MoonSvg, SideBoxSvg, SunSvg } from '@/assets/svgs'
import SwitchBtn from './SwitchBtn';


const ThemeSwitch = () => {
  return (
    <>
    <div className='flex gap-5 justify-center w-4/5 py-2'>
      <div className='self-center'><MoonSvg /></div>
      <SwitchBtn />
      <div className='self-center'><SunSvg /></div>
    </div>
    </>
  )
}

export default ThemeSwitch
