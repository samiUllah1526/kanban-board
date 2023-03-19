import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'



function App() {
  const [open, setOpen] = useState(true)

  const CARDS = ['Col1', 'Col2', 'Col3', 'Col4', 'Col4', 'Col4']
  const COLUMS = ['Col1', 'Col2', 'Col3', 'Col4', 'Col4', 'Col4']

  const onOpenClass = open ? 'board-width': 'full-board-width'


  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Sidebar open={open} setOpen={setOpen}/>
        <section className={`board ${onOpenClass}`}>
          {
            COLUMS.map((col, i) => {
              return (
                <div key={`${i}-${col}`} className='col'>
                  <h1>{col}</h1>
                  <div className='col-content-wrapper'>
                    <div className='col-content'>
                      {CARDS.map((card, i) => <div key={`${i}-${card}`}>
                        <p className='card'>some card description</p>
                      </div>)}
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </section>
      </main>
    </div>
  )
}

export default App
