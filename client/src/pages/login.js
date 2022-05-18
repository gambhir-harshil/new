import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <>
        <div className="whole">
        <div className="login_container" id="container">
	    <div className="form-container sign-in-container">
		<form className="loginform" onSubmit={handleSubmit}>
			<h1 className='head_sign'>Sign in</h1>
			<input className="login_input" type="email" placeholder="Email" id="exampleInputEmail1" name="email"
             onChange={handleChangeInput} value={email}/>
            <div className="pass">
			<input className="login_input" type={ typePass ? "text" : "password" }  placeholder="Password" id="exampleInputPassword1"
                   onChange={handleChangeInput} value={password} name="password"/>
            <small onClick={() => setTypePass(!typePass)}>
                    {typePass ? 'Hide' : 'Show'}
            </small>
            </div>
			<button className='login_btn'>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button type="submit" className="ghost" id="signIn" disabled={email && password ? false : true}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>We Social</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost login_btn" id="signUp"><Link className="signup" to="/register">Sign Up</Link></button>
			</div>
		</div>
	</div>
</div>
</div>
        </>
    )
}

export default Login
