import React from 'react';
import { Link } from 'react-router-dom';
import image from './TRANSPARENT LOGO.png';

const ContactPage = () => {
  return (
    <div>
      <div className="banner">
        <Link to="/home" className="logo-link">
          <img src={image} alt="Logo" />
        </Link>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </div>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>Feel free to reach out to us for any inquiries or feedback.</p>
          <div className="contact-details">
          </div>
        </div>
        <form className="contact-form">
          <h2>Send us a message</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
