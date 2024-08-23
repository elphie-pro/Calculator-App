import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1>Calculator</h1>
      <div className="box">
        <div className="display">
          {"0"}
        </div>
        <div className="buttons">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>0</button>
          <button>.</button>
         </div>
         <div className="special">
         <button className='clear'>C</button>
          <button className='div'>%</button>
          <button className='per'>/</button>
         <button className='equal'>=</button>
         </div>
      </div>
    </div>
    </>
  )
}

export default App
