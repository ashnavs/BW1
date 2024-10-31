// //parent to child
// import React from 'react'

// function Child({message}) {
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>Message from parent: {message}</p>
//     </div>
//   )
// }

// export default Child


//child to parent
import React from 'react'

function Child({sendDataToParent}) {
    const messageToParent = () => {
        sendDataToParent('Hello Im child')
    }
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={messageToParent}>Send Message</button>
    </div>
  )
}

export default Child

