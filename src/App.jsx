
import './App.css'
import data from '../data.json'

function App() {
  console.log(Math.max(data.map(item=>item.amount)))
  const maxAmount = Math.max(...data.map(item=>item.amount))

  return (
    <>
      <div className='main'>
        <div className='barra-superior'>
          <div className='balance'>
            <h3>My Balance</h3>
            <h2>{data.reduce((acum, item) => acum + item.amount, 0)}</h2>
          </div>
          <div className='simbolos-circulares'> tururu</div>
        </div>
        <div className='contenedor-principal'>
          <h2>Spending - Last 7 days</h2>
          <div className='grafico'>
            {
              data.map(item => (
                <div key={item.day} className='barras'>
                  <div className={item.amount === maxAmount ? 'item-max' : 'item-amount'} style={{ height: item.amount*3}}>{item.amount}</div>
                  <div className='item-day'>{item.day}</div>
                </div>
                
              ))
            }
          </div>
          <hr />
          <div className='contenedor-totales'>
            <div className='total-mes'></div>
            <div className='variacion'></div>
          </div>
        </div>
        
      </div>
     
    </>
  )
}

export default App
