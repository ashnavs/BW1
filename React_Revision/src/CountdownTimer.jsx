import React, { useEffect, useState } from 'react'
import './App.css'

function CountdownTimer({startValue}) {
    const [count,setCount] = useState(startValue)

    useEffect(()=>{
        if(count<=0) return

        const timer = setTimeout(()=>{
            setCount(count-1)
        },1000)

        return() => clearTimeout(timer)
    },[count])
  return (
    <div>
      <h2>Counter:{count}</h2>
    </div>
  )
}

export default CountdownTimer
