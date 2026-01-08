import React from 'react';
import { Bug, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Bug className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">CodePatchFix</span>
            </div>
            <p className="mt-4 text-gray-400">
              Global expert bug fixing service. We solve technical problems worldwide - from application crashes to database issues and AI builder support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Bug Fixing Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Application Bug Fixes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Database Troubleshooting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  AI Builder Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Emergency Fixes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Global Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="flex items-center justify-center mb-2">
            <Globe className="h-4 w-4 mr-2" />
            <span>Based in Kansas City, serving customers nationwide</span>
          </div>
          <p>© {new Date().getFullYear()} CodePatchFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;