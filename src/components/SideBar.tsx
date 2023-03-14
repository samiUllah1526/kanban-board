import React from 'react'
import { LogoLightSvg, MobileScreenLogoSvg } from '@/assets/svgs'
import { useTrackScreenWidth } from '@/hooks'
import SideBarTab from './SideBarTab'
import ThemeSwitch from './ThemeSwitch'
import HideSideBarBtn from './HideSideBarBtn'

const SideBar = () => {
  const isTabletorBelow = useTrackScreenWidth(768)
  const Logo = isTabletorBelow ? <MobileScreenLogoSvg /> : <LogoLightSvg />

  return (
    <div className='text-custom-grey-600 bg-color-main h-screen w-1/5'>
      <div className='py-8 px-6 border-solid border-r-2 border-r-color-border border-b-2 border-b-color-border'>{Logo}</div>
      <div className='border-solid border-r-2 border-r-color-border h-[calc(100vh_-_92px)] pb-10'>
        <div className='bg-color-main flex flex-col justify-between pl-8 h-full'>
          <div className=' top-section'>
            <p className='px-4 text-medium mt-2 mb-4'>All Boards {`(3)`}</p>
            <SideBarTab />
          </div>
          <div className='bottom-section'>
            <div className='flex justify-center bg-color-bg-dark rounded-md w-4/6'>
              <ThemeSwitch />
            </div>
            <div className='mt-3'>
              <HideSideBarBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
