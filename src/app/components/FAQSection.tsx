"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the NiftyTrader Prime Plan?',
      answer: 'Details about the NiftyTrader Prime Plan...',
    },
    {
      question: 'What are the premium features included with the prime plan?',
      answer: 'Details about premium features...',
    },
    {
      question: 'Can I try the premium features before I subscribe to the prime plan?',
      answer: 'Details about trying premium features...',
    },
    {
      question: 'How do I subscribe to the prime plan?',
      answer: 'Details about subscribing to the prime plan...',
    },
    {
      question: 'Can I upgrade my subscription level?',
      answer: 'Details about upgrading subscription level...',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Details about payment methods...',
    },
    {
      question: 'Do you offer any discounts or promotions?',
      answer: 'Details about discounts or promotions...',
    },
  ];

  const handleToggle = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center">FAQ</h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center text-left font-bold border-b-2 border-gray-200 py-2 focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                {activeIndex === index ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </button>
              <div
                className={`mt-2 pl-4 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
