import React, { useState } from 'react';
import { FaChevronUp, FaChevronRight } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy allows you to return products within 30 days of purchase.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 5-7 business days depending on your location.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 customer support through email and phone.'
  },
];

const FAQ = () => {
  const [expandedFAQs, setExpandedFAQs] = useState([]);

  const toggleFAQ = (index) => {
    if (expandedFAQs.includes(index)) {
      setExpandedFAQs(expandedFAQs.filter(i => i !== index)); // Close if already open
    } else {
      setExpandedFAQs([...expandedFAQs, index]); // Open new FAQ
    }
  };

  return (
    <div className='faq-section container-fluid'>
      <h3>Frequently Asked Questions</h3>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div className='faq-item' key={index}>
            <div className='faq-question' onClick={() => toggleFAQ(index)}>
              <h6>{faq.question}</h6>
              <div className={`faq_icon ${expandedFAQs.includes(index) ? 'active' : ''}`}>
                {expandedFAQs.includes(index) ? <FaChevronUp /> : <FaChevronRight />}
              </div>
            </div>
            {expandedFAQs.includes(index) && (
              <div className='faq-answer'>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
