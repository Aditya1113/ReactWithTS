import React from 'react'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Menu from './components/Menu'
import About from './Views/About'
import Home from './Views/Home'
import Login from './Views/Login'
import Profile from './Views/Profile'
import Protected from './Views/Protected'
import UserDetails from './Views/UserDetails'
import Users from './Views/Users'
import ViewNotFound from './Views/ViewNotFound'

const App = () => {
  return (
   <BrowserRouter>
   <Menu/>
   <Routes>
      <Route path='/' element={<Navigate to="login"/>}/>
      <Route path='home' element={<Protected Component={Home}/>}/>
      <Route path='about' element={<Protected Component={About}/>}/>
      <Route path='login' element={<Login/>}/> 
      <Route path='profile' element={<Protected Component={Profile}/>}/> 
      <Route path='users' element={<Protected Component={Users}/>}/> 
      <Route path='users/:id' element={<Protected Component={UserDetails}/>}/> 
      <Route path='*' element={<ViewNotFound/>}/> 
     
   </Routes>
   
   </BrowserRouter>
  )
}

export default App