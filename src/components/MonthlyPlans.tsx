import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$79/mo',
    items: ['1 fix/update per month', 'Email support', '48–72 hr turnaround']
  },
  {
    name: 'Standard',
    price: '$149/mo',
    items: ['Up to 3 fixes/updates per month', 'Priority queue', '24–48 hr turnaround'],
    highlight: true
  },
  {
    name: 'Priority',
    price: '$299/mo',
    items: ['Unlimited small fixes', 'Same-day response target for urgent issues', 'Best for high-lead businesses']
  }
];

const MonthlyPlans = () => {
  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Monthly Support Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Stay covered with on-call web and tech support whenever you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border shadow-sm bg-white p-8 flex flex-col ${plan.highlight ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <span className="text-xl font-semibold text-blue-600">{plan.price}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {plan.items.map(item => (
                  <li key={item} className="flex items-start text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#support-request"
                className="mt-8 inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Submit a Support Request
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Complex projects or rebuilds are quoted separately.
        </p>
      </div>
    </section>
  );
};

export default MonthlyPlans;

