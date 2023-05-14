import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
