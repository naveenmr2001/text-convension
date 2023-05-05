import React, { useState } from 'react'

const TextArea = () => {
    const [inputData,setInputData] = useState();

    const handleClickUpperCase = () =>{
        let value = inputData.toUpperCase();
        setInputData(value);
    } 

    const handleClickLowerCase = () =>{
        let value = inputData.toLowerCase();
        setInputData(value);
    }

  return (
    <>
        <textarea aria-label='textarea' onChange={(e)=>setInputData(e.target.value)} value={inputData}></textarea>
        <button data-testid='uppercase' onClick={()=>handleClickUpperCase()}>UPPERCASE</button>
        <button data-testid='lowercase' onClick={()=>handleClickLowerCase()}>LOWERCASE</button>
    </>
  )
}

export default TextArea
