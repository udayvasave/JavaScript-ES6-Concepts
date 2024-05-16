import React, { useState } from 'react'
import InpuField from '../Update Arrays Using States/InpuField';
import InputForInsertElement from './InputForInsertElement';

const InsertElement = () => {
    const [taluka, setTaluka] =useState([]);

const addTaluka = (newTaluka,index)=>{
    const UpdateTaluka = [...taluka.slice(0,index),newTaluka,...taluka.slice(index)];
    setTaluka(UpdateTaluka);
}
const renderTaluka= taluka.map((taluka,i)=>{
    return  <li style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'1rem', padding:'1rem',backgroundColor:'lightPink'}} key={i}>{taluka}</li>
})

  return (
    <div>
<InputForInsertElement onSubmit={addTaluka} />
<ul>
    {renderTaluka}
</ul>
    </div>
  )
}

export default InsertElement