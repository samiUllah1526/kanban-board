import React, { useState } from 'react'
import { Column, AddColumnBtn } from '@/components/column'
import { Card } from '@/components/card'


const COLUMNS = [
  { id: 1, label: 'Pending' },
  { id: 2, label: 'Doing' },
]


const Main = () => {
  const [cols, setCols] = useState(COLUMNS)
  const addCol = (newCol: any) => setCols(cols => [...cols, newCol])
  const deleteCol = (id: number) => setCols(cols => cols.filter(col => col.id !== id))


  return (
    <div className='flex h-[calc(100vh-110px)]'>
      {
        cols.map(col => {
          return (
            <Column key={col.id} id={col.id} label={col.label} deleteCol={deleteCol}>
              <Card />
            </Column>
          )
        })
      }
      <AddColumnBtn addCol={addCol} label={'+ Add New Column'} />
    </div>

  )
}

export default Main
