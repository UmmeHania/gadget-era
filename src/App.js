
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import NotFound from './components/NotFound/NotFound'



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App