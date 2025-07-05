import React from 'react';
import { Bug, Database, Zap, Clock, Shield, Code2, Bot, ShoppingCart, Globe, Monitor, Smartphone, Palette, Search } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="h-8 w-8 text-blue-600" />,
    title: 'Website Development',
    description: 'Custom websites built for Kansas City businesses to establish a strong online presence and attract local customers.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-green-600" />,
    title: 'Mobile-First Design',
    description: 'Responsive websites that work perfectly on all devices, ensuring your KC customers can find you anywhere.'
  },
  {
    icon: <Search className="h-8 w-8 text-yellow-600" />,
    title: 'Local SEO Optimization',
    description: 'Get your Kansas City business found by local customers searching for your services online.'
  },
  {
    icon: <Palette className="h-8 w-8 text-purple-600" />,
    title: 'Brand & Design',
    description: 'Professional branding and design that reflects your KC business values and appeals to local customers.'
  },
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
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services for Kansas City Businesses
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            From website development to technical support - helping KC businesses grow online
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