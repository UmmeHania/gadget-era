// import './App.css';
// import image from './Assets/Image/image.jpg'

// function App() {
//   return (
//     <div className="App">
//       <h1 className='text-center'>Start</h1>
//       <img className='h- w-30' src={image} alt="" />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App