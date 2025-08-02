import React from "react";

const customers = [
  {
    name: "Amit Sharma",
    review:
      "Ekaksha Eventers made our corporate event seamless and memorable. The attention to detail and professionalism were outstanding!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review:
      "Our wedding was a dream come true thanks to Ekaksha Eventers. The décor, planning, and execution were perfect!",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    review:
      "The team handled our product launch with creativity and efficiency. Highly recommended for any event!",
    rating: 4,
  },
  {
    name: "Sneha Patil",
    review:
      "Amazing birthday party for my daughter! The theme, games, and food were all fantastic. Thank you!",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex justify-center mb-3 space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 transition-colors duration-300 ${
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function Customers() {
  return (
    <section
      id="customers"
      className="w-full py-20 px-4 bg-gradient-to-r from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-14 text-center drop-shadow-md">
          Our Happy Customers
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {customers.map((customer, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 p-8 text-center flex flex-col items-center"
            >
              <StarRating count={customer.rating} />
              <p className="text-gray-700 italic mb-6 leading-relaxed">“{customer.review}”</p>
              <h3 className="text-xl font-semibold text-blue-800">{customer.name}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href="https://g.co/kgs/8rX1Nix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black hover:shadow-yellow-400 transition duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
