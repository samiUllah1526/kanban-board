import React, { useState } from 'react'
import SideBarTab from './SideBarTab'
import ThemeSwitch from './ThemeSwitch'
import HideSideBarBtn from './HideSideBarBtn'

const SideBar = () => {
  const [hide, setHide] = useState<boolean>(false)

  const hideSidebar = (e: Event) => {
    setHide(true)
  }
  const showSidebar = (e: Event) => {
    setHide(false)
  }

  return (
    <div className={`text-custom-grey-600 bg-color-main h-[100vh] relative transition-[left] ease-in-out duration-[1500ms] ${hide ? '-left-[320px]': 'left-[0]'}`}>
        <div className='bg-color-main border-solid border-r-2 border-r-color-border flex flex-col justify-between pl-8 h-[calc(100vh-110px)]'>
          <div className='top-section'>
            <p className='px-4 text-medium mt-2 mb-4'>All Boards {`(3)`}</p>
            <SideBarTab />
          </div>
          <div className='bottom-section'>
            <div className='flex justify-center bg-color-bg-dark rounded-md'>
              <ThemeSwitch />
            </div>
            <div className='mt-3 mb-2'>
              <HideSideBarBtn hide={hide} hideSidebar={hideSidebar} showSidebar={showSidebar} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default SideBar
