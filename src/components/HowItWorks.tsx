import React from 'react';
import { ClipboardList, Users, Wrench } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-blue-600" />,
    title: 'Submit your request',
    description: 'Tell us the issue, platform, urgency, and access needs.'
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-600" />,
    title: 'We triage + assign',
    description: 'We scope the fix, confirm pricing, and route to the right specialist.'
  },
  {
    icon: <Wrench className="h-10 w-10 text-green-600" />,
    title: 'We fix + you confirm',
    description: 'We implement, validate, and hand back a clear summary.'
  }
];

const HowItWorks = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Simple, remote workflow to keep your site online and performing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map(step => (
          <div key={step.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

