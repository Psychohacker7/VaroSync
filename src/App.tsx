import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  // Handle route changes, background color, and scroll to top
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    const path = location.pathname;
    let newBgColor = routeBackgrounds['/'];
    for (const key of Object.keys(routeBackgrounds)) {
      if (key === '/') {
        if (path === '/') {
          newBgColor = routeBackgrounds['/'];
          break;
        }
      } else if (path.startsWith(key)) {
        newBgColor = routeBackgrounds[key];
        break;
      }
    }
    setBgColor(newBgColor || '#FFFFFF');

    // Set route changing state
    setIsRouteChanging(true);
    // Reset loading state after a short delay to allow for route transition
    const routeTimer = setTimeout(() => {
      setIsRouteChanging(false);
    }, 100);

    return () => clearTimeout(routeTimer);
  }, [location.pathname]);

  // Handle initial page load
  useEffect(() => {
    // Set initial loading state
    setIsLoading(true);
    
    // Reset loading state after a short delay
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(loadTimer);
  }, []);

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
          {(isLoading || isRouteChanging) ? (
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
                <Route path="*" element={<Navigate to="/" replace />} />
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
    <Router>
      <Layout />
    </Router>
  );
}

export default App;