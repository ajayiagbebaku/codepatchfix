import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'SaaS Company',
    content: 'Our application was crashing every 30 minutes. CodePatchFix experts fixed the memory leak in under 4 hours. We\'ve had zero crashes since then.',
    rating: 5,
    problem: 'Application Crashes',
    timeframe: 'Fixed in 4 hours'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Developer',
    company: 'E-commerce Startup',
    content: 'Database corruption after a failed migration. CodePatchFix experts recovered all our data and optimized performance by 300%.',
    rating: 5,
    problem: 'Database Corruption',
    timeframe: 'Fixed in 6 hours'
  },
  {
    name: 'Jennifer Park',
    role: 'Product Manager',
    company: 'AI-Powered App',
    content: 'Stuck for weeks with AI builder integration. CodePatchFix experts solved everything in just 2 days. Excellent service!',
    rating: 5,
    problem: 'AI Builder Integration',
    timeframe: 'Fixed in 2 days'
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'FinTech Startup',
    content: 'Critical security vulnerability discovered. CodePatchFix experts implemented a secure fix overnight, preventing a potential data breach.',
    rating: 5,
    problem: 'Security Vulnerability',
    timeframe: 'Fixed overnight'
  },
  {
    name: 'Lisa Wang',
    role: 'DevOps Engineer',
    company: 'Healthcare Platform',
    content: 'Legacy system failing to process patient data. CodePatchFix experts modernized the critical components while maintaining full backward compatibility.',
    rating: 5,
    problem: 'Legacy System Issues',
    timeframe: 'Fixed in 1 week'
  },
  {
    name: 'Alex Johnson',
    role: 'Technical Lead',
    company: 'Gaming Company',
    content: 'Performance issues causing game lag. CodePatchFix experts optimized the code and improved frame rates by 60%. Our users are thrilled!',
    rating: 5,
    problem: 'Performance Issues',
    timeframe: 'Fixed in 3 days'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real problems, real solutions, real results
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {testimonial.problem}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {testimonial.timeframe}
                </span>
              </div>

              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get your problem solved?
            </h3>
            <p className="text-gray-600 mb-6">
              Submit your bug report and our experts will fix it fast.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Submit Your Bug Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 