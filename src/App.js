import React from 'react'
import { } from '@material-ui/core'
import { Route, Routes } from 'react-router-dom'
import Login from './Page/Login'
import Signup from './Page/Signup'
import Notes from './Page/Notes'
import AddNote from './Page/AddNote'

import NoteState from './context/notes/NoteState'


export default function App() {

  return (
    <>
      <NoteState>
      <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/addnote" element={<AddNote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </NoteState>
    </>
  )
}
