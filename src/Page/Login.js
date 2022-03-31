import React, { useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  return (
    <LoginForm credentials={credentials} setCredentials={setCredentials} />
  )
}
export default Login