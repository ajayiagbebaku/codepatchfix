import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Owner',
    company: 'KC Coffee Roasters',
    content: 'Our new website has increased online orders by 200%! The local SEO optimization has brought in so many Kansas City customers we never had before.',
    rating: 5,
    problem: 'Website Development',
    timeframe: 'Completed in 3 weeks'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Manager',
    company: 'Downtown Auto Repair',
    content: 'The mobile-first design is perfect. Our customers can easily book appointments from their phones, and we\'ve seen a 150% increase in online bookings.',
    rating: 5,
    problem: 'Mobile-First Design',
    timeframe: 'Completed in 2 weeks'
  },
  {
    name: 'Jennifer Park',
    role: 'Owner',
    company: 'KC Pet Grooming',
    content: 'Our new website with local SEO has us ranking #1 for "pet grooming Kansas City". Business has never been better!',
    rating: 5,
    problem: 'Local SEO Optimization',
    timeframe: 'Results in 1 month'
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'KC Legal Services',
    content: 'Professional branding and website design that perfectly represents our firm. We\'ve gained 5 new clients in the first month.',
    rating: 5,
    problem: 'Brand & Design',
    timeframe: 'Completed in 4 weeks'
  },
  {
    name: 'Lisa Wang',
    role: 'Owner',
    company: 'KC Dental Practice',
    content: 'The website is beautiful and functional. Patients can easily find us, book appointments, and learn about our services. Highly recommend!',
    rating: 5,
    problem: 'Healthcare Website',
    timeframe: 'Completed in 3 weeks'
  },
  {
    name: 'Alex Johnson',
    role: 'Manager',
    company: 'KC Fitness Center',
    content: 'Our new website with online class booking has increased membership signups by 300%. The local SEO is bringing in Kansas City customers daily.',
    rating: 5,
    problem: 'E-commerce Integration',
    timeframe: 'Completed in 4 weeks'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Kansas City Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real Kansas City businesses, real growth, real results
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
              Ready to grow your Kansas City business online?
            </h3>
            <p className="text-gray-600 mb-6">
              Get your free consultation and join the successful KC businesses we've helped.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 