import React, { useEffect } from 'react';
import { ArrowRight, Target, Clock, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Solutions.module.css';

gsap.registerPlugin(ScrollTrigger);

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
  useEffect(() => {
    // Only keep sticky tab scroll logic below
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroHeight = windowHeight * 0.5; // Hero section is now 50vh
      const sections = document.querySelectorAll(`.${styles.tabsLetContent}`);
      const videos = document.querySelectorAll(`.${styles.tabsVideo}`);

      // Adjust scroll position to account for hero section
      const adjustedScrollY = scrollY - heroHeight;

      // First slide is always visible
      sections[0]?.classList.add(styles.is1);
      videos[0]?.classList.add(styles.is1);

      // Second slide appears when scrolling
      if (adjustedScrollY >= windowHeight * 0.5) {
        // When second slide appears, hide first slide
        sections[0]?.classList.remove(styles.is1);
        videos[0]?.classList.remove(styles.is1);
        // Show second slide
        sections[1]?.classList.add(styles.is1);
        videos[1]?.classList.add(styles.is1);
      } else {
        sections[1]?.classList.remove(styles.is1);
        videos[1]?.classList.remove(styles.is1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className={styles.introWrapper}>
        <div className={styles.intro}>
          {/* Hero Text */}
          <motion.div
            className={styles.textAlignCenter}
            id="js-pin"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-6xl mb-6 font-normal leading-relaxed"
              variants={itemVariants}
            >
              Technology
            </motion.h1>
            <motion.p 
              className="text-lg text-white/80"
              variants={itemVariants}
            >
              Varosync is pioneering a new class of biotherapeutics platform—combining the scientific rigor of a traditional pharma powerhouse with the speed and flexibility of a cutting-edge tech company. We leverage proprietary circadian-aware AI models to source, stratify, and optimize asset portfolios, advancing each candidate through critical milestones with data-driven precision. By unifying real-world health records, wearable signals, and molecular data into one end-to-end engine, our system streamlines decision-making across target discovery, dosing strategy, and clinical trial design—unlocking faster, smarter, and more reliable paths to life-changing therapies
            </motion.p>
          </motion.div>
          {/* Hero Image */}
          <motion.div
            className={styles.heroImageSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}techillu.png`} 
              alt="Technology visualization"
            />
          </motion.div>
        </div>
      </section>

      <motion.section 
        className={styles.sectionTabs}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className={styles.tabsHeight}>
          <div className={styles.tabsStickyWrapper}>
            <div className={styles.tabsContainer}>
              <div className={styles.tabsComponent}>
                {/* First Tab: Video left, Text right */}
                <div className={styles.tabsRight} style={{ gridColumn: 1 }}>
                  <div className={`${styles.tabsVideo} ${styles.is1} ${styles.firstTabVideoPad}`}>
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
                <div className={styles.tabsLeft} style={{ gridColumn: 2 }}>
                  <div className={styles.tabsLeftTop}>
                    {/* Tab 1 Content */}
                    <div className={`${styles.tabsLetContent} ${styles.is1}`}>
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
                {/* Second Tab: Text left, Video right (unchanged) */}
                <div className={styles.tabsLeft}>
                  <div className={styles.tabsLeftTop}>
                    {/* Tab 2 Content */}
                    <div className={styles.tabsLetContent}>
                      <h2>Computing Therapeutic Precision</h2>
                      <p>
                        Solving the most intricate challenges in medicine demands more than persistence; it requires a scientific lens capable of perceiving structure within complexity. At Varosync, we harness artificial intelligence not simply to automate workflows, but to interpret the latent architecture of biological systems.                      
                      </p>
                      <p>
                        Our models learn to classify high-dimensional, heterogeneous patient data, therefore identifying patterns invisible to the human eye. Through principled dimensionality reduction and temporal inference, we transform noise into signal and simulate pharmacological responses across populations with great speed and resolution. This capacity to generate, compress, and interrogate data enables us to traverse therapeutic landscapes once deemed intractable.
                      </p>
                      <div className="flex items-center gap-4 mt-6">
                        <Pill className="w-8 h-8 text-blue-600" />
                        <span className="text-sm text-gray-600">We improve predictive fidelity and extend therapeutic possibilities.</span>
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
                <motion.div 
                  className={styles.tabsRight}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className={`${styles.tabsVideo} ${styles.secondTabVideoPad}`}>
                    <video 
                      src={`${import.meta.env.BASE_URL}computpali.mp4`} 
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.videoElement}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Solutions; 