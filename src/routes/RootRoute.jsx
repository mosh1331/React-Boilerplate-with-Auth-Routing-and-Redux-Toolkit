import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Landing from '../pages/landing/Landing'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import Login from '../pages/auth/login/Login'
import Register from '../pages/auth/register/Register'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'

const RootRoute = () => {
  return (
    <Router>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
       
      </Route>             
      <Route element={<ProtectedRoute redirectPath={'/login'} />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default RootRoute