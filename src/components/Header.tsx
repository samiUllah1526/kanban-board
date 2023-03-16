import React from 'react'
import { useTrackScreenWidth } from '@/hooks'
import { LogoLightSvg, MobileScreenLogoSvg } from '@/assets/svgs';


const Header = () => {
  const isTabletorBelow = useTrackScreenWidth(768)

  const Logo: JSX.Element = isTabletorBelow ? <MobileScreenLogoSvg /> : <LogoLightSvg />
  const btnText = isTabletorBelow ? '+' : '+ Add New Task';

  return (
    <>
      <div className='flex'>
        <div className='min-w-[320px] py-10 px-6 border-solid border-r-2 border-r-color-border border-b-2 border-b-color-border'>
          {Logo}
        </div>
        <div className='flex-1 py-8 px-6 border-b-2 border-b-color-main flex justify-between items-center'>
          <p className='text-white text-large'>Platform Launch</p>
          <button className='text-white bg-color-secondary px-4 py-2 rounded-full'>{btnText}</button>
        </div>
      </div>
    </>
  )
}

export default Header