import React, { useRef } from 'react'

function UncontrolledForm() {
    const useRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted data:',useRef.currunt.value);
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:
            <input type="text" ref={useRef}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm
