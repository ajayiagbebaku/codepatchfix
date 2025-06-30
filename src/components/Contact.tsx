import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const services = [
  'Application Bug Fixes',
  'Database Troubleshooting',
  'AI Builder Support',
  'Python Automation',
  'Shopify Issues',
  'WordPress Issues',
  'Emergency Fixes',
  'Code Review & Security',
  'Legacy System Support'
];

const budgetRanges = [
  'Under $100',
  '$100 - $500',
  '$500 - $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000+',
  'Not sure / Need quote'
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [] as string[],
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_pev563t",
        "template_t333pva",
        {
          from_name: formData.name,
          from_email: formData.email,
          selected_services: formData.services.join(', '),
          budget_range: formData.budget,
          message: formData.message,
          to_name: 'CodePatchFix Team',
        },
        "rh_Co865axorP_nbh"
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', services: [], budget: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Your Bug Fixed
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tell us about your technical problem and we'll fix it fast
          </p>
        </div>

        <div className="mt-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type of Problem
              </label>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <label
                    key={service}
                    className="relative flex items-start p-3 rounded-lg border cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                    />
                    <span className="ml-3 text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Budget Range
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select your budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                This helps us provide the most appropriate solution for your needs
              </p>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Problem Description
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Please describe your technical problem, error messages, and what you've already tried..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Sending...
                </>
              ) : (
                'Send Bug Report'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;