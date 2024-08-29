import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import TermsOfService from './Views/TermsOfService/TermsOfService';
import './App.scss';

function App() {
  return (
    <Router>
      <main className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
