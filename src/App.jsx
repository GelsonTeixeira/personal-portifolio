import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
