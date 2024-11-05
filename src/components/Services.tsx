import React from 'react';
import { Code2, Rocket, Users, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-blue-600" />,
    title: 'Custom Development',
    description: 'Tailored web solutions built with cutting-edge technologies to meet your specific business needs.'
  },
  {
    icon: <Rocket className="h-8 w-8 text-blue-600" />,
    title: 'Performance Optimization',
    description: 'Speed up your digital presence with our expert optimization techniques.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Create engaging user experiences that convert visitors into customers.'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: 'Consultation',
    description: 'Strategic guidance to help you make informed decisions about your digital presence.'
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
            Comprehensive web solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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