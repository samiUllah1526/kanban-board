import { TrashBinSvg } from '@/assets/svgs'
import React from 'react'
import { useDrop } from 'react-dnd'

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
    name: string
    label: string
    id: number
    deleteCol: (id: number) => void
    children: JSX.Element | JSX.Element[]
}


export const Column = ({ name, children, label, id, deleteCol }: PropsType) => {
    const [{ canDrop, isOver }, dropref] = useDrop({
        accept: 'Pending',
        drop: () => ({
            name,
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });


    console.log({ canDrop, isOver })
    return (
        <main className='w-80 flex flex-col h-full py-6 px-10'>
            <div className='flex items-center'>
                <ColoredDot color={'#8471F2'} />
                <p className='text-custom-grey-600 ml-2'>{label}</p>
            </div>
            <div ref={dropref} className='h-full relative'>
                <div className='mt-3 flex flex-col h-full border-2 max-w-xs border-dashed border-color-border rounded-lg text-white'>
                    {children}
                </div>
                <div onClick={() => deleteCol(id)} className='cursor-pointer absolute top-2 -right-1'><TrashBinSvg /></div>
            </div>
        </main>
    )
}
