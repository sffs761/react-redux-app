import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import "./Login.css";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name:name,
                email:email,
                password:password,
                loggedIn: true,
            })
        );
    };
    return (
        <div className='login'>
            <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign In</h1>
                <p>Sign in and start managing your worklife!</p>
                <br></br>
                <input 
                type="name" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="email" 
                placeholder="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
                <p>Forgot password?</p>
                <p>
                    Not registered? <span className="bold_signUp">Sign up here!</span>
                </p>
                <br></br>
                <button type="Sign In" className="signIn_btn">
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default Login