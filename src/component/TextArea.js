import React, { useState } from 'react'

const TextArea = () => {
    const [inputData,setInputData] = useState();
    const [letters,setLetters] = useState(0);
    const [words,setWords] = useState(0);

    const handleChange = (value) =>{
        setInputData(value);
        setWords(value.split(' ').length);
        value = value.replaceAll(' ','');
        console.log(value);
        setLetters(value.length);
    }

    const handleClickUpperCase = () =>{
        let value = inputData.toUpperCase();
        setInputData(value);
    } 

    const handleClickLowerCase = () =>{
        let value = inputData.toLowerCase();
        setInputData(value);
    }

    const handleClickTitleCase = () =>{
        let str = inputData.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        setInputData(str.join(' '));
    }

    const handleClickReset = () =>{
        setInputData('');
        setLetters(0);
        setWords(0);
    }

  return (
    <>
        <textarea aria-label='textarea' onChange={(e)=>handleChange(e.target.value)} value={inputData}></textarea>
        <button data-testid='uppercase' onClick={()=>handleClickUpperCase()}>UPPERCASE</button>
        <button data-testid='lowercase' onClick={()=>handleClickLowerCase()}>LOWERCASE</button>
        <button data-testid='titlecase' onClick={()=>handleClickTitleCase()}>TITLECASE</button>
        <button data-testid='reset' onClick={()=>handleClickReset()}>RESET</button>
        <p>The letter Count is <span data-testid='letter'>{letters}</span></p>    
        <p>The Words Count is <span data-testid='word'>{words}</span></p>    
        </>

  )
}

export default TextArea
