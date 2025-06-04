import React, { useState } from 'react';
import { ArrowRight, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Solutions.module.css';

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

function Solutions() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - now using Tailwind for layout */}
      <section className="bg-[var(--navy-900)] overflow-hidden min-h-[480px] pt-5 pb-8 md:pb-12">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-12 items-start w-full h-full">
            {/* Text Column */}
            <div className="flex flex-col justify-start items-start h-full pt-[15.5px] text-left px-4 md:px-0 md:pl-[15.5px]">
              <motion.h1 
                className="text-5xl md:text-6xl mb-6 text-gray-900 antialiased font-normal leading-relaxed"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                Technology
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                At the heart of our research and development lies a powerful, dual-pronged philosophy: to first understand the intricate complexity of human biology with unprecedented clarity, and then to rationally design and develop therapeutics of remarkable precision. We have cultivated a technology ecosystem that converges predictive, AI-driven science with a versatile, multi-modal therapeutic engine.
              </motion.p>
            </div>
            {/* Image Column */}
            <div className="flex justify-start items-start h-full px-4 md:px-0 md:pr-[15.5px]">
              <div className="w-full h-auto rounded-2xl overflow-hidden pt-[15.5px] pb-[15.5px]">
                <img
                  src={`${import.meta.env.BASE_URL}techillu.png`}
                  alt="Technology visualization"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END HERO SECTION */}

      <section className={styles.sectionTabs}>
        <div className={styles.tabsContainer}>
          {/* First Tab */}
          <div className={styles.tabSection}>
            <div className={styles.tabsComponent}>
              <div className={styles.tabsRight}>
                <div className={styles.tabsVideo}>
                  <video 
                    src={`${import.meta.env.BASE_URL}modelingpali.mp4`} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.videoElement}
                  />
                </div>
              </div>
              <div className={styles.tabsLeft}>
                <div className={styles.tabsLeftTop}>
                  <div className={styles.tabsLetContent}>
                    <h2>Modelling Human Biology</h2>
                    <p>
                      Varosync is building a new kind of engine, one that bridges biological complexity with computational clarity. Our platform integrates advanced machine learning with real-world data to uncover latent physiological signals and guide therapeutic design with greater precision.
                    </p>
                    <p>
                      By modelling multiscale biological processes ranging from gene expression dynamics to drug metabolism and tissue-level pharmacokinetics. We infer patient-specific trajectories that reflect the true heterogeneity of disease. Using deep learning to capture nonlinear interactions between molecular pathways, physiological rhythms, and external interventions. enabling the prediction of therapeutic outcomes with greater temporal and mechanistic resolution.
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <Clock className="w-8 h-8 text-violet-600" />
                      <span className="text-sm text-gray-600">Our approach reflects a foundational shift to design smarter and treat better.</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-8"
                    >
                      <Link
                        to="/contact"
                        className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
                      >
                        Learn more
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Tab */}
          <div className={styles.tabSection}>
            <div className={styles.tabsComponent}>
              <div className={styles.tabsLeft}>
                <div className={styles.tabsLeftTop}>
                  <div className={styles.tabsLetContent}>
                    <h2>Computational Design</h2>
                    <p>
                      Our computational platform integrates diverse data streams to model complex biological systems. By combining machine learning with mechanistic modeling, we can predict how drugs will interact with biological targets and optimize therapeutic outcomes.
                    </p>
                    <p>
                      The platform enables us to rapidly iterate through potential drug candidates, identifying those with the highest likelihood of success while minimizing potential side effects. This approach accelerates the drug development process while maintaining rigorous scientific standards.
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <Target className="w-8 h-8 text-violet-600" />
                      <span className="text-sm text-gray-600">Precision-driven development for better patient outcomes.</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-8"
                    >
                      <Link
                        to="/contact"
                        className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
                      >
                        Learn more
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className={styles.tabsRight}>
                <div className={styles.tabsVideo}>
                  <video 
                    src={`${import.meta.env.BASE_URL}computpali.mp4`} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.videoElement}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions; 