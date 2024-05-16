import React, { useState } from 'react'

const InputForInsertElement = ({onSubmit}) => {
    const [input, setInput] = useState('');
    const [inputIndex, setInputIndex] = useState('');

const handleInputChange = (e)=>{
    setInput(e.target.value);
}
const handleIndexChange = (e)=>{
    setInputIndex(e.target.value)
}

const handleFormSubmit =(e)=>{
    e.preventDefault();

onSubmit(input, inputIndex);
setInput('');
setInputIndex('');
}
  return (
    <div>
<form onSubmit={handleFormSubmit}>
    <input type="text" placeholder='taluka' value={input} onChange={handleInputChange} />
    <input type="number" placeholder='index' value={inputIndex} onChange={handleIndexChange} />
    <button type="submit">Submit</button>
</form>
    </div>
  )
}

export default InputForInsertElement