import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Potd from './pages/potd/Potd'
import Search from './pages/search/Search'
import Favorites from './pages/Favorites'
import Acknowledgements from './pages/Acknowledgements'
import { createContext, useReducer } from 'react'
import favoritesReducer from './reducers/favoritesReducer'
import type { Action } from './reducers/favoritesReducer';
import FavoritesDispatchProvider from './contextProviders/FavoritesDispatchProvider'

export const FavoritesDispatchContext = createContext<React.Dispatch<Action> | null>(null);

function App() {

  const storedFavorites = localStorage.getItem('favorites');
  const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, parsedFavorites);

  return (
    <>
      <FavoritesDispatchProvider dispatchFavorites={dispatchFavorites}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/potd' element={<Potd />} />
          <Route path="/search" element={<Search />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/acknowledgements' element={<Acknowledgements />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </FavoritesDispatchProvider>
    </>
  )
}

export default App
