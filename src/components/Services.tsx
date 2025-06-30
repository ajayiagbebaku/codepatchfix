import React from 'react';
import { Bug, Database, Zap, Clock, Shield, Code2, Bot, ShoppingCart, Globe } from 'lucide-react';

const services = [
  {
    icon: <Bug className="h-8 w-8 text-red-500" />,
    title: 'Application Bug Fixes',
    description: 'Our experts fix crashes, errors, and functionality issues in your applications.'
  },
  {
    icon: <Database className="h-8 w-8 text-green-500" />,
    title: 'Database Troubleshooting',
    description: 'Resolve data corruption, performance bottlenecks, and connection issues.'
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: 'AI Builder Support',
    description: 'Get unstuck with AI-powered development tools and resolve integration issues.'
  },
  {
    icon: <Bot className="h-8 w-8 text-purple-500" />,
    title: 'Python Automation',
    description: 'Fix automation scripts, data processing pipelines, and workflow automation issues.'
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
    title: 'Shopify Issues',
    description: 'Resolve checkout problems, theme issues, app conflicts, and store performance.'
  },
  {
    icon: <Globe className="h-8 w-8 text-indigo-500" />,
    title: 'WordPress Issues',
    description: 'Fix plugin conflicts, theme problems, security vulnerabilities, and site performance.'
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: 'Emergency Fixes',
    description: 'Urgent problem resolution with rapid response times for critical issues.'
  },
  {
    icon: <Shield className="h-8 w-8 text-teal-500" />,
    title: 'Code Review & Security',
    description: 'Identify and fix security vulnerabilities and code quality issues.'
  },
  {
    icon: <Code2 className="h-8 w-8 text-gray-500" />,
    title: 'Legacy System Support',
    description: 'Maintain and fix older systems that need specialized attention.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Expert solutions for all your technical problems
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;