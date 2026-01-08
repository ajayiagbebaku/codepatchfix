import React from 'react';

const faqs = [
  {
    question: 'Do you work nationwide?',
    answer: 'Yes. All support is remote-first and we serve customers across the U.S.'
  },
  {
    question: 'Do you require calls?',
    answer: 'No long calls required. We triage via your support request and use async updates unless a call is needed.'
  },
  {
    question: 'Who does the work?',
    answer: 'U.S.-based specialists in WordPress, Shopify, web apps, and infrastructure handle your fixes.'
  },
  {
    question: 'What if the issue is bigger than expected?',
    answer: 'We pause, give you a clear scope and quote, and only proceed once you approve.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. Choose a monthly plan for guaranteed access, priority queueing, and predictable turnaround.'
  },
  {
    question: 'What platforms do you support?',
    answer: 'WordPress, Shopify, Webflow, custom apps, and common stacks. Select your platform in the form.'
  }
];

const FAQ = () => (
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">FAQ</h2>
        <p className="mt-3 text-lg text-gray-600">Answers to common questions about our on-call support.</p>
      </div>
      <div className="space-y-6">
        {faqs.map(faq => (
          <div key={faq.question} className="border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;

