import React from 'react';
import { ArrowUpRight, Clock, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

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

const researchItems: ResearchPaper[] = [
  {
    title: "Integrating Clinical Research into EHR Workflows",
    authors: "N. H. Goldhaber et al.",
    source: "JAMIA Open",
    year: "2024",
    description: "Clinical trials can be more adaptive and efficient by embedding them directly into electronic health record systems — a principle central to Varosync's EHR-powered insights.",
    url: "https://doi.org/10.1093/jamiaopen/ooae023",
    doi: "10.1093/jamiaopen/ooae023",
    type: "paper"
  },
  {
    title: "TimeTeller: A Tool for Precision Circadian Medicine",
    authors: "D. Vlachou, G. A. Bjarnason, S. Giacchetti, F. Lévi, and D. A. Rand",
    source: "bioRxiv",
    year: "2019",
    description: "TimeTeller laid the foundation for using gene expression to estimate internal circadian time — a core concept behind our phase estimation models.",
    url: "https://doi.org/10.1101/622050",
    doi: "10.1101/622050",
    type: "paper"
  },
  {
    title: "Fundamentals of Clinical Trials (5th ed.)",
    authors: "L. M. Friedman, C. Furberg, D. L. DeMets, D. M. Reboussin, and C. B. Granger",
    source: "Springer",
    year: "2015",
    description: "A gold-standard reference on clinical trial methodology — detailing how poor stratification (including neglect of time-based variables) leads to bias.",
    url: "https://doi.org/10.1007/978-3-319-18539-2",
    doi: "10.1007/978-3-319-18539-2",
    type: "book"
  },
  {
    title: "From Coupled Oscillators to Graph Neural Networks: Reducing Oversmoothing via a Kuramoto Model-based Approach",
    authors: "T. Nguyen et al.",
    source: "arXiv",
    year: "2024",
    description: "Bridges complex biological dynamics and machine learning — essential for modeling time-aligned physiological signals.",
    url: "https://doi.org/10.48550/arXiv.2311.03260",
    doi: "10.48550/arXiv.2311.03260",
    type: "paper"
  },
  {
    title: "Deep Learning: Foundations and Concepts",
    authors: "C. M. Bishop and H. Bishop",
    source: "Springer",
    year: "2024",
    description: "Advanced deep learning frameworks enhance Varosync's ability to detect latent circadian structures from high-dimensional health data",
    url: "https://www.bishopbook.com",
    type: "book"
  },
  {
    title: "Circadian Rhythms and Drug Effectiveness",
    authors: "",
    source: "MIT News",
    year: "2024",
    description: "More than half of FDA-approved drugs exhibit time-of-day dependent effects — yet few clinical protocols reflect this.",
    url: "https://news.mit.edu/2024/circadian-rhythms-can-influence-drugs-effectiveness-0424",
    type: "article"
  },
  {
    title: "Chronopharmacology: New Insights",
    authors: "R. Dallmann, S. A. Brown, and F. Gachon",
    source: "Annual Review of Pharmacology and Toxicology",
    year: "2014",
    description: "Drug metabolism and efficacy fluctuate across the circadian cycle — reinforcing the need for time-informed therapy.",
    url: "https://doi.org/10.1146/annurev-pharmtox-011613-135923",
    doi: "10.1146/annurev-pharmtox-011613-135923",
    type: "paper"
  },
  {
    title: "Chronopharmacokinetics: A Brief Analysis of the Influence of Circadian Rhythm on the Absorption, Distribution, Metabolism, and Elimination of Drugs",
    authors: "A. L. R. Piedras et al.",
    source: "Biomedicine and Pharmacology Journal",
    year: "2024",
    description: "Summarizes how circadian rhythms shape how drugs are absorbed, distributed, metabolized, and cleared from the body.",
    url: "https://doi.org/10.13005/bpj/3003",
    doi: "10.13005/bpj/3003",
    type: "paper"
  }
];

function News() {
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
              <h1 className="text-5xl font-bold mb-6">News & Publications</h1>
              <p className="text-xl text-white/80">
                Latest updates and publications from VaroSync and related fields
              </p>
            </motion.div>
          </div>
        </div>

        {/* Research Grid */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {researchItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-violet-100 text-violet-700">
                          {item.source}
                        </span>
                        <span className="text-sm text-gray-500">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                      {item.authors && (
                        <p className="text-gray-600 mb-3 text-sm">{item.authors}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 font-medium flex items-center gap-2 hover:text-violet-700"
                    >
                      Read {item.type === 'book' ? 'the book' : item.type === 'article' ? 'article' : 'the paper'}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    {item.doi && (
                      <span className="text-sm text-gray-500">doi:{item.doi}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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
      </main>
      
    </div>
  );
}

export default News; 