// import React from 'react'

// function CountryList() {
//     const countries = ['India','France','Germany','Japan','US']
//   return (
//     <div>
//       <h2>Country List</h2>
//       <ul>
//         {countries.map((country,index)=> (
//             <li key={index}>{country}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default CountryList



//including search
import React, { useState } from 'react'

function CountryList() {
    const countries = ['India','France','Germany','Japan','US']
    const [serachItem,setSearchItem] = useState('')

    const handleSearchChange = (e) => {
        setSearchItem(e.target.value)
    }

    const filteredCountries = countries.filter((country) => (
        country.toLowerCase().includes(serachItem.toLowerCase())
    ))
  return (
    <div>
      <h2>Country List</h2>
      <input type="text" placeholder='Search country...' value={serachItem} onChange={handleSearchChange} />
      <ul>
        {filteredCountries.length > 0 ? (
            filteredCountries.map((country,index) => (
                <li value={index}>{country}</li>
            ))
        ) : (
            <li>Countries not found</li>
        )}
      </ul>
    </div>
  )
}

export default CountryList

