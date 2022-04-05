
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>

      </Routes>
    </div>
  )
}

export default App