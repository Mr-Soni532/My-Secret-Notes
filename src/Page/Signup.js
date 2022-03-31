import React, { useState } from 'react'
import SignupForm from '../components/SignupForm/SignupForm'


const Signup = () => {
  
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: '',
    showPassword: false
  })
console.log(credentials)
  return (
    <SignupForm credentials={credentials} setCredentials={setCredentials}/>
  )
}

export default Signup