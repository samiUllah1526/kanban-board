import React from 'react'


export const AddColumnBtn = ({ label }: { label: string }) => {
    return (
        <>
            <main className='w-80 flex flex-col h-full py-6 px-10'>
                <div className='mt-8 flex justify-center items-center flex-col h-4/5 overflow-scroll border-2 max-w-xs border-dashed border-color-border rounded-lg text-white'>
                    <p className='text-white'>{label}</p>
                </div>
            </main>
        </>
    )
}
