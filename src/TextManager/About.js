import React from 'react'
import "./About.css"
import mine from "./imagey.jpeg"
function About() {
  return (
    <div  className='img-text'>
        <div className='picc'>
            <img src={mine} alt="mine pic "></img>
        </div>
        <div className='metext'>
            <h2> Hello, My&nbsp;name is <span>USAMA</span></h2>
            <p className="desc-text">
              Full stack web and mobile developer with background knoweldge of
              MERN stack with redux along with a knock of building applications
              with efficiency. Strong professional with a BSC wriiting to be an
              asset for an organization
            </p>
        </div>
        <div>
       
        </div>
    </div>
  )
}

export default About