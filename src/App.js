import React from 'react'

import {} from '@material-ui/core'
import Home from './Page/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Page/Login'
import Signup from './Page/Signup'

export default function App() {
 
  return (
    <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
    </>
  )
}
