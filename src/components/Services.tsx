import React from 'react';
import { Bug, Database, Zap, Clock, Shield, Code2, Bot, ShoppingCart, Globe, Monitor, Smartphone, Palette, Search } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8 text-indigo-500" />,
    title: 'WordPress Issues',
    description: 'Forms not submitting, plugin conflicts, layout issues, performance, security.'
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
    title: 'Shopify Issues',
    description: 'Checkout problems, theme bugs, app conflicts, broken carts, speed fixes.'
  },
  {
    icon: <Bug className="h-8 w-8 text-red-500" />,
    title: 'Application Bug Fixes',
    description: 'Error debugging, crashes, API failures, auth issues, regression clean-up.'
  },
  {
    icon: <Database className="h-8 w-8 text-green-500" />,
    title: 'Database Troubleshooting',
    description: 'Connection errors, slow queries, data issues, backups, and reliability.'
  },
  {
    icon: <Monitor className="h-8 w-8 text-blue-600" />,
    title: 'Website Updates',
    description: 'Content edits, page tweaks, embed updates, DNS/SSL checks, accessibility.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-green-600" />,
    title: 'Mobile & UX Fixes',
    description: 'Broken layouts, responsive issues, navigation fixes, conversion blockers.'
  },
  {
    icon: <Search className="h-8 w-8 text-yellow-600" />,
    title: 'Technical SEO',
    description: 'Indexing issues, speed, Core Web Vitals, metadata clean-up, redirects.'
  },
  {
    icon: <Palette className="h-8 w-8 text-purple-600" />,
    title: 'Design Adjustments',
    description: 'Brand-aligned tweaks, spacing, typography, and component consistency.'
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: 'AI Builder Support',
    description: 'Troubleshoot AI tool output, integrations, and deployment problems.'
  },
  {
    icon: <Bot className="h-8 w-8 text-purple-500" />,
    title: 'Automation & Scripts',
    description: 'Python or JS scripts, data pipelines, cron issues, workflow automation.'
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: 'Emergency Fixes',
    description: 'Site down, broken checkout, security triage, same-day support available.'
  },
  {
    icon: <Shield className="h-8 w-8 text-teal-500" />,
    title: 'Code Review & Security',
    description: 'Vulnerability checks, dependency issues, and preventative hardening.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What We Fix
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            On-call help for the platforms you already use — fully remote, nationwide.
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