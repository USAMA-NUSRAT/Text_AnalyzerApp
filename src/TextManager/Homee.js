import React from 'react'
import { useEffect } from 'react'
import "./Homee.css"
import { useRef } from 'react'
import { useState } from 'react'
function Homee() {
    const reef=useRef();

    const [text,setText]=useState('')
    const Toupper=()=>{
     setText(text.toUpperCase())
    }
    const Toclear=()=>{
        setText('')
    }
    useEffect(()=>{
        reef.current.focus()
    })
  return (
    <div className='container' >
        <h2 className='headd'>Convert your paragraph</h2>
        <div className='contain2'>
        <div className='textera'>
            <textarea ref={reef}   rows='15' onChange={(e)=>setText(e.target.value)} value={text}></textarea>
        </div>
        <div className='btns'>
            <button onClick={Toupper} >Uppercase</button>
            <button  onClick={()=>{setText(text.toLowerCase())}} >Lowercase</button>
            <button onClick={() => {navigator.clipboard.writeText(text); alert(`text copied`)}} >Copytext</button>
            <button  onClick={Toclear} >ClearText</button>
        </div>
        </div>
      
    </div>
  )
}

export default Homee