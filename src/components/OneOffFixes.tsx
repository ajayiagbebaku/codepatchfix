import React from 'react';
import { Zap, AlertTriangle } from 'lucide-react';

const OneOffFixes = () => {
  return (
    <section id="one-off" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            One-Off Fixes
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Get a clear price and fast resolution for a single issue or urgent fix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-6 shadow-sm flex items-center">
            <Zap className="h-10 w-10 text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">One-time fix (most issues)</h3>
              <p className="text-gray-700">From $99 — includes triage, fix, and confirmation.</p>
            </div>
          </div>
          <div className="border rounded-xl p-6 shadow-sm flex items-center">
            <AlertTriangle className="h-10 w-10 text-red-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Emergency same-day</h3>
              <p className="text-gray-700">From $199 — prioritized response for critical issues.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#support-request"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Submit a Support Request
          </a>
        </div>
      </div>
    </section>
  );
};

export default OneOffFixes;

