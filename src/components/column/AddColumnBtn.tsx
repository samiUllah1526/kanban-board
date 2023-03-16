import React from 'react'


type PropsType = {
    label: string
    addCol: (newCol: any) => void
}


const generateID = () => {
    let id = 3
    return () => id++
}

const getID = generateID()



export const AddColumnBtn = ({ label, addCol }: PropsType) => {
    return (
        <>
            <main className='w-80 flex flex-col h-full py-6 px-10'>
                <div onClick={() => addCol({ id: getID(), label: 'New Col added' })} className='cursor-pointer border-0 bg-gradient-to-b from-[rgba(121,132,147,.2)] via-[rgba(130,143,163,.1)] to-[rgba(130,143,163,0)] mt-8 flex justify-center items-center flex-col h-full rounded-lg text-custom-grey-600 transition duration-[300ms] ease-in-out hover:text-color-secondary'>
                    <p className='text-large'>{label}</p>
                </div>
            </main>
        </>
    )
}
