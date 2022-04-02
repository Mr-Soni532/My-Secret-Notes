import React from 'react'
import LoginStyles from './login.module.css'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import useStyles from '../../config/Style'
import { Link, useNavigate } from 'react-router-dom'
import svg from '../../logo-light.svg'
const LoginForm = ({ credentials, setCredentials }) => {
    const navigate = useNavigate();
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //! Api call for login  
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate('/');
            // showAlert('Logged in Successfully', 'success');

        } else { console.log('error') }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <Box className={LoginStyles.boxArea}>
            <div className={LoginStyles.outerPallet}>
                <Box style={{marginBottom: '5px'}}>
                    <img src={svg} alt="" />
                </Box>
                <Typography variant='h5' color='primary' align='center' >
                    Login
                </Typography>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        inputProps={{ className: classes.input }}
                        InputLabelProps={{ className: classes.input }}
                        id="standard-basic"
                        label="Email Address"
                        variant="standard"
                        name='email'
                        value={credentials.email}
                        onChange={onchange}
                        fullWidth
                        margin='dense'
                        color='primary' />

                    <TextField
                        inputProps={{ className: classes.input }}
                        InputLabelProps={{ className: classes.input }}
                        type='password'
                        id="standard-basic"
                        value={credentials.password}
                        onChange={onchange}
                        name='password'
                        label="Password"
                        variant="standard"
                        fullWidth
                        margin='dense'
                        color='primary' />

                    <Button
                        type='submit'
                        variant="contained"
                        color="secondary"
                        fullWidth
                        className={classes.login_btn}>
                        Login
                    </Button>

                    <Typography color='primary' align='center' className=''>
                        Don't have an account?
                    </Typography>

                    <Typography color='primary' align='center' >
                        <Link to='/signup' className={classes.signup_link}>
                            Sign up here
                        </Link>
                    </Typography>
                </form>
            </div>
        </Box>
    )
}
export default LoginForm