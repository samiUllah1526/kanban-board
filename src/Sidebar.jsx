import { useState } from 'react'
import './App.css'

function Sidebar() {

  const [open, setOpen] = useState(true)
  const onOpenClass = open ? 'sidebar-open': 'sidebar-closed'

  const handleHide = () => setOpen(prev => !prev)
  return (
    <div className={`sidebar ${onOpenClass}`}>
    <ul>
      {
        ['item1', 'item2', 'item3', 'item4'].map((item, i) => {
          return <li key={i} className='item'>{item}</li>
        })
      }
    </ul>
    <div className='sidebar-footer'>
      <button  onClick={() => setOpen(false)} className='btn hide-btn'>Hide</button>
      <button  onClick={() => setOpen(true)} className='btn show-btn'>Show</button>
    </div>
  </div>
  )
}

export default Sidebar
