import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Technology from './pages/Solutions';
import Company from './pages/Company';
import Contact from './pages/Contact';
import News from './pages/News';

// Define background colors for routes
const routeBackgrounds: { [key: string]: string } = {
  '/':    '#E6E3FF',    
  '/solutions': '#c8d7e6',
  '/company':   '#cde6c8', 
  '/news':      '#e6d4c8', 
  '/contact':   '#e6c8c8', 
};

function Layout() {
  const location = useLocation();
  const [bgColor, setBgColor] = useState(routeBackgrounds['/'] || '#FFFFFF');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const path = location.pathname;
    // Find matching background, fallback to white
    const newBgColor = Object.keys(routeBackgrounds).find(key => path.startsWith(key) && key !== '/') 
                        ? routeBackgrounds[Object.keys(routeBackgrounds).find(key => path.startsWith(key) && key !== '/')!]
                        : routeBackgrounds['/']; 
    setBgColor(newBgColor || '#FFFFFF');
    // Optionally update document body background too
    // document.body.style.backgroundColor = newBgColor || '#FFFFFF'; 

    // Set loading state when route changes
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <div 
      className="flex flex-col min-h-screen transition-colors duration-300" 
      style={{ backgroundColor: bgColor }}
      data-path={location.pathname}
    >
      <Header currentRouteBgColor={bgColor} />
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50"
            >
              <div className="w-12 h-12 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
            </motion.div>
          ) : (
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="w-full"
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={<Technology />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer currentRouteBgColor={bgColor} />
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