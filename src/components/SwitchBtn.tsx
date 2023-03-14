import React, { useState } from 'react'
import { LogoLightSvg, MobileScreenLogoSvg, MoonSvg, SideBoxSvg, SunSvg } from '@/assets/svgs'


const SwitchBtn = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
    <button onClick={() => setChecked(prev => !prev)} className='relative flex items-center w-10 h-5 bg-color-secondary rounded-full'>
      <div className={`absolute w-3.5 h-3.5 bg-white rounded-full transition-[left] ${checked ? 'left-5': 'left-1'} `}></div>
    </button>
    </>
  )
}

export default SwitchBtn
