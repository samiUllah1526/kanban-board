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

export const Column = ({ label }: { label: string }) => {
    return (
            <main className='w-80 flex flex-col h-full py-6 px-10'>
            <div className='flex items-center'>
                    <ColoredDot color={'#8471F2'} />
                    <p className='text-white ml-2'>{label}</p>
                </div>
                <div className='mt-3 flex flex-col h-4/5 overflow-scroll border-2 max-w-xs border-dashed border-color-border rounded-lg text-white'></div>
            </main>
    )
}
