import React, { useRef, useState } from 'react';
import { ArrowRight, Target, FileText, Atom, Book, PenTool as Tool, Trophy, Handshake, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '../components/Image';
import { Video } from '../components/Video';

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

  // Scroll-based animations for sticky sections
  const stickySection1Ref = useRef<HTMLDivElement>(null);
  const stickySection2Ref = useRef(null);
  const stickySection3Ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: stickySection1Ref,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: stickySection2Ref,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: stickySection3Ref,
    offset: ["start start", "end end"]
  });

  const imageY1 = useTransform(scrollYProgress1, [0, 1], ["0%", "-60%"]);
  const textY1 = useTransform(scrollYProgress1, [0, 0.9, 1], ["0px", "0px", "200px"]);
  const opacity1 = useTransform(scrollYProgress1, [0, 0.8, 1], [1, 1, 0]);

  const imageY2 = useTransform(scrollYProgress2, [0, 1], ["0%", "-100%"]);
  const opacity2 = useTransform(scrollYProgress2, [0, 0.8, 1], [1, 1, 0]);

  const imageY3 = useTransform(scrollYProgress3, [0, 1], ["0%", "-100%"]);
  const opacity3 = useTransform(scrollYProgress3, [0, 0.8, 1], [1, 1, 0]);

  // Video fade-in state
  const [mobileVideoReady, setMobileVideoReady] = useState(false);
  const [desktopVideoReady, setDesktopVideoReady] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#E6E3FF' }}>
      {/* Hero Section with Responsive Video Background */}
      <div className="relative h-screen md:h-screen overflow-hidden bg-[#E6E3FF]">
        {/* Mobile Video Background */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0 md:hidden overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileVideoReady ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ backgroundColor: '#E6E3FF' }}
        >
          <Video
            src={`${import.meta.env.BASE_URL}mobile3Dencod.mp4`}
            className="w-full h-full"
            loading="eager"
            poster={`${import.meta.env.BASE_URL}mobile3Dencod-poster.jpg`}
            onLoadedData={() => setMobileVideoReady(true)}
          />
        </motion.div>
        {/* Desktop Video Background */}
        <motion.div
          className="absolute inset-0 w-full h-full hidden md:block overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: desktopVideoReady ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ backgroundColor: '#E6E3FF' }}
        >
          <Video
            src={`${import.meta.env.BASE_URL}desktop3D.mp4`}
            className="w-full h-full"
            loading="eager"
            poster={`${import.meta.env.BASE_URL}desktop3D-poster.jpg`}
            onLoadedData={() => setDesktopVideoReady(true)}
          />
        </motion.div>
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center h-full pt-20 md:pt-0">
          <div className="w-full md:w-3/4 lg:w-3/4 text-right md:text-right">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="max-w-xl md:max-w-none mx-auto md:mx-0"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 font-normal leading-tight md:leading-relaxed"
                variants={fadeIn}
              >
                <span className="text-violet-400">Reimagine </span>
                <span className="text-navy-900">how</span>
                <br />
                <span className="text-navy-900">we </span>
                <span className="text-violet-400">treat</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-navy-900 mb-6 md:mb-8 leading-relaxed"
                variants={fadeIn}
              >
                We're entering a new era in medicine where advanced AI reveals hidden biological signals, enabling faster breakthroughs and more precisely targeted therapies. At Varosync, we're building that future.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* First Sticky Scroll Section */}
      <div ref={stickySection1Ref} className="relative bg-[#f5f3ff] overflow-hidden min-h-screen pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start w-full h-full px-6 md:px-4">
          {/* Text Column */}
          <div className="flex flex-col justify-start h-full">
            <div className="pt-0 md:pt-[15.5px] pl-0 md:pl-4">
              <p className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-gray-900 antialiased font-normal leading-tight md:leading-relaxed">
                A smarter approach to development
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
                Varosync is redefining the foundations of drug development while addressing complex patient needs across a range of therapeutic areas. We pursue innovation not through haste but clarity, ensuring every decision is guided by rigorous science and translational relevance.
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div className="flex justify-center md:justify-end items-start h-full">
            <div className="w-full md:w-auto h-auto rounded-2xl overflow-hidden pt-0 md:pt-[15.5px] pr-0 md:pr-[15.5px] pb-0 md:pb-[15.5px]">
              <Image
                src={`${import.meta.env.BASE_URL}graphic1.png`}
                alt="Technology visualization"
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
                transparent
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Sticky Scroll Section */}
      <div ref={stickySection2Ref} className="relative bg-[#f5f3ff] overflow-hidden min-h-screen pt-16 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-start w-full h-full px-6 md:px-4">
          {/* Image Column */}
          <div className="flex justify-center md:justify-start items-start h-full order-2 md:order-1">
            <div className="w-full md:w-5/6 h-auto rounded-2xl overflow-hidden pt-0 md:pt-[15.5px] pl-0 md:pl-[15.5px] pb-0 md:pb-[15.5px]">
              <Image
                src={`${import.meta.env.BASE_URL}funnelopt.png`}
                alt="Technology visualization"
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
                transparent
              />
            </div>
          </div>
          {/* Text Column */}
          <div className="flex flex-col justify-center items-start h-full order-1 md:order-2">
            <div className="pt-0 md:pt-[15.5px] pr-0 md:pr-4 text-left">
              <p className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-gray-900 antialiased font-normal leading-tight md:leading-relaxed">
                Using intelligence and insight
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
                As the science of discovery advances, the translation of molecular insight into viable therapies remains constrained by biological variability and complexity of real world data. At Varosync we believe that the solution lies in decoding the process. By integrating artificial intelligence with heterogeneous clinical datasets, we uncover latent physiological patterns. By resolving hidden variability in patient response, we strengthen the bridge between molecular potential and clinical efficacy. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-12 md:py-16" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="container mx-auto px-6 md:px-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-normal text-navy-900 text-center mb-8 md:mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Our Partners
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {['partnera', 'partnerb', 'partnerc'].map((partner, index) => (
              <motion.div 
                key={partner}
                className="h-32 sm:h-40 md:h-48 max-w-xs w-full grayscale hover:grayscale-0 transition-all duration-300 p-4 rounded-xl flex items-center justify-center"
                variants={fadeIn}
              >
                <Image
                  src={`${import.meta.env.BASE_URL}partners/${partner}.png`}
                  alt={`${partner} logo`}
                  className="h-full w-auto object-contain mx-auto"
                  loading="lazy"
                  transparent
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
