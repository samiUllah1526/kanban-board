import React from 'react'
import { SideBoxSvg } from '@/assets/svgs'


const TABS = [
  { id: 1, label: 'Platform Lunch' },
  { id: 2, label: 'Marketing Plan' },
  { id: 3, label: 'Roadmap' },
]


const ON_HOVER = "hover:bg-color-secondary-light hover:text-white rounded-full";
const ON_SELECT = "hover:bg-color-secondary hover:text-white rounded-full"

const SideBarTab = () => {
  return (
    <>
      {
        TABS.map(tab => {
          return (
            <>
                <button key={tab.id} className={`px-4 py-2 flex items-center gap-3 w-48 ${ON_SELECT}`}>
                  <SideBoxSvg fillColor={'#ffffff'} />
                  <span className='text-medium'>{tab.label}</span>
                </button>
                
            </>)
        })
      }
    </>
  )
}

export default SideBarTab
