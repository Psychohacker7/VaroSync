import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function Company() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-navy-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="text-5xl font-bold mb-6">Our Company</h1>
              <p className="text-xl text-white/80 mb-8">
                Pioneering the future of computational methods for health optimization
              </p>
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-navy-900 mb-6">About Us</h2>
                <p className="text-lg text-gray-600 mb-4">
                At Varosync, we are redefining the future of healthcare through intelligent modeling of human biology. Our mission is to build a scalable biotech platform that combines computational modeling of physiological systems with real-world health data to diagnose and decode complex health conditions. We believe that personalized, predictive, and data-driven care should be accessible, precise, and proactive — starting with sleep, and expanding into broader areas of human health.
                </p>
              </div>
              
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}aboutus.png`} 
                  alt="About Varosync" 
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Our Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden text-center">
                <div className="h-64 bg-gray-200">
                    <div className="h-64 flex items-center justify-center">
                    <img 
                        src={`${import.meta.env.BASE_URL}johndoe.png`} 
                        alt="John Doe" 
                        className="h-full object-contain"
                    />
                    </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900">John Doe
                  </h3>
                  <p className="text-violet-600 mb-4">Chief Executive Officer</p>
                  <p className="text-gray-600">
                  Expert in computational modeling, genomics, and machine learning for health innovation. Holds an MS in Bioengineering from Columbia University and a BS in Engineering with a Finance minor from the University of Arkansas.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden text-center">
                <div className="h-64 bg-gray-200">
                    <div className="h-64 flex items-center justify-center">
                    <img 
                        src={`${import.meta.env.BASE_URL}johndoe.png`} 
                        alt="John Doe" 
                        className="h-full object-contain"
                    />
                    </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900">John Doe</h3>
                  <p className="text-violet-600 mb-4">Chief Technology Officer</p>
                  <p className="text-gray-600">
                    AI and machine learning specialist with a background in mathematical modeling and computational physics.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden text-center">
                <div className="h-64 bg-gray-200">
                    <div className="h-64 flex items-center justify-center">
                    <img 
                        src={`${import.meta.env.BASE_URL}johndoe.png`} 
                        alt="John Doe" 
                        className="h-full object-contain"
                    />
                    </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900">John Doe</h3>
                  <p className="text-violet-600 mb-4">Chief Scientific Officer</p>
                  <p className="text-gray-600">
                  Expert in computational mechanics, AI, and machine learning. Trained at Columbia Engineering in optimization, big data, causal inference, and neural networks. Specializes in Python and time series analysis for data-driven health solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-200 rounded-xl hover:border-violet-300 transition-colors">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-violet-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible in computational health.
                </p>
              </div>
              
              <div className="p-8 border border-gray-200 rounded-xl hover:border-violet-300 transition-colors">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-violet-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  We believe advanced health tools should be available to everyone, everywhere.
                </p>
              </div>
              
              <div className="p-8 border border-gray-200 rounded-xl hover:border-violet-300 transition-colors">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-violet-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest standards of scientific rigor and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Company; 