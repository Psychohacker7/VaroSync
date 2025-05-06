import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Lightbulb, BarChart, Building2, Dna, Linkedin } from 'lucide-react';
import { FaBrain, FaCogs, FaClock as FaClockIcon, FaUniversity, FaUserMd, FaMicroscope } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const coreTeam = [
  {
    Icon: FaBrain,
    title: 'Machine Learning Specialist',
    description: 'Crafts predictive models to extract deep insights from complex healthcare data.',
  },
  {
    Icon: FaCogs,
    title: 'Biomedical Engineer',
    description: 'Designs robust engineering solutions for data-driven medical devices and workflows.',
  },
  {
    Icon: FaClockIcon,
    title: 'Chronopharmacology Lead',
    description: 'Optimizes drug delivery timing to maximize therapeutic efficacy and patient safety.',
  },
];

const advisors = [
  {
    Icon: FaUniversity,
    title: 'Academic Advisor',
    description: 'Renowned professors from top universities shaping our scientific strategy.',
  },
  {
    Icon: FaUserMd,
    title: 'Medical Advisor',
    description: 'From the frontlines of clinical research, ensuring our solutions are grounded in real-world needs.',
  },
  {
    Icon: FaMicroscope,
    title: 'Bioinformatics Advisor',
    description: 'Expertise in interpreting genomic and proteomic data with advanced analytics.',
  },
];

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
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-violet-100 rounded-lg">
                          <Dna className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-lg text-gray-600">
                          We were founded on a simple yet transformative insight. Time is a critical and underutilized dimension in medicine. 
                         By leveraging the capabilities of artificial intelligence, we model complex 
                          biological rhythms to guide drug design, anticipate therapeutic responses, and advance the development of precisely timed treatments for some of the world’s most challenging diseases. 
                          </p>
                          <br />
                          <p className="text-lg text-gray-600">
                          Every day, with each new breakthrough, 
                          we're getting closer to achieving our ambitious mission to <span className="font-bold text-navy-900">design smarter 
                          and treat better</span> with the help of AI.
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
                Our culture of collaboration reaches well beyond our own walls and forms the foundation of every partnership, 
                whether with pharmaceutical firms, biotechs, CROs, or other forward-thinking innovators.
                </p>
              </motion.div>

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
                  Our partnerships bring us together in pursuit of a common aim to develop medicines for those who need them most. 
                  Transformative discoveries demand tenacity, bold thinking, and true collaboration. That’s why we champion rigorous, 
                  high-potential science at every stage, applying our expertise to help turn ambitious ideas into tangible breakthroughs.
                  </p>
                  <p className="text-3xl font-bold text-violet-300">
                  <p className="text-3xl font-bold text-violet-300 text-center">
                    Partnerships That Push Boundaries
                  </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section Refactored */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <svg width="600" height="600" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EDE9FE" />
                  <stop offset="100%" stopColor="#E6E1FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center text-navy-900 mb-12"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Our Expertise...
            </motion.h2>

            {/* Core Team Roles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {coreTeam.map(({ Icon, title, description }, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Icon className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Advisory Roles */}
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2
                className="text-4xl font-bold text-center text-navy-900 mb-12"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                ...Guided by
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {advisors.map(({ Icon, title, description }, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <Icon className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">
                        {title}
                      </h3>
                      <p className="text-gray-600">
                        {description}
                      </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Company; 