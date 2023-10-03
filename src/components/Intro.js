import React from 'react';
import { Link } from 'react-router-dom';
import image from './intro_img.png'
import image2 from './TRANSPARENT LOGO.png';

const IntroPage = () => {
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

    <div className="intro-page">
      <div className="intro-content">
        <div className="intro-text">
          <h1>DON'T WANT TO READ INTO IT?</h1>
          <p>SUMTEXT Chatbot is designed to assist you with all your lengthy text-related needs.
            Whether you're looking to summarize lengthy documents directly, summarize search results, 
            or just copy-paste lengthy texts. We got you covered!</p>
          <button className="intro-button">
            <Link to="/home">Get started</Link>
          </button>
        </div>
      <div className="intro-image">
          <img src= {image} alt="Intro Image" />
        </div>
    </div>
          {/* FAQ section */}
          <div className="faq-section">
          <h2>About SumText</h2>
          <div className="question-container">
            <div className="question-square">
              <h3>Who uses SUMTEXT?</h3>
              <p>Anyone who is curious enough to ask a question and can't bother to read the long answer, basically everyone.</p>
            </div>
            <div className="question-square">
              <h3>What languages does SUMTEXT work in?</h3>
              <p>Sumtext is currently only available for English paraphrasing -- however, we're hoping we can add additional options in the future!</p>
            </div>
            <div className="question-square">
              <h3>How do I use the Search Engine?</h3>
              <p>The Search Engine is integrated within our Chatbot. Just click the "Search" button after typing your query.</p>
            </div>
            <div className="question-square">
              <h3>What was SUMTEXT originally designed for?</h3>
              <p>Sumtext was created primarily as a text summarization tool to help students and professionals research more easily.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroPage;
