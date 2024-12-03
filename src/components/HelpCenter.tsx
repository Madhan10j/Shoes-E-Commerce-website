import React from 'react';
import { HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day return policy for all unworn shoes in their original packaging. Simply contact our customer service team to initiate a return."
  },
  {
    question: "How do I find my shoe size?",
    answer: "We recommend measuring your feet in the afternoon and referring to our size guide. If you're between sizes, we suggest going up a size for the best fit."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary by location. Check our shipping calculator at checkout for detailed information."
  }
];

export const HelpCenter: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Help Center</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get quick answers to your questions and connect with our support team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-indigo-600 transition-colors">
            <Phone className="mx-auto h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-gray-600">1-800-SHOES</p>
            <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
          </div>
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-indigo-600 transition-colors">
            <Mail className="mx-auto h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-gray-600">support@shoestore.com</p>
            <p className="text-gray-600">24/7 Response Time</p>
          </div>
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-indigo-600 transition-colors">
            <MessageCircle className="mx-auto h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600">Available 24/7</p>
            <p className="text-gray-600">Average Response: 5min</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};