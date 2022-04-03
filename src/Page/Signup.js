import React, { useState } from 'react'
import AlertDialog from '../components/AlertDialog'
import SignupForm from '../components/SignupForm/SignupForm'


const Signup = ({alert, showAlert}) => {

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: '',
    showPassword: false
  })
  console.log(credentials)
  return (
    <>
      <AlertDialog alert={alert}/>
      <SignupForm credentials={credentials} setCredentials={setCredentials} showAlert={showAlert}/>
    </>
  )
}

export default Signup