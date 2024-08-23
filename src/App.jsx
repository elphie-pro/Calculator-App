import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [previnput, setPrevinput] = useState(null)
  const [operation, setOperation] = useState(null)
  const [result, setResult] = useState(null)

  const handleInput = (value) => {
    setInput((prev) => prev + value)
  }

  const handleOperation = (op) => {
    setPrevinput(input)
    setOperation(op)
    setInput("")
  }

  const calculation = (prev, current, op) => {
    const previous = parseFloat(prev)
    const currentVal = parseFloat(current)
    switch(op) {
      case '+' :
        return previous + currentVal;
      case '-' :
        return previous - currentVal
      case '/' :
        return previous / currentVal
       case '*' :
         return previous *  currentVal
      case '%' :
        return previous/100 
      default:
      return currentVal
    }
  }

  const handleEqauls = () => {
    if(previnput && operation !== null) {
      const computation = calculation(previnput, input, operation)
      setResult(computation.toFixed(2))
      setInput(computation.toString())
      setPrevinput(null)
      setOperation(null)
    }
  }

  const handlClear = () => {
    setInput("")
    setOperation(null)
    setPrevinput(null)
    setResult(null)
  }


  return (
    <>
    <div className="container">
      <h1>Calculator</h1>
      <div className="box">
        <div className="display">
          {result || input || "0"}
        </div>
        <div className="buttons">
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleOperation('*')}>*</button>
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleOperation('+')}>+</button>
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleOperation('-')}>-</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput('.')}>.</button>
         </div>
         <div className="special">
         <button className='clear' onClick={handlClear}>C</button>
          <button className='div'onClick={() => handleOperation('%')}>%</button>
          <button className='per' onClick={() => handleOperation('/')}>/</button>
         <button className='equal'  onClick={handleEqauls}>=</button>
         </div>
      </div>
    </div>
    </>
  )
}

export default App
