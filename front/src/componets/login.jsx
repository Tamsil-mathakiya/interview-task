import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../counterslice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(login({ email }));
        }
    };

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input id='email' type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;
