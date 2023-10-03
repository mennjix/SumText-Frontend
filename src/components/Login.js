import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image2 from './TRANSPARENT LOGO.png';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
    return (
      <div>
      <div className="banner">
      <Link to="/home" className="logo-link">
        <img src= { image2 } alt="Logo" /></Link>
            <nav>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/signup" className="nav-link">Sign Up</Link>
              <Link to="/login" className="nav-link">Login</Link>
            </nav>
      </div>
     
      <div className="form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;