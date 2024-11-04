// import React, { useState } from 'react'

// function withCounter(WrappedComponent) {
//     return function EnhancedComponent(props){
//         const [count,setCount] = useState(0)

//         const increaseCount = () => {
//             if(count<10){
//                 setCount(count+1)
//             }
//         }

//         const decreaseCount = () => {
//             if(count>0){
//                 setCount(count-1)
//             }
//         }

//         const resetCount = () =>{
//             setCount(0)
//         }

//         return (
//             <div>
//               <WrappedComponent 
//               count = {count}
//               increaseCount={increaseCount}
//               decreaseCount={decreaseCount}
//               resetCount={resetCount}
//               />
//             </div>
//           )
//     }
 
// }


// function Counter({count,increaseCount,decreaseCount,resetCount}) {
//   return (
//     <div>
//       <h2>Counter:{count}</h2>
//       <button onClick={decreaseCount}>-</button>
//       <button onClick={increaseCount}>+</button>
//       <button onClick={resetCount}>reset</button>
//     </div>
//   )
// }

// const EnhancedCounterDisplay = withCounter(Counter)

// export default EnhancedCounterDisplay







import React, { useState } from 'react'

function WithCounter(WrappedComponent) {
    return function EnhancedElement(props){
        const [count,setCount] = useState(0)

        const increaseCount = () => {
            setCount(count+1)
        }


        const decreaseCount = () => {
            setCount(count-1)
        }

        const resetCount = () => {
            setCount(0)
        }

        return(
            <WrappedComponent
                count={count}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                resetCount={resetCount}
                {...props}
            />
        )
    }

}



function Counter({count,increaseCount,decreaseCount,resetCount}){
    return(
        <>
        <h2>Counter:{count}</h2>
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
        <button onClick={resetCount}>Reset</button>
        </>
    )
}

const EnhancedCounterComponent = WithCounter(Counter)

export default EnhancedCounterComponent
