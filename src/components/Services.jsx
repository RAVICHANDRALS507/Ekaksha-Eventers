import React from "react";

const services = [
  {
    title: "Corporate Events",
    description:
      "Professional planning and execution for conferences, seminars, product launches, and team-building activities.",
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Weddings & Receptions",
    description:
      "From intimate gatherings to grand celebrations, we make your special day truly memorable with flawless coordination.",
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" />
      </svg>
    ),
  },
  {
    title: "Concerts & Live Shows",
    description:
      "Stage setup, artist management, sound & lighting, and crowd control for unforgettable entertainment experiences.",
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Birthday Parties",
    description:
      "Fun themes, décor, games, and catering for kids and adults to make birthdays extra special.",
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Exhibitions & Trade Shows",
    description:
      "End-to-end management for expos, stalls, branding, logistics, and visitor engagement.",
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: "Private Parties",
    description:
      "Personalized celebrations for anniversaries, engagements, and other milestones.",
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-gray-50 py-16 px-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 text-center border-t-4 border-blue-600 hover:border-yellow-400"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}