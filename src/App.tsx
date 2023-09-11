import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home.tsx'
import MenuWithDiscount from './components/MenuWithDiscount/MenuWithDiscount.tsx';
import MainMenu from './components/MainMenu/MainMenu.tsx';
import { Route, Routes , Navigate} from 'react-router-dom';
function App() {


  return (
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home  />} />
    <Route path="/menu" element={<MenuWithDiscount  />} />
    <Route path="/mainmenu" element={<MainMenu  />} />
     
  </Routes>
  )
}

export default App
