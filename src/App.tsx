import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/search' element={</>} /> */}
        {/* <Route path="/pictureOfTheDay" element={<></>}/> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>    
  )
}

export default App
