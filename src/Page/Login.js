import React, { useState } from 'react'
import AlertDialog from '../components/AlertDialog'
import LoginForm from '../components/LoginForm/LoginForm'

const Login = ({ alert, showAlert }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  return (
    <>
     <AlertDialog alert={alert}/>
      <LoginForm credentials={credentials} setCredentials={setCredentials} showAlert={showAlert} alert={alert} />
    </>
  )
}
export default Login