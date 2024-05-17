import React from 'react'
import InputFields from './InputFields'
import RemoveEleIndex from './RemoveEleIndex'
import { useState } from 'react'

const RemoveElement = () => {
const [district, setDistrict] = useState([])



const removeelementByIndex = (indexToRemove)=> {
const updatedArray= district.filter((dis, i) => {
    console.log(typeof(i));
    console.log(typeof(indexToRemove));
    return  i != indexToRemove
    })
console.log(updatedArray);

setDistrict(updatedArray)



}

const addDistrict = (newDistrict)=> {
setDistrict([...district,newDistrict])
}

const renderedElements = district.map((district, index)=>{
    return <li key={index}>{district}</li>
})

  return (
    <div>
<InputFields onSubmit={addDistrict} />
{renderedElements}
<hr />
<RemoveEleIndex  onSubmit={removeelementByIndex} />
    </div>
  )
}

export default RemoveElement