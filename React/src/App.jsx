// //parent to child
import './App.css'
import Child from './Child'

function App() {
  const message = 'Hi from parent'
  return (
    <>
      <h2>Search component</h2>
      <Child message={message}/>
    </>
  )
}

export default App



//child to parent
// import React, { useState } from 'react'
// import Child from './Child'

// function App() {
//   const [childMesg,setChildMesg] = useState('')

//   const handleDataFromChilde = (message) => {
//     setChildMesg(message)
//   }
//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <p>Msg from the child:{childMesg}</p>
//       <Child sendDataToParent={handleDataFromChilde}/>
//     </div>
//   )
// }

// export default App

//Controlled component
// import React, { useState } from 'react'

// function ControlledForm() {
//     const [inputValues,setInputvalue] = useState('')

//     const handleChange = (e) => {
//         setInputvalue(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Submitted values:',inputValues);
        
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//             Name:
//             <input type="text" value={inputValues} onChange={handleChange} />
//         </label>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default ControlledForm


//Uncontrolled component
// import React, { useRef } from 'react'

// function UncontrolledForm() {
//     const inputuseRef = useRef(null)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('Submitted data:',inputuseRef.current.value);
        
//     }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name:
//             <input type="text" ref={inputuseRef}/>
//         </label>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default UncontrolledForm


