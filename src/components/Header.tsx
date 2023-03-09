import React from 'react'
import { LogoLightSvg, MobileScreenLogoSvg } from '@/assets/svgs'
import { useTrackScreenWidth } from '@/hooks'


const Header = () => {
  const isTabletorBelow = useTrackScreenWidth(768)

  const btnText = isTabletorBelow ? '+' : '+ Add New Task';
  const Logo = isTabletorBelow ? <MobileScreenLogoSvg /> : <LogoLightSvg />

  return (
    <>
      <div className='flex'>
        <div className='w-1/6 py-8 px-6 border-solid border-r-2 color-main border-b-2 border-b-color-main'>{Logo}</div>
        <div className='flex-1 py-8 px-6 border-b-2 border-b-color-main flex justify-between'>
          <p className='text-white text-large'>Platform Launch</p>
          <div>
            <button className='text-white bg-color-secondary px-4 py-2 rounded-full'>{btnText}</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header