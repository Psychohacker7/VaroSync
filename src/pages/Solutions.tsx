import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Target, FileText, Atom } from 'lucide-react';

function Solutions() {
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
              <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
              <p className="text-xl text-white/80 mb-8">
                Innovative computational approaches to solve complex health challenges
              </p>
            </motion.div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-violet-100 flex items-center justify-center">
                  <img src="/solution1.png" alt="Solution 1" className="h-32 w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Circadian Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced algorithms to analyze and optimize circadian rhythms for improved health outcomes.
                  </p>
                  <a href="#" className="text-violet-600 font-medium flex items-center gap-2 hover:text-violet-700">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Solution Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <img src="/solution2.png" alt="Solution 2" className="h-32 w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Sleep Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    Data-driven insights and personalized recommendations to improve sleep quality and duration.
                  </p>
                  <a href="#" className="text-violet-600 font-medium flex items-center gap-2 hover:text-violet-700">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Solution Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <img src="/solution3.png" alt="Solution 3" className="h-32 w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Health Monitoring</h3>
                  <p className="text-gray-600 mb-4">
                    Continuous health monitoring through wearable integration and AI-powered analytics.
                  </p>
                  <a href="#" className="text-violet-600 font-medium flex items-center gap-2 hover:text-violet-700">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <Target className="w-6 h-6 text-violet-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-navy-900 text-xl mb-2">Precision Health</h5>
                      <p className="text-gray-600">Tailored health insights based on individual physiology and data patterns.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <FileText className="w-6 h-6 text-violet-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-navy-900 text-xl mb-2">Comprehensive Analysis</h5>
                      <p className="text-gray-600">Multi-factor health modeling that considers various physiological parameters.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Atom className="w-6 h-6 text-violet-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-navy-900 text-xl mb-2">Advanced Technology</h5>
                      <p className="text-gray-600">Cutting-edge AI and computational models for accurate health predictions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="/features.png" 
                  alt="Features Visualization" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Solutions; 