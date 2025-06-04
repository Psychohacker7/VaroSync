import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Lightbulb, BarChart, Building2, Dna, Linkedin, ArrowRight } from 'lucide-react';
import { FaBrain, FaCogs, FaClock as FaClockIcon, FaUniversity, FaUserMd, FaMicroscope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Image } from '../components/Image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function Company() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#cde6c8] flex flex-col">
      <main className="flex-grow">
        {/* About Hero Section */}
        <motion.section 
          className="bg-[#cde6c8] overflow-hidden min-h-[480px] pt-5 pb-8 md:pb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="companyHeroWrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-12 items-start w-full h-full">
              {/* Image Column */}
              <motion.div 
                className={(isMobile ? "mobileHeroImageWrapper px-[1rem] md:px-0" : "flex justify-start items-start h-full")}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className={isMobile ? "mobileHeroImageInner" : "w-full h-auto rounded-2xl overflow-hidden pt-[15.5px] pl-[15.5px] pb-[15.5px]"}>
                  <Image
                    src={isMobile ? `${import.meta.env.BASE_URL}mobilonlycompany.png` : `${import.meta.env.BASE_URL}combined.png`}
                    alt="Descriptive alt"
                    className={isMobile ? "mobileHeroImage rounded-[16px]" : "w-full h-auto object-cover rounded-2xl"}
                    loading="eager"
                    transparent
                  />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div 
                className={(isMobile ? "mobileHeroTextCol px-[1rem] md:px-0 pb-8" : "flex flex-col justify-start items-start h-full")}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className={isMobile ? "mobileHeroTextInner" : "pt-[15.5px] pr-4 text-left"}>
                  <motion.h1 
                    className="text-5xl md:text-6xl mb-6 text-gray-900 antialiased font-normal leading-relaxed"
                    variants={itemVariants}
                  >
                    About us
                  </motion.h1>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6"
                    variants={itemVariants}
                  >
                   Varosync was founded with a singular, clear-sighted ambition: to deliver transformative medicines that address the underlying drivers of disease. We believe the next frontier in human health lies in understanding and modulating the essential, dynamic processes that govern cellular function. Our purpose is to translate this profound biological understanding into a new generation of therapeutics, offering hope where there was none and pursuing treatments for some of the world's most challenging illnesses.
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-700 max-w-2xl"
                    variants={itemVariants}
                  >
                    Every day, with each new breakthrough, we're getting closer to achieving our ambitious mission to design smarter and treat better with the help of AI.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Partner With Us Section */}
        <motion.section 
          className="py-12 md:py-16 bg-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full relative px-[18px]">
            <div className="grid grid-cols-4 gap-[10px] items-center w-full h-full">
              {/* Text Column */}
              <motion.div 
                className="col-span-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="mb-6 md:mb-0"
                  variants={itemVariants}
                >
                  <h2 className="text-5xl md:text-6xl mb-6 font-normal leading-relaxed">Partner with us</h2>
                  <motion.p 
                    className="text-base md:text-lg text-gray-700 leading-relaxed"
                    variants={itemVariants}
                  >
                    Our culture of collaboration reaches well beyond our own walls and forms the foundation of every partnership, 
                    whether with pharmaceutical firms, biotechs, CROs, or other forward-thinking innovators. Our partnerships 
                    bring us together in pursuit of a common aim to develop medicines for those who need them most. 
                    Transformative discoveries demand tenacity, bold thinking, and true collaboration. That's why we champion rigorous, 
                    high-potential science at every stage, applying our expertise to help turn ambitious ideas into tangible breakthroughs. 
                    <motion.span 
                      className="block font-semibold text-navy-900 mt-4 text-lg md:text-xl"
                      variants={itemVariants}
                    >
                      Partnerships That Push Boundaries
                    </motion.span>
                  </motion.p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                  className="mt-10"
                >
                  <Link
                    to="/contact"
                    className="bg-gray-900 font-bold text-white px-6 py-3 rounded inline-flex items-center gap-2 hover:bg-gray-800 transition-colors group"
                  >
                    Reach out
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image Column */}
              <motion.div 
                className="col-span-1 h-full w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Image
                  src={`${import.meta.env.BASE_URL}partner.png`}
                  alt="Partner"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  transparent
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default Company; 