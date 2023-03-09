import { LogoLightSvg } from '@/assets/svgs'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-1/6 py-8 px-6 border-solid border-r-2 border-r-color-main border-b-2 border-b-color-main'><LogoLightSvg /></div>
        <div className='flex-1 py-8 px-6 border-b-2 border-b-color-main flex justify-between'>
          <p className='text-white text-large'>Platform Launch</p>
          <div>
            <button className='text-white bg-color-secondary px-4 py-2 rounded-full '>+ Add New Task</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header