
import './App.css'
import data from '../data.json'
import { useState } from 'react'

function App() {
  const myBalance = data.reduce((acum, item) => acum + item.amount, 0)
  const [show, setShow] = useState(false)
  const diaActual = new Date().getDay()
  const diasSemana =['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const hoy=  diasSemana[diaActual]
  const handleMouseOver = () => {
    setShow(true)
  }
  const handleMouseOut = () => {
    setShow(false)
  }

  return (
    <>
      <div className='main'>
        <div className='barra-superior'>
          <div className='balance'>
            <p>My Balance</p>
            <h2>$921,48</h2>
          </div>
          <div className='simbolos-circulares'> tururu</div>
        </div>
        <div className='contenedor-principal'>
          <h2>Spending - Last 7 days</h2>
          <div className='grafico'>
            {
              data.map(item => (
                <div key={item.day} className='barras'>
                  {show && <div>{item.amount}</div>}
                  <div className={item.day === hoy ? 'item-actual-day' : 'item-amount'} style={{ height: item.amount*3}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{item.amount}</div>
                  <div className='item-day'>{item.day}</div>
                </div>
                
              ))
            }
          </div>
          <hr />
          <div className='contenedor-totales'>
            <div className='total-mes'>
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>
            <div className='variacion'>
              <p>+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </div>
        
      </div>
     
    </>
  )
}

export default App
