import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Community } from "./pages/Community";
import { GameDetails } from "./pages/GameDetails";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className="min-h-screen bg-background text-text flex flex-col font-sans transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/game/:id" element={<GameDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
