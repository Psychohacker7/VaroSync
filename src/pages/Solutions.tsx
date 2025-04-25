import React from 'react';
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
                <div className="h-47 bg-violet-100 flex items-center justify-center">
                  <img 
                    src={`${import.meta.env.BASE_URL}helatvare provide.png`}
                    alt="Doctor" 
                    className="w-auto scale-100 -mb-5" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">👩‍⚕️ For Healthcare Providers</h3>
                  <p className="text-gray-600 mb-4">
                    We turn time into a vital sign for precision diagnosis and treatment planning.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">🕒</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Circadian Phase Estimation</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Leverage continuous wearable-derived activity, sleep, and heart-rate data to pinpoint each patient's internal clock time.</li>
                          <li>Visualize phase on a 24 h atlas, so you know if a symptom occurs in biological morning or evening.</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">🌍</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Circadian Misalignment Detection</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Run SCN-based simulations to detect jet lag, shift-work disorder, or social-jetlag patterns hidden in routine data.</li>
                          <li>Quantify the degree of misalignment between internal and external time, enabling targeted chronotherapy.</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">🔍</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Objective Sleep Disorder Differentiation</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Replace subjective sleep diaries with circadian biomarkers to distinguish delayed sleep-phase syndrome (DSPS), advanced sleep-phase, and insomnia.</li>
                          <li>Track phase shifts over days or weeks to monitor treatment response (light therapy, melatonin timing).</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">💡</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Chronotherapeutic Decision Support</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Get dosing-time recommendations for sleep medications, stimulants, or mood stabilizers based on individual phase.</li>
                          <li>Integrate with EHR workflows to flag patients who may benefit from time-tailored interventions.</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-600 italic mb-4">
                    → Our goal: empower clinicians with non-invasive, biologically driven insights—so you can diagnose faster, personalize treatment, and improve patient outcomes.
                  </p>
                  <a href="#" className="text-violet-600 font-medium flex items-center gap-2 hover:text-violet-700">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Solution Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-47 bg-blue-100 flex items-center justify-center">
                  <img src="https://img.freepik.com/free-vector/tiny-pharmacist-with-pills-vitamins-flat-vector-illustration-doctors-writing-prescriptions-antibiotics-working-together-helping-patients-cure-pharmacy-business-drugstore-concept_74855-23225.jpg" alt="Pharmaceutical Research" className="w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">💊 Pharmaceutical Companies</h3>
                  <p className="text-gray-600 mb-3">
                    Your circadian clock can influence drug response. We make that visible.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">🧪</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Modular, Therapeutic-Area Tailoring</h4>
                        <p>We integrate into your preclinical pipelines and trial workflows, with capabilities you can turn on or off depending on phase, data depth, and indication.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">⏰</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Chronopharmacology Modeling</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Model ADME (absorption, distribution, metabolism, elimination) across the 24 h cycle</li>
                          <li>Reveal off-target effects driven by biological time</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">🔍</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Time-Based Trial Stratification</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Infer circadian phenotypes from EHR or sensor data, even when timestamps are missing</li>
                          <li>Group participants by latent time-driven subtypes to reduce variability</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">⚙️</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Adaptive Temporal Design</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Support adaptive and pragmatic trials that treat time-of-day as a dosing or stratification axis</li>
                          <li>Re-randomize or adjust based on emerging temporal signals</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">📊</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Latent Variable Learning</h4>
                        <p>Use probabilistic latent-variable and EM models to detect hidden circadian subgroups in sparse datasets</p>
                      </div>
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
                <div className="h-47 bg-green-100 flex items-center justify-center">
                  <img src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg" alt="Corporate Wellness" className="w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">⌚ For Wellness & Wearables</h3>
                  <p className="text-gray-600 mb-4">
                    We turn wearables into real-time chronobiology labs.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">⚡</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">API-First Integration</h4>
                        <p>Embed clinically validated circadian metrics into your devices, apps, or platforms via our simple RESTful APIs.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">😴</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Fatigue & Shift-Work Risk Scoring</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Analyze sleep–wake timing, social jetlag, and circadian misalignment</li>
                          <li>Predict burnout risk, alerting users before performance lapses</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">🌗</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Circadian Phase Estimation</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Infer internal biological time from passive biometrics (heart rate, skin temperature, motion)</li>
                          <li>Provide users with their personalized "body clock" reading</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xl">🏋️</span>
                      <div>
                        <h4 className="font-semibold text-navy-900">Recovery & Performance Windows</h4>
                        <ul className="list-disc list-inside pl-1 space-y-1">
                          <li>Recommend optimal training, rest, and sleep periods based on physiological readiness</li>
                          <li>Help users maximize energy, focus, and recovery</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-600 italic mb-4">
                    → Empower your wellness or wearable product with actionable, time-aware insights that boost engagement and outcomes.
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
    </div>
  );
}

export default Solutions; 