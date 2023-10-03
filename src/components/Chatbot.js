import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import image from './TRANSPARENT LOGO.png';


const Chatbot = () => {
  const [file, setFile] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [showModal, setShowModal] = useState(false); // State for showing/hiding the modal
  const [showCharacterLimitModal, setShowCharacterLimitModal] = useState(false); // State for showing/hiding the character limit modal
  const [message, setMessage] = useState('');
  const [remainingCharacters, setRemainingCharacters] = useState(100000);
  const maxCharacterLimit = 100000;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    setShowModal(true);

  }, []);

  const closeModal = () => {
    setShowModal(false);
    setShowCharacterLimitModal(false);
  };

  const handleUpload = () => {
    if (file) {
      console.log('Uploaded file:', file);
    } else {
      console.log('No file selected.');
    }
  };

  const handleBrief = () => {
    console.log('Brief me clicked');
  };

  const handleSearch = () => {
    console.log('Search clicked');
  };

  const handlePrompt = () => {
    setShowIntro(false);
  };

  const handleMessageChange = (event) => {
    const inputValue = event.target.value;
    const remaining = maxCharacterLimit - inputValue.length;
    setMessage(inputValue);
    setRemainingCharacters(remaining);
  
    if (inputValue.length > maxCharacterLimit) {
      setShowCharacterLimitModal(true);
    } else {
      setShowCharacterLimitModal(false);
    }
  };   
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
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h2>Chatbot</h2>
        </div>
        <div className="chatbot-messages">{/* Chat messages */}</div>
        <div className="chatbot-input">
          <div className="input-row">
            <input
              type="text"
              className="form-control"
              placeholder="How can I assist you today?"
              value={message}
              onChange={handleMessageChange}
              maxLength={100000}
            />
            <span className="character-counter">{remainingCharacters}</span>
            <button onClick={handleBrief}>Brief me</button>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="upload-file-container">
            <input type="file" onChange={handleFileChange} />
            <button className="choose-file-btn" onClick={handleUpload}>Upload File</button>
          </div>
        </div>
      </div>
      {/* Character Limit Modal */}
      {showCharacterLimitModal && (
        <Modal
          isOpen={showCharacterLimitModal}
          onRequestClose={closeModal}
          contentLabel="Character Limit Exceeded"
          className="modal"
        >
          <div className="modal-content">
            <h2>Character Limit Exceeded</h2>
            <p>Your message has exceeded the maximum character limit of {maxCharacterLimit} characters.</p>
            <p>Please sign up to continue using the chatbot and access extended features.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
      <div className="pop-up">
        {/* Modal */}
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Chatbot Tutorial"
          className="modal"
        >
          <div className="modal-content">
            <h2>How do I use the Sumtext Chatbot?</h2>
            <p>
              <ul>
                <li>Start by typing or pasting your text into the input box.</li>
                <li>Click the "Brief Me" button for the chatbot to summarize the text for you.</li>
                <li>Type your search query into the input box for search result summaries from our browser.</li>
                <li>Click the "Search" button for the chatbot to summarize the search results for you.</li>
                <li>Sign up to be allowed to use more characters and upload documents for instant summarization.</li>
              </ul>
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Chatbot;
