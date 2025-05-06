import React from 'react';
import { ArrowRight, Target, FileText, Atom, Book, PenTool as Tool, Trophy, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const countUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#E6E1FE' }}>
      {/* Hero Section with Responsive Video Background */}
      <div className="relative min-h-screen overflow-hidden bg-[#E6E1FE]">
        {/* Mobile Video Background (true background, only on mobile) */}
        <div className="absolute inset-0 min-h-screen w-full h-full z-0 desktop-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={`${import.meta.env.BASE_URL}mobile3Dencod.mp4`}
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
        </div>
        {/* Desktop Video Background */}
        <div className="absolute inset-0 overflow-hidden mobile-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={`${import.meta.env.BASE_URL}desktop3D.mp4`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
        </div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center min-h-screen pt-16 md:pt-0">
          <div className="w-full md:max-w-4xl md:text-right text-white">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                variants={fadeIn}
              >
                <span className="text-violet-400">Design </span>
                <span className="text-navy-900">Smarter</span>
                <br />
                <span className="text-navy-900">Treat </span>
                <span className="text-violet-400">Better</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-navy-900 mb-8 leading-relaxed"
                variants={fadeIn}
              >
              VaroSync is pioneering chronobiology-driven therapeutics. By integrating AI with circadian biology,
              we’re redefining drug design, testing, and delivery to boost discovery success across diverse modalities.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex md:justify-end justify-center">
                <Link 
                  to="/solutions"
                  className="inline-flex items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-full font-medium hover:bg-violet-700 transition-colors"
                >
                  Explore Our Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-24" style={{ backgroundColor: '#EDE9FE' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-4xl font-bold text-navy-900 text-center mb-16"
              variants={fadeIn}
            >
              Success Stories
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Phase III Trial Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Reduced trial variability by 40% through circadian-aware patient stratification in a major hypertension study.
                </p>
                <div className="text-violet-600 font-medium">Read Case Study →</div>
              </motion.div>

              {/* Case Study 2 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Atom className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Drug Response Prediction</h3>
                <p className="text-gray-600 mb-4">
                  Achieved 85% accuracy in predicting time-dependent drug responses using our Omu™ platform.
                </p>
                <div className="text-violet-600 font-medium">Read Case Study →</div>
              </motion.div>

              {/* Case Study 3 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Clinical Validation</h3>
                <p className="text-gray-600 mb-4">
                  Successfully validated circadian biomarkers in a 1000+ patient cohort across multiple therapeutic areas.
                </p>
                <div className="text-violet-600 font-medium">Read Case Study →</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16" style={{ backgroundColor: '#EDE9FE' }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-navy-900 text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Our Partners
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {['partnera', 'partnerb', 'partnerc'].map((partner, index) => (
              <motion.div 
                key={partner}
                className="h-48 w-96 grayscale hover:grayscale-0 transition-all duration-300"
                variants={fadeIn}
              >
                <img
                  src={`${import.meta.env.BASE_URL}partners/${partner}.png`}
                  alt={`${partner} logo`}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
