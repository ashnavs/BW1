import React, { useRef } from 'react'

function Uncontrolled_Component() {

    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Submitted data: ${inputRef.current.value}`);
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" ref={inputRef} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled_Component
