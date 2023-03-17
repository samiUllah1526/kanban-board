import React, { useState } from 'react'
import { Column, AddColumnBtn } from '@/components/column'
import { Card } from '@/components/card'


const COLUMNS = [
  { id: 1, label: 'Pending' },
  { id: 2, label: 'Completed' },
]


const card1 = {
  id: 1,
  description: 'Some task desription is here ok?',
  status: 'Pending',
  subtasks: [
    {
      id: 1,
      description: "1 some subtask",
      completed: false,
    },
    {
      id: 2,
      description: "2 some subtask",
      completed: true,
    },
    {
      id: 3,
      description: "3 some subtask",
      completed: false,
    },
  ],
}


const card2 = {
  id: 2,
  description: '2 Some task desription is here ok?',
  status: 'Pending',
  subtasks: [
    {
      id: 1,
      description: "1 some subtask",
      completed: false,
    },
    {
      id: 2,
      description: "2 some subtask",
      completed: true,
    },
    {
      id: 3,
      description: "3 some subtask",
      completed: false,
    },
  ],
}

const cardsData = [card1, card2]

const getColumnCards = (cards: any[], columnName: string) => {
  const result = cards
    .filter(card => card.status == columnName)

  return result;
}



const Main = () => {
  const [cols, setCols] = useState(COLUMNS)
  const [cards, setCards] = useState(cardsData)


  const addCol = (newCol: any) => setCols(cols => [...cols, newCol])
  const deleteCol = (id: number) => setCols(cols => cols.filter(col => col.id !== id))


  return (
    <div className='flex ml-80 h-[calc(100vh-110px)]'>
      {
        cols.map(col => {
          return (
            <Column key={col.id} id={col.id} name={col.label} label={col.label} deleteCol={deleteCol}>
             { getColumnCards(cards, col.label).map(card => <Card key={card.id} card={card} setCards={setCards}/>) }
            </Column>
          )
        })
      }
      <AddColumnBtn addCol={addCol} label={'+ Add New Column'} />
    </div>

  )
}

export default Main
