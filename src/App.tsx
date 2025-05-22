import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Potd from './pages/potd/Potd'
import Search from './pages/search/Search'
import Favorites from './pages/Favorites'
import Acknowledgements from './pages/Acknowledgements'
import { useReducer } from 'react'
import favoritesReducer from './reducers/favoritesReducer'

function App() {

const storedFavorites = localStorage.getItem('favorites');
const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

const [favorites, dispatchFavorites] = useReducer(favoritesReducer, parsedFavorites);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/potd' element={<Potd />} />
        <Route path="/search" element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/acknowledgements' element={<Acknowledgements />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
