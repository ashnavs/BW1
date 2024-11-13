//parent to child
// import './App.css'
// import Child from './Child'

// function App() {
//   const message = 'Hi from parent'

//   return (
//     <>
//      <h2>Parent Component</h2>
//      <Child message={message}/>
//     </>
//   )
// }

// export default App



//child to parent
import React, { useState } from 'react'
import Child from './Child';
import Controlled_Component from './Controlled_Component';
import Uncontrolled_Component from './Uncontrolled_Component';
import CountryList from './CountryList';
import Counter from './Counter';
import EnhancedCounterDisplay from './HOC'
import CountdownTimer from './CountdownTimer';
import MyForm from './Form';

function App() {
  const [childMessage, setChildMessage] = useState('');

  const handleDataFromChild = (message) => {
    setChildMessage(message)
  }

  return (
    <div>
      {/* <h2>Parent Component</h2>
      <Child sendDatatoParent={handleDataFromChild}/>
      <h3>Message From Child: {childMessage}</h3> */}
      {/* <Controlled_Component/> */}
      {/* <Uncontrolled_Component/> */}
      {/* <CountryList/> */}
      {/* <Counter/> */}
      {/* <EnhancedCounterDisplay /> */}
      {/* <CountdownTimer startValue={20}/> */}
      <MyForm/>
    </div>
  )
}

export default App


