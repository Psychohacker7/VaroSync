import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, BarChart, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ResearchPaper {
  title: string;
  authors: string;
  source: string;
  year: string;
  description: string;
  url: string;
  doi?: string;
  type: 'paper' | 'book' | 'article';
}

const blogPosts = [
  {
    id: 1,
    date: "2024",
    title: "AI Powers a New Era of Drug Discovery and Development",
    author: "Nature",
    excerpt: "This article discusses how the integration of artificial intelligence (AI) and big data is revolutionizing the drug discovery process. By combining AI with expert knowledge, pharmaceutical companies are accelerating the development of more effective medicines, reducing the time and cost traditionally associated with bringing new drugs to market. This hybrid approach is poised to provide new treatment options for patients worldwide.",
    category: "Research",
    size: "large",
    url: "https://www.nature.com/articles/d42473-024-00250-9"
  },
  {
    id: 2,
    date: "2023",
    title: "Molecular Free Energies, Rates, and Mechanisms from Data-Efficient Path Sampling Simulations",
    author: "Journal of Chemical Theory and Computation (ACS)",
    excerpt: "This paper introduces a data-efficient method for exploring reaction pathways and free energy surfaces using machine learning-enhanced path sampling. It highlights how physical priors and statistical inference can reduce simulation costs while improving mechanistic fidelity—an approach that aligns closely with our interest in model-driven simulations of pharmacokinetics and biomolecular interactions.",
    category: "Research",
    size: "medium",
    url: "https://pubs.acs.org/doi/10.1021/acs.jctc.3c00821"
  },
  {
    id: 3,
    date: "2024",
    title: "Starfysh Integrates Spatial Transcriptomic and Histologic Data to Reveal Heterogeneous Tumour–Immune Hubs",
    author: "Nature Biotechnology",
    excerpt: "This study introduces Starfysh, a computational framework that combines spatial transcriptomic data with histological context to identify cellular neighbourhoods within the tumour microenvironment. The method enables high-resolution mapping of tumour–immune interactions, uncovering functional hubs that are invisible to conventional analysis. For Varosync, this illustrates the power of integrative modelling in resolving biological heterogeneity.",
    category: "Research",
    size: "medium",
    url: "https://www.nature.com/articles/s41587-024-02173-8"
  },
  {
    id: 4,
    date: "2025",
    title: "Introducing Varosync",
    author: "",
    excerpt: "As we shape the future of pharma, we're proud to introduce Varosync.",
    category: "Tech",
    size: "medium",
    url: "https://www.varosync.com"
  },
];

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

function News() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.div 
          className="relative bg-[#e6d4c8] overflow-hidden min-h-[550px] pt-5 pb-8 md:pb-12 text-gray-900 flex flex-col justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pt-[15.5px] pr-8 pl-[10px] text-left relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="text-5xl md:text-6xl mb-6 text-gray-900 antialiased font-normal leading-relaxed">Blog</h1>
            </motion.div>
          </div>
          {/* Desktop/Tablet Hero Image */}
          {!isMobile && (
            <div className="pt-[15.5px] pb-[15px] pr-8 pl-[15px] absolute right-0 top-0 h-[90%] w-2/3 md:w-1/2 lg:w-1/2 z-0">
              <img 
                src={`${import.meta.env.BASE_URL}heroblog.png`}
                alt="Blog hero"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          )}
          {/* Mobile Hero Image (after text) */}
          {isMobile && (
            <div className="w-full px-4 pb-4">
              <img 
                src={`${import.meta.env.BASE_URL}heroblog.png`}
                alt="Blog hero"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          )}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="w-full py-16 px-[12px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]">
            {/* First row: three cards as before */}
            {blogPosts.slice(0, 3).map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 transform hover:-translate-y-1 w-full flex flex-col justify-between h-full"
              >
                <div>
                  <div className="text-sm text-gray-500 mb-2">{post.category} • {post.date}</div>
                  <h3 className="text-xl font-normal mb-2 text-gray-900">{post.title}</h3>
                  {post.author && (
                    <div className="text-sm text-gray-600 mb-2">{post.author}</div>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  {post.excerpt && (
                    <div className="text-sm text-gray-600 mb-2">{post.excerpt}</div>
                  )}
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors group"
                  >
                    Read More 
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
            {/* Second row: combine first and second card into one wide card, third card is image placeholder */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between w-full mt-[36px] h-full"
            >
              <div>
                <div className="text-sm text-gray-500 mb-2">{blogPosts[3].category} • {blogPosts[3].date}</div>
                <h3 className="text-3xl font-normal mb-2 text-gray-900">{blogPosts[3].title}</h3>
                <div className="text-sm text-gray-600 mb-2">{blogPosts[3].author}</div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="text-l text-gray-600 mb-2">{blogPosts[3].excerpt}</div>
                <a 
                  href={blogPosts[3].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors group"
                >
                  Read More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center min-h-[200px] w-full mt-[36px] h-full"
            >
              <img src={`${import.meta.env.BASE_URL}blog.png`} alt="Blog" className="w-full h-full object-cover rounded-lg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Footer CTA Section */}
        <motion.div 
          className="relative bg-[#f8f9fa] py-20 px-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-normal text-gray-900 mb-6">
                For media or careers inquiries, reach out.
              </h2>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="bg-gray-900 font-bold text-white px-6 py-3 rounded inline-flex items-center gap-2 hover:bg-gray-800 transition-colors group"
                >
                  Contact us
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Blue geometric shapes */}
          <motion.div 
            className="absolute right-0 top-0 h-full flex flex-col justify-center gap-4 hidden md:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-[#e6d4c8] rounded"></div>
              <div className="w-32 h-16 bg-[#e6d4c8] rounded"></div>
            </div>
            <div className="flex gap-2 ml-8">
              <div className="w-24 h-16 bg-[#e6d4c8] rounded"></div>
              <div className="w-40 h-16 bg-[#e6d4c8] rounded"></div>
            </div>
            <div className="flex gap-2 ml-4">
              <div className="w-20 h-16 bg-[#e6d4c8] rounded"></div>
              <div className="w-36 h-16 bg-[#e6d4c8] rounded"></div>
            </div>
            <div className="flex gap-2 ml-12">
              <div className="w-28 h-16 bg-[#e6d4c8] rounded"></div>
              <div className="w-44 h-16 bg-[#e6d4c8] rounded"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-[#e6d4c8] rounded"></div>
              <div className="w-32 h-16 bg-[#e6d4c8] rounded"></div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default News; 