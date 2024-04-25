import './App.css'
import React, { useState } from 'react';
import { BrowserRouter, Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

// Register Component
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3001/auth/register', { username, password, email });
      setRegistered(true);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  if (registered) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <div className="form-field">
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div className="form-field">
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="form-field">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <button onClick={handleRegister}>Register</button>
      <a href="http://localhost:3001/auth/google" className="google-btn">Register with Google</a>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:3001/auth/login', { username, password });
      setLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if (loggedIn) {
    return <Navigate to="/user/success" />;
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form-field">
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div className="form-field">
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <a href="http://localhost:3001/auth/google/redirect" className="google-btn">Login with Google</a>
    </div>
  );
};

// SuccessfulLogin Component
const SuccessfulLogin = () => {
  return (
    <div>
      <h2>Successfully Logged In!</h2>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/user/success" element={<SuccessfulLogin />} />
        <Route path="/" element={<Navigate to="/auth/register" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
