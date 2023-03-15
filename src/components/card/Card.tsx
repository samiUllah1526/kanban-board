import { TrashBinSvg } from '@/assets/svgs'
import React from 'react'

const DOTS_COLOR = [
    '#8471F2',
    '#67E2AE',
    '#e5a449',
    '#2a3fdb',
    '#c36e6e',
]

const ColoredDot = ({ color }: { color: string }) => {
    return (
        <div className={`h-3 w-3 rounded-full bg-[${color}]`}></div>
    )
}


type PropsType = {
    description: string
    id: number
    total: number
    completed: number
    // deleteCol: (id: number) => void 
}

//{ id, description, completed, total }: PropsType
export const Card = () => {

    const card = {
        id: 1,
        description: 'Some task desription is here ok?',
        status: 'completed',
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

    const completed = card.subtasks.filter(task => task.completed).length

    return (
        <>
            <div className='px-5 py-2 rounded-lg bg-color-main w-1/4 hover:opacity-50 hover:cursor-grab'>
                <p className='text-white text-medium font-bold'>{card.description}</p>
                <p className='mt-3 text-small font-bold text-custom-grey-600'>{completed} of {card.subtasks.length} substasks</p>
            </div>
        </>
    )
}
