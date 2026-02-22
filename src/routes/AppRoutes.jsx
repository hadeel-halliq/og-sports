import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Products from '../pages/Products/Products'
import ContactUs from '../pages/ContactUS/ContactUs'
import LogIn from '../pages/LogIn/LogIn'
import SignUp from '../pages/SignUp/SignUp'
import Cart from '../pages/Cart/Cart'
import Error from '../pages/Error/Error'
import Notification from '../pages/Notification/components/Notifications'
import MainLayOut from '../components/MainLayOut/MainLayOut'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayOut/>}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/notifications' element={<Notification/>}/>
      </Route>
      <Route path='/login' element={<LogIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}
