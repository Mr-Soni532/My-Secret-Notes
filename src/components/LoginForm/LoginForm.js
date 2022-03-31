import React from 'react'
import LoginStyles from './login.module.css'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import useStyles from '../../config/Style'
import { Link } from 'react-router-dom'

const LoginForm = ({ credentials, setCredentials }) => {
    const classes = useStyles();

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <Box className={LoginStyles.boxArea}>
            <div className={LoginStyles.outerPallet}>
                <Typography variant='h4' color='primary' align='center' >
                    Login
                </Typography>

                <form noValidate autoComplete="off" >
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