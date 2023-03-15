import React from 'react'
import { useTrackScreenWidth } from '@/hooks'


const Header = () => {
  const isTabletorBelow = useTrackScreenWidth(768)
  const btnText = isTabletorBelow ? '+' : '+ Add New Task';

  return (
    <>
      <div className='py-8 px-6 border-b-2 border-b-color-main flex justify-between'>
        <p className='text-white text-large'>Platform Launch</p>
        <button className='text-white bg-color-secondary px-4 py-2 rounded-full'>{btnText}</button>
      </div>
    </>

  )
}

export default Header