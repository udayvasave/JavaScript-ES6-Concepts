import React from 'react'
import { useState } from 'react';

const InputFields = ({onSubmit}) => {
    const [inputValue, setInputValue] =useState('');
const handleInputChange = (e)=> {
setInputValue(e.target.value);
}

const handleFormSubmit = (e)=> {
onSubmit(inputValue)
setInputValue('');
e.preventDefault();
}
  return (
    <div>
        Enter District
    <form onSubmit={handleFormSubmit}>
<input type="text" value={inputValue} onChange={handleInputChange} />
<button type='submit'>Submit</button>
</form>
    </div>
  )
}

export default InputFields