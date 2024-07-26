import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import LoginPage from './pages/LoginPage.js';
import Footer from './components/Footer/Footer.js';
import HomePage from './pages/HomePage.js';
import UserPage from './pages/UserPage.js';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
