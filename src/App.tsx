import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home.tsx'
import Menu from './components/MenuWithDiscount/MenuWithDiscount.tsx';
import { Route, Routes , Navigate} from 'react-router-dom';
function App() {


  return (
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home  />} />
    <Route path="/menu" element={<Menu  />} />
  </Routes>
  )
}

export default App
