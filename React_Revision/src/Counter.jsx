import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)

    const increaseCount = () => {
        if(count<10){
            setCount(count+1)
        }
        
    }

    const decreaseCount = () => {
        if(count>0){
            setCount(count-1)
        }
        
    }

    const resetCount = () => {
        setCount(0)
    }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Counter
