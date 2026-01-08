import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Owner',
    company: 'Regional Coffee Roasters',
    content: 'We submitted a broken form and had it fixed with clear pricing the same day. Support felt like an extension of our team.',
    rating: 5,
    problem: 'Form & UX Fix',
    timeframe: 'Resolved in 1 day'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Ops Manager',
    company: 'Auto Repair Group',
    content: 'Priority plan is worth it. Checkout errors were triaged, fixed, and verified without a single meeting. Customers stopped calling about failures.',
    rating: 5,
    problem: 'Checkout Bug',
    timeframe: 'Completed in 48 hours'
  },
  {
    name: 'Jennifer Park',
    role: 'Founder',
    company: 'DTC Pet Care',
    content: 'They handled theme conflicts and performance issues on Shopify with minimal direction. Clear communication, no surprises.',
    rating: 5,
    problem: 'Shopify Performance',
    timeframe: 'Results in 3 days'
  },
  {
    name: 'David Thompson',
    role: 'Managing Partner',
    company: 'Legal Services Firm',
    content: 'Our site went down on a Friday. Emergency support got us back up, hardened the stack, and documented the fix.',
    rating: 5,
    problem: 'Emergency Recovery',
    timeframe: 'Same-day recovery'
  },
  {
    name: 'Lisa Wang',
    role: 'Practice Owner',
    company: 'Dental Group',
    content: 'Accessibility fixes and online scheduling updates improved conversions without rebuilding the site.',
    rating: 5,
    problem: 'Accessibility & Forms',
    timeframe: 'Completed in 1 week'
  },
  {
    name: 'Alex Johnson',
    role: 'Marketing Lead',
    company: 'National Fitness Brand',
    content: 'Monthly plan keeps us covered. Landing page edits and tracking fixes ship fast and stay on budget.',
    rating: 5,
    problem: 'Ongoing Support',
    timeframe: 'Ongoing'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Verified client results
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Fast fixes and ongoing support for teams across industries.
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
              Need a fix? Submit your request now.
            </h3>
            <p className="text-gray-600 mb-6">
              Quick triage, clear pricing, and remote support — no consultation calls required.
            </p>
            <a
              href="#support-request"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Submit a Support Request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 