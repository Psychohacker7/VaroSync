import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Lightbulb, BarChart, Building2, Dna, Linkedin } from 'lucide-react';

function Company() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        {/* Hero Section with Background Pattern */}
        <div className="bg-navy-900 text-white py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("https://img.freepik.com/free-vector/pharmaceutical-drug-products-manufactured-from-biological-sources-biopharmacology-products-biological-medical-product-natural-pharmacy-concept_335657-5592.jpg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transform: 'rotate(-5deg) scale(1.2)',
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="text-6xl font-bold mb-6">Our Company</h1>
              <p className="text-xl text-white/80 mb-8">
                Pioneering the future of computational methods for health optimization
              </p>
            </motion.div>
          </div>
        </div>

        {/* About Section with Overlapping Cards */}
        <div className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-violet-100 rounded-full opacity-50"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold text-navy-900 mb-6">About Us</h2>
                  <h3 className="text-2xl font-bold text-violet-600 mb-4">Varosync's niche: biological time meets trial design.</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-violet-100 rounded-lg">
                          <Dna className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-navy-900 mb-2">Patient-Centered Technologies</h4>
                          <p className="text-lg text-gray-600">
                            Another advisor brings expertise in leveraging computational tools to analyze electronic
                            health records and design patient-centered technologies. Their Insights guide the development 
                            of our platform solutions that address complex healthcare challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://img.freepik.com/free-vector/pharmaceutical-drug-products-manufactured-from-biological-sources-biopharmacology-products-biological-medical-product-natural-pharmacy-concept-pinkish-coral-bluevector-vector-isolated-illustration_335657-1603.jpg"
                  alt="Pharmaceutical Illustration" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-navy-900/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner With Us Section with Visual Elements */}
        <div className="bg-gradient-to-br from-gray-50 to-violet-50 py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100 rounded-full transform translate-x-32 -translate-y-32 opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                variants={fadeIn}
              >
                <h2 className="text-4xl font-bold text-navy-900 mb-4">Partner With Us</h2>
                <p className="text-xl text-gray-600">
                  Whether you're designing a multisite trial or building a sleep health product, Varosync offers
                  the scientific infrastructure and tooling to incorporate circadian intelligence from day one.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-navy-100 rounded-lg">
                      <Building2 className="w-6 h-6 text-navy-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900">Columbia University Irving Medical Center Partnership</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      We are proud to collaborate with clinician-scientists and computational health experts from
                      Columbia University Irving Medical Center, a leading institution at the forefront of clinical
                      research and translational science.
                    </p>
                    <div className="bg-navy-50 rounded-lg p-4">
                      <p className="text-navy-900">
                        CUIMC is home to over 1,600 active clinical trials across a wide range of therapeutic areas,
                        supported by a robust infrastructure for data-driven innovation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Collaboration Focus</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="p-2 bg-violet-100 rounded-lg">
                          <Clock className="w-5 h-5 text-violet-600" />
                        </div>
                        <span className="text-gray-600">Developing circadian-aware trial methodologies</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="p-2 bg-violet-100 rounded-lg">
                          <BarChart className="w-5 h-5 text-violet-600" />
                        </div>
                        <span className="text-gray-600">Exploring AI-based patient stratification</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="p-2 bg-violet-100 rounded-lg">
                          <Users className="w-5 h-5 text-violet-600" />
                        </div>
                        <span className="text-gray-600">Integrating EHR workflows with temporal analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 text-white rounded-xl p-12 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'url("/wave-pattern.svg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}></div>
                </div>
                <div className="relative">
                  <p className="text-lg mb-6 leading-relaxed">
                    We are working closely with Columbia-affiliated advisors and researchers to embed
                    biological timing into how trials are designed, conducted, and analyzed — accelerating the
                    path from hypothesis to health impact.
                  </p>
                  <p className="text-3xl font-bold text-violet-300">
                    Together, we can Design Smarter and Treat Better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">Our Team</h2>
              
              <div className="prose prose-lg mx-auto mb-12">
                <p>
                  Varosync is built by a founding team that brings together a powerful combination of scientific and technical expertise at the forefront of healthcare innovation.
                </p>
                <p>
                  The team's foundation includes advanced study in fields such as Biomedical Engineering from institutions like Columbia University, alongside deep technical command in areas like applied mathematics. This blend provides a unique perspective on solving complex problems in healthcare.
                </p>
                <p>
                  Collectively, our expertise spans machine learning, enabling us to develop sophisticated predictive models and data analysis techniques. We possess strong capabilities in bioinformatics for interpreting complex biological data, and a solid understanding of clinical pharmacology, which guides our approach to drug development and treatment optimization. This multi-disciplinary background is the driving force behind our innovative solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Harry Kabodha</h3>
                  <p className="text-gray-600 mb-4">
                    Leveraging his background in Biomedical Engineering to lead our strategic vision and clinical focus.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/harrykabodha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:text-violet-700 font-medium inline-flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    View LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Advisory Board</h3>
                <p className="text-gray-600 mb-6">
                  We are guided by an expert Advisory Board comprised of leading academics and professionals in fields critical to our work.
                </p>
                <p className="text-gray-600">
                  Our advisors bring extensive experience and insights in clinical pharmacology and bioinformatics. Their collective knowledge helps inform our scientific direction, validate our approaches, and ensure our solutions are grounded in the latest research and clinical understanding. The guidance from our Advisory Board is invaluable in navigating the complexities of healthcare innovation and accelerating our progress.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blog Highlights Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Blog Highlights</h2>
              
              <div className="space-y-12">
                {/* Blog Post 1 */}
                <motion.div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  variants={fadeIn}
                >
                  <div className="h-64 bg-violet-100 relative overflow-hidden">
                    <img 
                      src="https://img.freepik.com/free-vector/drug-development-abstract-concept-vector-illustration-drug-discovery-research-development-pharmaceutical-industry-chemical-laboratory-scientific-experiment-medicine-study-abstract-metaphor_335657-2933.jpg"
                      alt="Clinical Trial Time Illustration" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                    <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white">
                      Why Your Clinical Trial is Probably Ignoring Time (and What That Costs You)
                    </h3>
                  </div>
                  <div className="p-8">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 mb-4">
                        In modern clinical research, enormous effort goes into randomization, blinding, and
                        subgroup analysis. Yet one of the most significant sources of variation in drug response —
                        biological time — is almost always left out.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Circadian rhythms affect everything from drug metabolism to immune responsiveness. Still,
                        most trials treat 8 a.m. and 8 p.m. as biologically equivalent moments. This assumption is
                        both biologically flawed and statistically costly.
                      </p>
                      <div className="bg-navy-50 rounded-lg p-6 my-6">
                        <p className="text-navy-900 font-medium">
                          Over 50% of FDA-approved drugs show time-of-day variation in efficacy or toxicity (MIT News, 2024).
                        </p>
                      </div>
                      <p className="text-gray-600">
                        Omu®, Varosync's pharmaceutical platform, uses Bayesian modeling to infer internal
                        circadian phase from EHR data and stratify participants accordingly.
                      </p>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-violet-600 font-medium mt-6 hover:text-violet-700">
                      Read full article
                      <BarChart className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Blog Post 2 */}
                <motion.div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  variants={fadeIn}
                >
                  <div className="h-64 bg-navy-100 relative overflow-hidden">
                    <img 
                      src="https://img.freepik.com/free-vector/biotechnology-isometric-composition-with-scientific-laboratory-equipment-research-process-vector-illustration_1284-83475.jpg"
                      alt="TimeTeller Evolution Illustration" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                    <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white">
                      From TimeTeller to Trials: How Circadian Models Went from Lab to Platform
                    </h3>
                  </div>
                  <div className="p-8">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 mb-4">
                        What began in academic labs as a tool for tracking circadian biology has now evolved into
                        high-impact software for clinical trials and digital health. The TimeTeller algorithm (Vlachou
                        et al., 2019) introduced a new approach to estimating internal time from molecular data.
                      </p>
                      <div className="bg-violet-50 rounded-lg p-6 my-6">
                        <p className="text-navy-900">
                          Using probabilistic PCA and EM-based inference, our models extract phase signals from even 
                          sparse or noisy input. With wearable accelerometer data, sleep logs, or even temperature 
                          variation, we reconstruct circadian timing and provide real-time readiness scoring.
                        </p>
                      </div>
                      <p className="text-gray-600 font-medium italic">
                        This translation — from genomic clocks to clinical clocks — marks a pivotal shift: timing
                        medicine is no longer a theory. It's a product.
                      </p>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-violet-600 font-medium mt-6 hover:text-violet-700">
                      Read full article
                      <Clock className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section with Interactive Cards */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-200 transition-colors">
                  <Lightbulb className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible in computational health.
                </p>
              </motion.div>
              
              <motion.div 
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-200 transition-colors">
                  <Users className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  We believe advanced health tools should be available to everyone, everywhere.
                </p>
              </motion.div>
              
              <motion.div 
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-200 transition-colors">
                  <BarChart className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest standards of scientific rigor and ethical practices.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Company; 