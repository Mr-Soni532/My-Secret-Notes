import React, { useContext } from 'react'
import { } from '@material-ui/core'
import { Route, Routes } from 'react-router-dom'
import Login from './Page/Login'
import Signup from './Page/Signup'
import Notes from './Page/Notes'
import AddNote from './Page/AddNote'
import AlertContext from './context/alert/AlertContext'

export default function App() {

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  return (
    <>
      <Routes>
        <Route path="/" element={<Notes showAlert={showAlert} alert={alert} />} />
        <Route path="/addnote" element={<AddNote showAlert={showAlert} />} />
        <Route path="/login" element={<Login showAlert={showAlert} alert={alert} />} />
        <Route path="/signup" element={<Signup showAlert={showAlert} alert={alert} />} />
      </Routes>
    </>
  )
}
