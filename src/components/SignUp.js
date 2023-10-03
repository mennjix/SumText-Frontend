import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from './signup_img.jpg';
import image2 from './TRANSPARENT LOGO.png';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleCreditCard = (e) => {
    setCreditCard(e.target.value);
    setSubmitted(false);
  };

  const handleExpirationDate = (e) => {
    setExpirationDate(e.target.value);
    setSubmitted(false);
  };

  const handleCVV = (e) => {
    setCVV(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      creditCard === '' ||
      expirationDate === '' ||
      cvv === ''
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? '' : 'none' }}>
        <h2>User {name} successfully registered!</h2>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <h2>Please fill all the required fields.</h2>
      </div>
    );
  };

  return (
    <div>
      {/* Banner */}
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

      {/* Sign Up form */}
      <div className="signup-container">
        <div className="image-container">
          <img src={image} alt="Your Image" className="signup-image" />
        </div>
        <div className="signup-form">
          <h1>Sign Up</h1>

          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>

          <form>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleName}
              value={name}
              type="text"
              id="name"
              name="name"
              className="input"
            />

            <label htmlFor="email">Email</label>
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              id="email"
              name="email"
              className="input"
            />

            <label htmlFor="password">Password</label>
            <input
              onChange={handlePassword}
              value={password}
              type="password"
              id="password"
              name="password"
              className="input"
            />

            <label htmlFor="creditCard">Credit Card</label>
            <input
              onChange={handleCreditCard}
              value={creditCard}
              type="text"
              id="creditCard"
              name="creditCard"
              className="input"
            />

            <label htmlFor="expirationDate">Expiration Date (MM/YYYY)</label>
            <input
              onChange={handleExpirationDate}
              value={expirationDate}
              type="text"
              id="expirationDate"
              name="expirationDate"
              className="input-short"
            />

            <label htmlFor="cvv">CVV</label>
            <input
              onChange={handleCVV}
              value={cvv}
              type="text"
              id="cvv"
              name="cvv"
              className="input-shorter"
            />

            <button onClick={handleSubmit} type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
