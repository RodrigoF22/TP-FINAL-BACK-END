import React, {useState} from 'react'
import house from './Assets/House.png'
import cart from './Assets/Cart.png'
import handlens from './Assets/HandLens.png'
import logo from './Assets/Logo.png'
import {HomePage, DetailPage, CartPage, ContactPage} from './Screens'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div>
        <nav className='navBar'>
          <img className='logo' src={logo}/>
          <div className='input'>
            <input type="text" placeholder='Search goods...'/>
            <img src={handlens}/>
          </div>
          <div className='navBar-links'>
            <NavLink to = '/contact' className='navBar-links-contact'>Contact</NavLink>
            <NavLink to = '/' className='item'><img src={house}/></NavLink>
            <NavLink to = '/searchgoods' className='navBar-links-handlens'><img src={handlens}/></NavLink>
            <NavLink to = '/cart' className='item'><img src={cart}/></NavLink>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path = '/contact/' element = {<ContactPage/>}/>
          <Route path = '/cart/' element = {<CartPage/>}/>
          <Route path='/detail/:pid' element={<DetailPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
