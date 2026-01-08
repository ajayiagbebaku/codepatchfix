import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const platforms = ['WordPress', 'Shopify', 'Webflow', 'Custom', 'Not sure'];
const issueTypes = ['Form broken', 'Layout issue', 'Site down', 'Checkout issue', 'Speed', 'Other'];
const urgencyLevels = ['Standard 48–72h', 'Priority 24h', 'Emergency same-day'];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    websiteUrl: '',
    platform: '',
    issueType: '',
    urgency: '',
    accessNeeded: '',
    details: '',
    fileName: '',
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_pev563t",
        "template_t333pva",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          business_name: formData.businessName,
          website_url: formData.websiteUrl,
          platform: formData.platform,
          issue_type: formData.issueType,
          urgency: formData.urgency,
          access_needed: formData.accessNeeded,
          details: formData.details,
          attachment_name: formData.fileName || 'None provided',
          consent: formData.consent ? 'Yes' : 'No',
          to_name: 'CodePatchFix Support',
        },
        "rh_Co865axorP_nbh"
      );

      toast.success('Message sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        businessName: '',
        websiteUrl: '',
        platform: '',
        issueType: '',
        urgency: '',
        accessNeeded: '',
        details: '',
        fileName: '',
        consent: false
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    }));
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({ ...prev, fileName: file ? file.name : '' }));
  };

  return (
    <section id="support-request" className="py-20 bg-white">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Submit a Support Request
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tell us what’s broken or needed. We triage, confirm pricing, and get to work.
          </p>
        </div>

        <div className="mt-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@business.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  placeholder="Your business"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700">
                  Website URL
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://yourwebsite.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
                  Platform/Stack
                </label>
                <select
                  id="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select platform</option>
                  {platforms.map(platform => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                  Issue Type
                </label>
                <select
                  id="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select issue</option>
                  {issueTypes.map(issue => (
                    <option key={issue} value={issue}>
                      {issue}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">
                  Urgency
                </label>
                <select
                  id="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select response time</option>
                  {urgencyLevels.map(level => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="accessNeeded" className="block text-sm font-medium text-gray-700">
                  Access needed?
                </label>
                <select
                  id="accessNeeded"
                  value={formData.accessNeeded}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <textarea
                id="details"
                rows={4}
                value={formData.details}
                onChange={handleChange}
                required
                placeholder="Describe the issue, steps to reproduce, and what success looks like."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                  File upload (optional, screenshots)
                </label>
                <input
                  type="file"
                  id="file"
                  accept="image/*,.pdf"
                  onChange={handleFile}
                  className="mt-1 block w-full text-sm text-gray-700"
                />
                {formData.fileName && (
                  <p className="mt-1 text-sm text-gray-500">Attached: {formData.fileName}</p>
                )}
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                  I confirm I own/manage this website and can authorize changes.
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Sending...
                </>
              ) : (
                'Submit Support Request'
              )}
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-600 text-center">
            Request received. We’ll review and respond shortly. Standard: 48–72h · Priority: 24h · Emergency: same-day target.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;