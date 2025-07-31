import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Ekaksha-Eventers?',
    answer:
      'Ekaksha-Eventers is a premier event management company dedicated to creating unforgettable experiences. We specialize in planning and executing a wide range of events, from corporate functions to personal celebrations.',
  },
  {
    question: 'What types of events do you manage?',
    answer:
      'We manage a variety of events, including weddings, corporate conferences, product launches, birthday parties, and more. Our team has the expertise to handle events of any scale.',
  },
  {
    question: 'How can I book your services?',
    answer:
      'You can book our services by contacting us through the contact form on our website, or by calling us directly. We would be happy to discuss your event requirements and provide a customized quote.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'Our pricing is based on the specific requirements of your event. We offer customized packages to fit your budget and needs. Please contact us for a detailed quote.',
  },
  {
    question: 'Do you offer virtual or hybrid events?',
    answer:
      'Yes, we have adapted to the changing times and offer services for virtual and hybrid events, ensuring a seamless experience for all attendees, whether they are in-person or online.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className="bg-blue-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{open === index ? '-' : '+'}</span>
              </button>
              <div
                className={`mt-3 text-sm text-gray-200 transition-all duration-300 ease-in-out ${
                  open === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
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

export default FAQ;
