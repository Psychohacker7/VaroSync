import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Clock, 
  Microscope, 
  Moon, 
  Pill, 
  Smartphone, 
  Sun, 
  Users, 
  ArrowRight,
  Shield,
  Zap,
  Code2,
  Database,
  LineChart,
  Activity,
  AlertCircle,
  Calendar,
  Target
} from 'lucide-react';

const Platform = () => {
  const lumoCapabilities = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Circadian Phase Estimation',
      description: 'Estimates internal biological time from wearable-derived signals such as HRV, temperature, and sleep patterns'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Fatigue Risk Scoring',
      description: 'Computes real-time fatigue index based on circadian misalignment, sleep history, and activity levels'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Chrono Coaching API',
      description: 'Offers personalized feedback for when to train, rest, eat, and focus based on circadian phase and behavioral goals'
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Misalignment Detection',
      description: 'Detects social jetlag and schedule mismatches for shift workers or frequent travelers'
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Alertness Forecasting',
      description: 'Predicts daily cognitive performance windows using personalized rhythm modeling'
    }
  ];

  const useCases = [
    'Employee Wellness Platforms: Deliver fatigue alerts and shift work risk insights',
    'Consumer Wearables: Add clinically grounded circadian scores to sleep tracking',
    'Digital Therapeutics: Schedule behavior nudges or medication reminders for biological time windows',
    'Sports & Fitness: Optimize training load and recovery cycles'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Omu® Platform
            </h1>
            <p className="text-xl mb-8">
              At the heart of Varosync is the Omu® Platform, our proprietary engine for circadian-aware analytics, simulation, and patient stratification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Omu Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What is Omu®?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Omu® is a composable software architecture that enables pharmaceutical R&D and clinical teams to integrate circadian biology into drug discovery. Built with flexibility and scalability in mind, Omu® can ingest multimodal types including: structured and unstructured EHR data, Traditional clinical trial case report forms and others currently in development.
            </p>
          </div>
        </div>
      </section>

      {/* Under the Hood Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Under the Hood: A Scientific Stack</h2>
            <p className="text-lg text-gray-600 mb-8">
              Omu® is powered by a suite of models developed from first principles in circadian biology, combined with probabilistic and sequential machine learning methods. Each module is tuned to a specific stage of the therapeutic lifecycle, from trial design to postmarket surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* Omu Lumo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Omu Lumo™ Engine (Wellness)</h2>
            <p className="text-lg text-gray-600 mb-12">
              To complement Omu® for pharmaceutical applications, Varosync developed the Omu Lumo™ Engine, a lightweight, embeddable analytics platform designed for consumer-facing health and wellness experiences.
            </p>

            <h3 className="text-2xl font-bold mb-6">What is Lumo™?</h3>
            <p className="text-lg text-gray-600 mb-12">
              Lumo™ enables wellness apps, wearables, and digital health tools to integrate real-time circadian analytics into their user experience. From shift workers to athletes to burned-out executives, Lumo™ empowers individuals to align with their biological clock and optimize recovery, performance, and wellbeing.
            </p>

            <h3 className="text-2xl font-bold mb-6">Core Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {lumoCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-blue-600 mb-4">{capability.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{capability.title}</h4>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
            <ul className="space-y-4 mb-12">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="text-blue-600 mt-1">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-gray-600">{useCase}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Under the Hood: A Scientific Stack</h3>
              <p className="text-gray-600">
                Lumo uses sequential latent variable models for phase estimation and fatigue prediction. Incorporates Kalman-style filters for real-time updating of circadian state from passive sensing. Lumo™ is built on the same chronobiological foundations as Omu®.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Together, Omu® and Lumo™ form the dual-core engine behind Varosync's vision — bringing biological time into both therapeutic precision and everyday wellness.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're designing a next-gen drug or guiding a user to a better night's sleep, Varosync gives you the tools to align with what matters most: when.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
