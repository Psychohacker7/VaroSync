import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';

const Careers: React.FC = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Placeholder job details based on requirements.md
  const featuredJob = {
    title: "Strategic Advisor in Chronopharmacology PK/PD",
    description: [
      "Varosync is seeking a seasoned expert in chronopharmacology and pharmacokinetic/pharmacodynamic (PK/PD) modeling to join our advisory board.",
      "This role involves providing strategic guidance on integrating time-of-day considerations into drug development pipelines, advising on modeling strategies for time-dependent drug effects, and helping shape Varosync's scientific roadmap in chronotherapeutics.",
      "The ideal candidate will have a strong publication record, extensive experience in preclinical and clinical drug development, and a deep understanding of circadian biology's impact on pharmacology."
    ],
    requirements: [
      "PhD or MD/PhD in Pharmacology, Pharmaceutical Sciences, Systems Biology, or related field.",
      "10+ years of experience in PK/PD modeling, with specific expertise in chronopharmacology highly desirable.",
      "Proven track record of strategic leadership in pharmaceutical R&D.",
      "Excellent communication and collaboration skills."
    ],
    // Placeholder LinkedIn application URL
    linkedInUrl: "https://www.linkedin.com/jobs/search/?keywords=chronopharmacology%20pkpd"
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20"
          initial="initial" animate="animate" variants={fadeIn}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-white/80">
              Shape the future of time-aware therapeutics at VaroSync.
            </p>
          </div>
        </motion.div>

        {/* Featured Position Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8 md:p-12"
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Featured Position</h2>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">{featuredJob.title}</h3>
              
              <div className="space-y-4 text-gray-700 mb-6">
                {featuredJob.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-navy-900 mb-3">Requirements</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                {featuredJob.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>

              <a 
                href={featuredJob.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Apply on LinkedIn
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Optional: Company Culture Section (Placeholder) */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                [Placeholder for company culture description - e.g., innovative, collaborative, science-driven, focused on impact.]
              </p>
              {/* Could add values or team highlights here later */}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers; 