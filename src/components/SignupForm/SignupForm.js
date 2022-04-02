import React from 'react'
import SignupStyles from './signup.module.css'
import useStyles from '../../config/Style'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import svg from '../../logo-light.svg'
import {
	Box,
	Button,
	FormControl,
	IconButton,
	TextField,
	Typography,
	InputLabel,
	Input,
	InputAdornment,
} from '@material-ui/core'

const SignupForm = ({ credentials, setCredentials }) => {
	const navigate = useNavigate();
	const classes = useStyles()

	//! On submit
	const onSubmit = async (data) => {

		//! Api call to backend for create user
		const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
		});
		const json = await response.json()

		//! Save the generated auth token to local Storage and redirect to home 
		if (json.success) {
			localStorage.setItem('token', json.authToken)
			navigate('/')
			// showAlert('Account Created Successfully', 'success')
		} else {/* {showAlert('Input valid details', 'warning')}*/ console.log('error') }
	}

	//!  React-Hook-Form
	const { register, handleSubmit, formState: { errors }, watch } = useForm({
		mode: 'onChange'
	});

	//! check password
	const password = watch('password');

	//! handle password eye 
	const handleShowPassword = () => {
		setCredentials({ ...credentials, showPassword: !credentials.showPassword })
	}

	//! Updating credentials State
	watch((value) => {
		// setCredentials({ ...credentials, [name]: value[name] })
		setCredentials({ ...credentials, ...value })
	})
	return (
		<Box className={SignupStyles.boxArea}>
			<div className={SignupStyles.outerPallet}>
				<Box style={{ marginBottom: '10px' }}>
					<img src={svg} alt="" />
				</Box>
				<Typography variant='h5' color='primary' align='center' >
					Create Account
				</Typography>

				<form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
					<TextField
						inputProps={{ className: classes.input }}
						InputLabelProps={{ className: classes.input }}
						id="standard-basic"
						label="Name"
						variant="standard"
						fullWidth
						margin='dense'
						color='primary'
						className={classes.TextField}
						{...register("name", { required: "Name is required" })}
					/>
					{errors.name && <span className={classes.errorMessage}>{errors.name.message}</span>}

					<TextField id="standard-basic"
						inputProps={{ className: classes.input }}
						InputLabelProps={{ className: classes.input }}
						// inputMode={{ className: classes.input }}
						label="Email Address"
						variant="standard"
						fullWidth
						margin='dense'
						color='primary'
						// onChange={onchange}
						{...register("email", {
							required: "Email is required",
							pattern: {
								// eslint-disable-next-line
								value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
								message: 'Enter a valid email address'
							}
						})}
					/>
					{errors.email && <span className={classes.errorMessage}>{errors.email.message}</span>}

					<FormControl className={classes.TextField} >
						<InputLabel htmlFor="standard-adornment-password" className={classes.input}>Password</InputLabel>
						<Input
							id="standard-adornment-password"
							type={credentials.showPassword ? 'text' : 'password'}
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 8,
									message: 'Enter atleast 8 characters password'
								}
							})}
							inputProps={{ className: classes.input }}
							// onChange={onchange}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleShowPassword}
										className={classes.input}
									>
										{credentials.showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
					{errors.password && <span className={classes.errorMessage}>{errors.password.message}</span>}

					<TextField type='password'
						inputProps={{ className: classes.input }}
						InputLabelProps={{ className: classes.input }}
						id="standard-basic"
						label="Confirm Password"
						variant="standard"
						fullWidth
						margin='dense'
						// onChange={onchange}
						{...register("cPassword", {
							required: "Confirm your password",
							validate: value => value === password || "Password does not match"
						})}
					/>
					{errors.cPassword && <span className={classes.errorMessage}>{errors.cPassword.message}</span>}

					<Button
						type='submit'
						variant="contained"
						color="secondary"
						fullWidth
						className={classes.login_btn}>
						Sign up
					</Button>

					<Typography color='primary' align='center' className=''>
						Already have an account?
					</Typography>

					<Typography color='primary' align='center' >
						<Link to='/login' className={classes.signup_link}>
							Login here
						</Link>
					</Typography>
				</form>
			</div>
		</Box>
	)
}

export default SignupForm