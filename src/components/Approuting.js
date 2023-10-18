import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'

const Approuting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Approuting;
