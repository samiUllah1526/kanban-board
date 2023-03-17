import React, { useCallback, useMemo } from 'react'
import { useDrag } from 'react-dnd'
import ReactDOM from 'react-dom';

const DOTS_COLOR = [
    '#8471F2',
    '#67E2AE',
    '#e5a449',
    '#2a3fdb',
    '#c36e6e',
]


type PropsType = {
    description: string
    id: number
    total: number
    completed: number
    // deleteCol: (id: number) => void 
}


const changeCardColumn = (CurrentCard: any, columnName: string, setCards: (value: any) => void) => {
    setCards((prevState: string[]) => {
        const result = prevState.map((item: any) => {
            return {
                ...item,
                status: item.id === CurrentCard.name ? columnName : item.status,
            };
        });
        return result
    });
};



export const Card = ({ card, setCards }: { card: object, setCards: any }) => {

    const [{ isDragging }, dragRef, dragPreview] = useDrag({
        type: 'Pending',
        item: { name: card.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (order, monitor) => {
            const dropResult = monitor.getDropResult<any>();

            if (dropResult) {
                const { name } = dropResult;

                switch (name) {
                    case 'Pending':
                        changeCardColumn(order, 'Pending', setCards);
                        break;
                    case 'Completed':
                        changeCardColumn(order, 'Completed', setCards);
                        break;
                    default:
                        break;
                }
            }
        },
    })


    const completed = card.subtasks.filter(task => task.completed).length


    const Protal = useCallback(
        (anchorElm) => ReactDOM.createPortal(<p></p>, anchorElm), [],
    )

    const MemoizedProtal = useMemo(() => Protal, [])

    let ProtalEl
    const ProtalAnchor = document.getElementById('portal-root')
    if (ProtalAnchor) ProtalEl = MemoizedProtal(ProtalAnchor)

    return (
        <div id='portal-root' ref={dragRef}>
            <div ref={dragPreview} className='px-5 py-2 rounded-lg bg-color-main w-full hover:opacity-50 hover:cursor-grab'>
                <p className='text-white text-medium font-bold'>{card.description}</p>
                <p className='mt-3 text-small font-bold text-custom-grey-600'>{completed} of {card.subtasks.length} substasks</p>
            </div>
            {ProtalEl}
        </div>
    )
}
