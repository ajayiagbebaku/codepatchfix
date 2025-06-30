import React from 'react';
import { ArrowRight, Bug, Database, Zap, Bot, ShoppingCart, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Expert Bug Fixing</span>
              <span className="block text-blue-600">Service</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
              We have experts on staff who can fix any technical problem - from application crashes to database issues, Python automation, Shopify problems, and WordPress issues.
            </p>
            <div className="mt-8 sm:mt-10">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Submit Your Bug Report
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Bug className="h-8 w-8 text-red-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Application Bugs</h3>
                  <p className="text-sm text-gray-600">Fix crashes, errors, and functionality issues</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Database className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Database Problems</h3>
                  <p className="text-sm text-gray-600">Resolve data corruption, performance issues</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Bot className="h-8 w-8 text-purple-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Python Automation</h3>
                  <p className="text-sm text-gray-600">Fix scripts, pipelines, and workflow automation</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <ShoppingCart className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Shopify Issues</h3>
                  <p className="text-sm text-gray-600">Resolve checkout, theme, and app problems</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Globe className="h-8 w-8 text-indigo-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">WordPress Issues</h3>
                  <p className="text-sm text-gray-600">Fix plugins, themes, security, and performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;