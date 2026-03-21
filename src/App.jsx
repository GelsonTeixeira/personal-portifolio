import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { useTheme } from './hooks/useTheme';
import { lightTheme, darkTheme, terminalTheme } from './styles/themes';
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import HireMe from "./pages/HireMe/hireme";
import ChatBot from "./components/ChatBot/ChatBot";
import TerminalBoot from "./components/TerminalBoot/TerminalBoot";
import './index.css';

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
  terminal: terminalTheme,
};

function App() {
  const { theme, cycleTheme } = useTheme();
  const [booting, setBooting] = useState(false);
  const [prevTheme, setPrev] = useState(theme);

  useEffect(() => {
    if (theme === "terminal" && prevTheme !== "terminal") {
      setBooting(true);
    }
    setPrev(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      {booting && (
        <TerminalBoot onComplete={() => setBooting(false)} />
      )}
      <Router>
        <Navbar theme={theme} cycleTheme={cycleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-portifolio/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hireme" element={<HireMe />} />
        </Routes>
        <ChatBot />
      </Router>
    </ThemeProvider>
  );
}

export default App;
