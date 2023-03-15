import { SunSvg } from 'assets/svgs'
import React, { useState } from 'react'
import { AddColumnBtn } from './AddColumnBtn'
import { Column } from './Column'

const COLUMNS = [
  { id: 1, label: 'Pending' },
  { id: 2, label: 'Doing' },
]


const Main = () => {
  const [cols, setCols] = useState(COLUMNS)
  const addCol = (newCol: any) => setCols(cols => [ ...cols, newCol])
  const deleteCol = (id: number) => setCols(cols => cols.filter(col => col.id !== id))


  return (
    <div className='flex h-[calc(100vh-110px)]'>
      {
        cols.map(col => {
          return <Column  key={col.id}  id={col.id} label={col.label} deleteCol={deleteCol}/>

        })
      }
      <AddColumnBtn addCol={addCol} label={'+ Add new'} />
    </div>

  )
}

export default Main
