//Parent to child
// import React from 'react'

// function Child({message}) {
//   return (
//     <div>
//       <h2>Child component</h2>
//       <p>{message}</p>
//     </div>
//   )
// }

// export default Child


//child to parent
import React from 'react'

function Child({sendDatatoParent}) {

    const sendMessageToParent = () => {
        sendDatatoParent('Hi I am child')
    }

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendMessageToParent}>Send Msg</button>
    </div>
  )
}

export default Child




