// src/SignIn.js

import React, { useState } from 'react';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'user' && password === 'password') {
            alert('Sign in successful');
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1em' }}>
            <h2>Sign In</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1em' }}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ marginLeft: '1em' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '1em' }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ marginLeft: '1em' }}
                        />
                    </label>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
