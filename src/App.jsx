import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/wishlist' element={<WishList/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
