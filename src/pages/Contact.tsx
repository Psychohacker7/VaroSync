import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await emailjs.send(
        'service_xyz', // Replace with your EmailJS service ID
        'template_xyz', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'partnerships@varosync.com'
        },
        'public_key_xyz' // Replace with your EmailJS public key
      );

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-white/80 mb-8">
                Get in touch with our team to learn more about our solutions
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-navy-900">Our Location</h3>
                      <p className="text-gray-600">Upper West Side, New York, NY 10025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-navy-900">Email Us</h3>
                      <p className="text-gray-600">partnerships@varosync.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-navy-900">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-xl">
                  <h3 className="font-semibold text-navy-900 mb-2">Working Hours</h3>
                  <p className="text-gray-600 mb-4">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                    />
                  </div>
                  
                  {status.message && (
                    <div className={`p-4 rounded-lg ${
                      status.type === 'success' ? 'bg-green-100 text-green-700' :
                      status.type === 'error' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {status.message}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors disabled:opacity-50"
                  >
                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-96 bg-gray-200">
          {/* Placeholder for map */}
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500 text-lg">Map will be displayed here</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact; 