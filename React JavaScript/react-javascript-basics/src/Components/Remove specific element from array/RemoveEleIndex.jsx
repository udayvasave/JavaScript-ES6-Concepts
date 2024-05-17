import React, { useState } from 'react'

const RemoveEleIndex = ({onSubmit}) => {
    const [input, setInput] =useState();
  
    const handleChange = (e)=>{
        setInput(e.target.value);
    }


    const handleFormSubmit=(e)=>{
        // const numberinput = parseInt(10)
        e.preventDefault();
        const index = parseInt(input, 10);
        if(!isNaN(index)){
            onSubmit(index);
        }
       console.log(typeof(index));
// onSubmit(input);

setInput('');
    }

  return (
    <div>
        Enter Index
        <form onSubmit={handleFormSubmit} >
        <input type="number" value={input} onChange={handleChange} />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default RemoveEleIndex