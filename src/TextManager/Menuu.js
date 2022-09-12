import React from 'react'
import loogoo from "./loogo.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import "./Menuu.css"
function Menuu() {
  const [active ,setActive]=useState(true)
  const togglehand=()=>{
    setActive(!active)
  }
  return (
    <div className={`main-bar ${active?null:'heighht'}`}>
      <div className='hamburger'  onClick={togglehand}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
     <div className={`loogo ${active ? 'visibility':null}`}  >
        <img src={loogoo} alt="logo"></img>
     </div>
     <div className={`itemms ${active?'visibility':null}`}>
      <Link to='/' className='mmen'>Home</Link>
      <Link to='/About' className='mmen'>About</Link>
     </div>
     <div className={`icn ${active ? 'visibility':null}`}>
      <SocialIcon className='sicns'  url="https://www.linkedin.com/in/usama-awan-55690321b"/>
      <SocialIcon className='sicns' url="https://www.facebook.com/profile.php?id=100014936949600"/>
      <SocialIcon className='sicns' url="https://github.com/USAMA-NUSRAT"/>
     </div>
    </div>
  )
}

export default Menuu