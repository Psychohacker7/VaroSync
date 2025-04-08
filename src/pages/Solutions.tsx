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
                  <img src="https://img.freepik.com/free-vector/flat-illustrationhospital-reception-scene_52683-54940.jpg" alt="Doctor" className="w-auto" />
                  <div className="h-6"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">👩‍⚕️ Healthcare Providers</h3>
                  <p className="text-gray-600 mb-4">
                    We empower doctors to move beyond guesswork and surface-level symptom checklists.
                  </p>
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">🕒</span>
                      <span>Estimate circadian phase using wearable-derived activity and sleep data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">🌍</span>
                      <span>Detect internal misalignments such as jet lag or shift work disorder, through SCN-based simulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">🔍</span>
                      <span>Differentiate DSPS from insomnia with circadian phase markers instead of subjective sleep logs</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 italic mb-4">
                    → Our goal: to support accurate, timely diagnosis with non-invasive, biologically driven insights.
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
                  <img src="https://img.freepik.com/free-vector/tiny-pharmacist-with-pills-vitamins-flat-vector-illustration-doctors-writing-prescriptions-antibiotics-working-together-helping-patients-cure-pharmacy-business-drugstore-concept_74855-23225.jpg" alt="Pharmaceutical Research" className="w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">💊 Pharmaceutical Companies</h3>
                  <p className="text-gray-600 mb-4">
                    Your circadian clock can influence drug response. We make that visible.
                  </p>
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">🧠</span>
                      <span>Identify optimal dosing windows for sleep aids, antidepressants, and chronotherapeutics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">🔬</span>
                      <span>Model drug-binding behavior and stability over the circadian cycle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">🧬</span>
                      <span>Enable trial stratification by grouping participants based on circadian phenotypes</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 italic mb-4">
                    → Varosync helps you de-risk trials, reduce variability, and boost treatment precision.
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
                  <img src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg" alt="Corporate Wellness" className="w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">🏢 Corporate Wellness</h3>
                  <p className="text-gray-600 mb-4">
                    Healthy rhythms power healthier workplaces. We make it measurable.
                  </p>
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">📈</span>
                      <span>Personalized scheduling tools aligned with employee chronotype and work patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">⚠️</span>
                      <span>Predictive risk scoring for burnout, fatigue-related errors, and mood instability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">🧘</span>
                      <span>Drive better outcomes in employee energy, focus, and sleep quality</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 italic mb-4">
                    → Companies can now tailor wellness initiatives with a deep understanding of biological time.
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
                  src={`${import.meta.env.BASE_URL}platform.png`} 
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