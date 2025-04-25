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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-stretch relative">
        {/* Left content section */}
        <div className="lg:w-1/2 space-y-6 ml-auto pl-4 pr-4 py-16 lg:max-w-[50%] z-10">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-violet-500">Design </span>
            <span className="text-navy-900">Smarter</span>
            <br />
            <span className="text-navy-900">Treat </span>
            <span className="text-violet-500">Better</span>
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed">
          At Varosync, we believe the future of precision medicine lies not only in genetics or biomarkers — but in time. Every cell in the human body operates on a circadian rhythm, a deeply conserved 24hour cycle that regulates everything from hormone secretion to immune function. Yet despite decades of evidence, biological time remains almost completely ignored in clinical research, drug development, and digital health.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
          We are here to change that. Varo means power, and Sync represents synchronize, a powerful message of aligning strength and precision to achieve harmony. Varosync is building a new foundation for clinical trials and personalized care, one that recognizes time as a core variable in physiology, disease progression, and therapeutic response. Using cutting-edge machine learning, biological modeling, and real-world patient data, we deliver circadian aware analytics and infrastructure that power a new class of temporal medicine.</p>
          
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

      {/* Scientific Rationale Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                Our Scientific Rationale
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-violet-500 mb-8">
                Why Circadian Biology Matters
              </h3>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-6 text-lg text-gray-600">
              <p>
                The human body is not static, it is rhythmic. Core clocks in the brain's suprachiasmatic
                nucleus (SCN) orchestrate daily rhythms in gene expression, metabolism, hormone levels,
                and immune cell activity. These internal rhythms persist even in isolation from external cues
                and have been shown to shape disease symptoms and therapeutic responses across a
                broad spectrum of disorders.
              </p>

              <p>
                Recent studies, including a 2024 MIT-led paper, have confirmed what circadian biologists
                have known for decades: more than half of all drugs approved by the FDA exhibit time-of-day
                dependent efficacy and toxicity. Yet, most clinical trials still assume the body is the same at
                9 AM and 9 PM. This leads to lost therapeutic opportunities, statistical noise, and
                underpowered results.
              </p>

              <p>
                Chronobiology has emerged as a powerful lens to improve drug design, dosing schedules,
                and patient stratification.
              </p>

              <div className="bg-white rounded-xl p-8 mt-8">
                <h4 className="text-xl font-bold text-navy-900 mb-4">
                  The implications are especially profound for therapeutic areas like:
                </h4>
                <ul className="space-y-3 list-disc list-inside text-gray-600">
                  <li>Hypertension, where blood pressure naturally fluctuates across the day</li>
                  <li>Type 2 diabetes, with known time-of-day differences in insulin sensitivity</li>
                  <li>Oncology, where circadian regulation affects cell division and DNA repair</li>
                  <li>Autoimmune and inflammatory conditions, shaped by daily immune rhythms</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Clinical Research Gap Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-8">
                The Clinical Research Gap
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Despite compelling biological and pharmacological rationale, circadian timing is rarely
                incorporated into trial design. This oversight creates multiple systemic problems:
              </p>

              <div className="grid gap-6 mb-12">
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-violet-500">
                  <h3 className="font-bold text-navy-900 mb-2">Trial inefficiencies</h3>
                  <p className="text-gray-600">
                    Patients who receive treatment at suboptimal times introduce
                    uncontrolled variance, diluting drug effects.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-violet-500">
                  <h3 className="font-bold text-navy-900 mb-2">Stratification bias</h3>
                  <p className="text-gray-600">
                    Standard inclusion criteria miss latent timebased phenotypes,
                    undermining subgroup discovery.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-violet-500">
                  <h3 className="font-bold text-navy-900 mb-2">Posthoc explanations</h3>
                  <p className="text-gray-600">
                    Poor primary outcomes may stem from temporal mismatch
                    rather than molecular inefficacy but go undiagnosed.
                  </p>
                </div>
              </div>

              <div className="bg-navy-900 text-white rounded-xl p-8">
                <p className="text-lg mb-4">
                  The status quo is costly. A recent industry analysis found that the average cost of a single
                  Phase III trial exceeds $21 million, and nearly 50% of trials fail to meet endpoints.
                </p>
                <p className="text-lg font-medium text-violet-300">
                  By ignoring biological time, we may be missing the most actionable, cost-efficient layer of
                  personalization.
                </p>
              </div>
            </motion.div>
          </motion.div>
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
                <div className="text-4xl font-bold text-navy-900 mb-2">1000+</div>
                <div className="text-gray-600">Simulated hours of PK/PD dynamics under circadian aware dosing schedules</div>
              </motion.div>

              <motion.div 
                variants={countUpAnimation}
                className="bg-white rounded-3xl p-8"
              >
                <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Tool className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">8+</div>
                <div className="text-gray-600">Therapeutic areas supported by our circadian stratification modules</div>
              </motion.div>

              <motion.div 
                variants={countUpAnimation}
                className="bg-white rounded-3xl p-8"
              >
                <div className="bg-yellow-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">5M+</div>
                <div className="text-gray-600">Data points from EHRs and wearables are integrated for circadian phase estimation</div>
              </motion.div>

              <motion.div 
                variants={countUpAnimation}
                className="bg-white rounded-3xl p-8"
              >
                <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">5+</div>
                <div className="text-gray-600">Timesensitive drug response profiles modeled using Omu® for trial optimization</div>
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
              <Link 
                to="/research" 
                className="bg-white text-violet-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Publications
                <ArrowRight className="w-5 h-5" />
              </Link>
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
    </div>
  );
}

export default Home;
