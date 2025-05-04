import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, FileText, Atom, Brain, Clock, Microscope, Code2, Database, LineChart, Activity } from 'lucide-react';

function Solutions() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
              <h1 className="text-5xl font-bold mb-6">The Omu™ Platform</h1>
              <p className="text-xl text-white/80 mb-8">
                Our proprietary engine for circadian-aware analytics, simulation, and patient stratification.
              </p>
            </motion.div>
          </div>
        </div>

        {/* NEW Section: OmuTM Technology Explanation (from Platform.tsx) */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center"
                variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
              >
                Introducing Omu™ Technology
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-12 text-center"
                variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Omu™ is a composable software architecture that enables pharmaceutical R&D and clinical teams to integrate circadian biology into drug discovery. Built with flexibility and scalability in mind, Omu™ can ingest multimodal types including: structured and unstructured EHR data, Traditional clinical trial case report forms and others currently in development.
              </motion.p>
              {/* Placeholder for Visual Aid */}
              <motion.div 
                className="bg-gradient-to-br from-violet-50 to-blue-50 p-8 rounded-lg shadow-md text-center mb-12"
                variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Atom className="w-16 h-16 text-violet-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-navy-900 mb-2">Visual Aid Placeholder</h3>
                <p className="text-gray-600">[A diagram or animation illustrating the Omu™ concept would go here]</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEW Section: Under the Hood (from Platform.tsx) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center"
                variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
              >
                Under the Hood: A Scientific Stack
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-12 text-center"
                variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Omu™ is powered by a suite of models developed from first principles in circadian biology, combined with probabilistic and sequential machine learning methods. Each module is tuned to a specific stage of the therapeutic lifecycle, from trial design to postmarket surveillance.
              </motion.p>
              {/* Placeholder for Diagrams */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 mb-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
              >
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow text-center">
                  <Code2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-navy-900">Modeling Core</h4>
                  <p className="text-gray-600 text-sm">[Diagram/Details about core models: Circadian, Probabilistic, Sequential ML]</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow text-center">
                  <Database className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-navy-900">Data Integration</h4>
                  <p className="text-gray-600 text-sm">[Diagram/Details about data ingestion: EHR, Wearables, Genomics etc.]</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* NEW Section: Visual Technology Showcase (Placeholder) */}
        <section className="py-20">
           <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto">
               <motion.h2 
                 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center"
                 variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
               >
                 Visual Technology Showcase
               </motion.h2>
               <motion.p 
                 className="text-lg text-gray-700 mb-12 text-center"
                 initial="initial" whileInView="animate" viewport={{ once: true }}
                 variants={fadeIn}
                 transition={{ duration: 0.6, delay: 0.1 }}
               >
                 See Omu™ in action. Explore examples of how our technology visualizes complex biological data and provides actionable insights.
               </motion.p>
               {/* Placeholder for Examples */}
               <motion.div 
                 className="bg-gray-100 p-8 rounded-lg shadow-inner text-center"
                 variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
               >
                 <Microscope className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                 <h3 className="text-2xl font-semibold text-gray-700 mb-2">Showcase Examples Coming Soon</h3>
                 <p className="text-gray-600">[Interactive demos, case study visuals, or screenshots would go here]</p>
               </motion.div>
             </div>
           </div>
         </section>

        {/* NEW Section: Benefits and Features (Placeholder structure, merge content later) */}
        <section className="bg-gradient-to-br from-violet-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Benefits & Features</h2>
            <motion.div 
               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
               initial="initial" whileInView="animate" viewport={{ once: true }}
               transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            >
              {/* Example Feature Card */}
              <motion.div 
                variants={fadeIn}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow"
              >
                <Clock className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold text-navy-900 text-xl mb-2">Circadian Phase Estimation</h5>
                  <p className="text-gray-600">Accurately estimate internal biological time using multimodal data sources.</p>
                </div>
              </motion.div>
               <motion.div 
                 variants={fadeIn}
                 className="flex items-start gap-4 bg-white p-6 rounded-lg shadow"
               >
                 <Activity className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                 <div>
                   <h5 className="font-semibold text-navy-900 text-xl mb-2">Fatigue Risk Scoring</h5>
                   <p className="text-gray-600">Compute real-time fatigue indices based on circadian alignment and sleep.</p>
                 </div>
               </motion.div>
               <motion.div 
                 variants={fadeIn}
                 className="flex items-start gap-4 bg-white p-6 rounded-lg shadow"
               >
                 <Target className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                 <div>
                   <h5 className="font-semibold text-navy-900 text-xl mb-2">Time-Based Stratification</h5>
                   <p className="text-gray-600">Group participants by latent time-driven subtypes to reduce trial variability.</p>
                 </div>
               </motion.div>
              {/* Placeholder for more...
               <motion.div variants={fadeIn} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">...</motion.div>
               <motion.div variants={fadeIn} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">...</motion.div>
               <motion.div variants={fadeIn} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">...</motion.div> 
              */}
            </motion.div>
          </div>
        </section>

        {/* Original Solutions Grid - Commented out for now */}
        {/*
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              // Solution Card 1 ... 
              // Solution Card 2 ... 
              // Solution Card 3 ... 
            </div>
          </div>
        </div>
        */}

        {/* Original Features Section - Commented out for now */}
        {/*
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              // Original features content ...
            </div>
          </div>
        </div>
        */}
      </main>
    </div>
  );
}

export default Solutions; 