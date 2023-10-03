import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Chatbot from './components/Chatbot';
import SearchEngine from './components/SearchEngine';
import Summary from './components/Summary';
import LoginPage from './components/Login';
import SignupPage from './components/SignUp';
import ContactPage from './components/Contact';
import IntroPage from './components/Intro';
import './style/chatbot.css'
import './style/contact.css'
import './style/login.css'
import './style/signup.css'
import './style/Intro.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/search" element={<SearchEngine />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;

