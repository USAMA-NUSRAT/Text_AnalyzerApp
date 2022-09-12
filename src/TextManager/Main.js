import React from 'react'

import Homee from './Homee';
import Menuu from './Menuu';
import About from './About';
import {Routes,  Route} from 'react-router-dom'
function Main() {
  return (
    <div className="Appp">
      <Menuu/>
      <Routes>
        <Route path='/' element={<Homee />} />
        <Route path='/About'element={<About />} />
      </Routes>
    </div>
  )
}

export default Main