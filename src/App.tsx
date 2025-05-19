import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Potd from './pages/Potd'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import Acknowledgements from './pages/Acknowledgements'

function App() {
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/potd' element={<Potd />} />
        <Route path="/search" element={<Search />}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/acknowledgements' element={<Acknowledgements />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>    
  )
}

export default App
