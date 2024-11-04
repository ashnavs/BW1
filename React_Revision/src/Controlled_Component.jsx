import React, { useState } from 'react'

function Controlled_Component() {
    const [inputValues, setInputvalues] = useState('')

    const handleChange = (e) => {
        setInputvalues(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Submitted values: ${inputValues}`);
        
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={inputValues} onChange={handleChange} />
        </label>
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Controlled_Component
