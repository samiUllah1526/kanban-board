import { SunSvg } from 'assets/svgs'
import React from 'react'
import { AddColumnBtn } from './AddColumnBtn'
import { Column } from './Column'

const COLUMNS = [
  { id: 1, label: 'Pending' },
  { id: 2, label: 'Doing' },
]


//{ id: 3, label: 'Done'},

const Main = () => {
  return (
    <div className='flex h-full overflow-scroll'>
      {
        COLUMNS.map(col => {
          return <Column key={col.id} label={col.label} />

        })
      }
      <AddColumnBtn label={'+ Add new'} />
    </div>

  )
}

export default Main
