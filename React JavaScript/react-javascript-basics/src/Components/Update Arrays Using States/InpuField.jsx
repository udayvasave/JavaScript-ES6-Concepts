import React, { useState } from 'react'

const InpuField = ({onSubmit}) => {
 const [inputValue, setInputValue] = useState('');
 
const handleChange =(e)=>{
 setInputValue(e.target.value);
}

const handleFormSubmit =(e)=> {
e.preventDefault();
onSubmit(inputValue);
setInputValue('');
}
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <input value={inputValue} onChange={handleChange} />
        </form>
    </div>
  )
}

export default InpuField