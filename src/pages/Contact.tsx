import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

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

function Contact() {
  return (
    <div className="min-h-screen bg-[#e6c8c8] flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          className="bg-[#e6c8c8] overflow-hidden min-h-[420px] pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] items-start w-full h-full">
            {/* Image Column */}
            <motion.div 
              className="flex justify-start items-start h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full h-auto rounded-2xl overflow-hidden pt-[15.5px] pl-[15.5px] pb-[15.5px]">
                <img
                  src={`${import.meta.env.BASE_URL}contact.png`}
                  alt="Contact us"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              className="flex flex-col justify-start items-start h-full"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="pt-[15.5px] pr-4 text-right">
                <motion.h1 
                  className="text-5xl md:text-6xl mb-6 text-gray-900 antialiased font-normal leading-relaxed"
                  variants={itemVariants}
                >
                  Contact Us
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6"
                  variants={itemVariants}
                >
                  Get in touch with our team to learn more about our solutions and how we can help advance your research and development efforts.
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 max-w-2xl"
                  variants={itemVariants}
                >
                  Whether you're interested in partnerships, have questions about our technology, or want to explore collaboration opportunities, we're here to help.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section 
          className="py-12 md:py-16 bg-[#f8f9fa] relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full relative px-[18px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] items-center w-full h-full min-h-[400px]">
              {/* Contact Information */}
              <motion.div 
                className="md:col-span-1 flex flex-col justify-center h-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="mb-6 md:mb-0"
                  variants={itemVariants}
                >
                  <div className="space-y-10 mb-8 pl-2 pr-8">
                    <motion.div className="flex items-start gap-4" variants={itemVariants}>
                      <MapPin className="w-7 h-7 text-violet-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy-900 text-xl md:text-2xl mb-1">Our Location</h3>
                        <p className="text-gray-600 text-lg md:text-xl">New York, New York, NY 10019</p>
                      </div>
                    </motion.div>
                    
                    <motion.div className="flex items-start gap-4" variants={itemVariants}>
                      <Mail className="w-7 h-7 text-violet-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy-900 text-xl md:text-2xl mb-1">Email Us</h3>
                        <p className="text-gray-600 text-lg md:text-xl">partnerships@varosync.com</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                className="md:col-span-2 bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center h-full max-w-2xl w-full ml-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <form action="https://getform.io/f/axoyyvwb" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default Contact; 