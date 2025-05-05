import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Company from './pages/Company';
import Contact from './pages/Contact';
import News from './pages/News';
import Careers from './pages/Careers';

// Define background colors for routes
const routeBackgrounds: { [key: string]: string } = {
  '/':    'rgba(233, 229, 253, 1)',       // Home - Fully Transparent for video
  '/solutions': 'rgba(26, 35, 126, 0.5)', // Navy tint (70% opacity)
  '/company':   'rgba(26, 35, 126, 0.5)', // Navy tint (70% opacity)
  '/news':      'rgba(26, 35, 126, 0.5)', // Navy tint (70% opacity)
  '/careers':   'rgba(107, 33, 168, 0.5)',// Purple tint (70% opacity)
  '/contact':   'rgba(26, 35, 126, 0.5)', // Navy tint (70% opacity)
};

function Layout() {
  const location = useLocation();
  const [bgColor, setBgColor] = useState(routeBackgrounds['/'] || '#FFFFFF');

  useEffect(() => {
    const path = location.pathname;
    // Find matching background, fallback to white
    const newBgColor = Object.keys(routeBackgrounds).find(key => path.startsWith(key) && key !== '/') 
                        ? routeBackgrounds[Object.keys(routeBackgrounds).find(key => path.startsWith(key) && key !== '/')!]
                        : routeBackgrounds['/']; 
    setBgColor(newBgColor || '#FFFFFF');
    // Optionally update document body background too
    // document.body.style.backgroundColor = newBgColor || '#FFFFFF'; 
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300" style={{ backgroundColor: bgColor }}>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout />
    </Router>
  );
}

export default App;