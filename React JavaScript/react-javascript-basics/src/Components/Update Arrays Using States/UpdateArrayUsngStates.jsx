import React from 'react'
import { useState } from 'react'
import InpuField from './InpuField'

const UpdateArrayUsngStates = () => {
    
    const [fruits, setFruits] = useState([])

const addFruit = (newFruit)=> {
const updateFruit = [...fruits, newFruit ];
setFruits(updateFruit);
}

const renderFruit = fruits.map((fruit, i)=>{
    return <li style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'1rem', padding:'1rem',backgroundColor:'lightPink'}} key={i}>{fruit}</li>
})

  return (
    <div>
<div>
    <InpuField onSubmit={addFruit} />
    <ul >
        {renderFruit}
    </ul>
</div>
    </div>
  )
}

export default UpdateArrayUsngStates