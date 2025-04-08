import React from 'react';
import { ArrowRight, Target, FileText, Atom, Book, PenTool as Tool, Trophy, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-stretch relative">
        {/* Left content section */}
        <div className="lg:w-1/2 space-y-6 ml-auto pl-4 pr-4 py-16 lg:max-w-[50%] z-10">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-violet-500">Optimize</span>
            <br />
            <span className="text-navy-900">Human Health</span>
            <br />
            <span className="text-navy-900">With AI</span>
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed">
          At Varosync, we harness the power of synchronization to revolutionize healthcare. Combining computational biology, deep learning, and data-driven insights, we create innovative solutions to improve health outcomes and empower individuals to live healthier lives. 
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
          Varo means power, and Sync represents synchronize, a powerful message of aligning strength and precision to achieve harmony. We aim to align cutting-edge technology with human biology for a future where healthcare is smarter, personalized, and accessible for all.
          </p>
          
          <button className="bg-navy-900 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-navy-800 transition-colors">
            Partner With Us
          </button>
        </div>
        
        {/* Right image section */}
        <div className="lg:w-1/2 overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}protein-structure.png`}
            alt="Protein Structure Visualization"
            className="w-full h-full object-contain object-right"
          />
        </div>
      </div>

      {/* Platform Section */}
      <div className="py-24" style={{ backgroundColor: "#171b5d" }}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Left side */}
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Platform
              </h2>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="relative -mx-4 md:-mx-8 lg:-mx-12 -my-8">
                  <img 
                    src={`${import.meta.env.BASE_URL}backgromu.png`}
                    alt="Platform Visualization"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right side */}
            <motion.div variants={fadeIn} className="text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Omu® Computational Health Platform
              </h3>
              <p className="text-lg text-white/80 mb-8">
              A cloud-based platform for circadian rhythm analysis and health optimization, powered by AI, physiology, and real-world data..
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-[#282484] px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
                  Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Solution Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-start"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Left side */}
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Technology
              </h2>
              <div className="relative">
                <img 
                  src={`${import.meta.env.BASE_URL}technology.png`}
                  alt="Solution Visualization"
                  className="rounded-xl w-full"
                />
              </div>
            </motion.div>

            {/* Right side */}
            <motion.div variants={fadeIn}>
              <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                Omu® - Deep Learning and Physiological Modeling
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Harnessing biology and AI to decode the "secrets" of sleep, by modeling the suprachiasmatic nucleus -SCN-. As the circadian pacemaker of the human body, it gives rise to the 24-hour cycle of our physiology, mood, and behavior, and when combines with patient data from wearables and genomics, it tells us what is causing the sleep disorders.
              </p>
              <button className="bg-navy-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-navy-800 transition-colors mb-12">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-navy-900 mb-6">
                Unlocking Personalized Insights for:
                </h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Target className="w-6 h-6 text-navy-900 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-navy-900">Complex Health Challenges</h5>
                      <p className="text-gray-600">Circadian rhythm disorders, metabolic dysfunctions, neurological conditions, mental wellness</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FileText className="w-6 h-6 text-navy-900 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-navy-900">Specific Requirements</h5>
                      <p className="text-gray-600">Sleep phase estimation, biological alignment, multi-factor health modeling, wearable-inferred biomarkers,...</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Atom className="w-6 h-6 text-navy-900 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-navy-900">Given Modality</h5>
                      <p className="text-gray-600">Computational modeling, AI-powered diagnostics, real-world wearable & genomic data integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Success Stories Section */}
      <div className="bg-violet-600 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={staggerChildren}
            >
              <motion.div 
                variants={countUpAnimation}
                className="bg-white rounded-3xl p-8"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Book className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">Growing</div>
                <div className="text-gray-600">Network of clinicians and researchers</div>
              </motion.div>

              <motion.div 
                variants={countUpAnimation}
                className="bg-white rounded-3xl p-8"
              >
                <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Tool className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">10+</div>
                <div className="text-gray-600">Research collaborations exploring AI-driven sleep insights</div>
              </motion.div>

              <motion.div 
                variants={countUpAnimation}
                className="bg-white rounded-3xl p-8"
              >
                <div className="bg-yellow-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">200+</div>
                <div className="text-gray-600">Hours of wearable data analyzed for precision health</div>
              </motion.div>

              <motion.div 
                variants={countUpAnimation}
                className="bg-white rounded-3xl p-8"
              >
                <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">5+</div>
                <div className="text-gray-600">Physiological models developed for circadian health</div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={fadeIn} className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Success Stories
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Proven Science, Trusted Partners
              </h3>
              <p className="text-lg text-white/90 mb-8">
              We are actively collaborating with research institutions and healthcare providers to validate our models and expand the boundaries of circadian health diagnostics.
              </p>
              <button className="bg-white text-violet-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
                Publications
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">
            Our Partners
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24">
            {/* Partner logos from public folder */}
            <div className="h-16 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}partnera.png`} 
                alt="Partner A Logo" 
                className="h-full object-contain"
              />
            </div>
            
            <div className="h-16 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}partnerb.png`} 
                alt="Partner B Logo" 
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
