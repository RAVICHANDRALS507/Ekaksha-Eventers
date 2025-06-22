import React, { useEffect, useState, useRef } from "react";

const customers = [
  {
    name: "Amit Sharma",
    review:
      "Ekaksha Eventers made our corporate event seamless and memorable. The attention to detail and professionalism were outstanding!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review:
      "Our wedding was a dream come true thanks to Ekaksha Eventers. The décor, planning, and execution were perfect!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    review:
      "The team handled our product launch with creativity and efficiency. Highly recommended for any event!",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 4,
  },
  {
    name: "Sneha Patil",
    review:
      "Amazing birthday party for my daughter! The theme, games, and food were all fantastic. Thank you!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

// Auto-increment hook that starts when triggered
function useCountUp(target, duration = 2000, startCounting) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = target / (duration / 16);
    let raf;
    function update() {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    }
    update();
    return () => cancelAnimationFrame(raf);
  }, [target, duration, startCounting]);
  return count;
}

export default function Customers() {
  const [startCounter, setStartCounter] = useState(false);
  const statsRef = useRef(null);

  // Intersection Observer to trigger counter when stats section is in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const eventsCount = useCountUp(1000, 2000, startCounter);
  const customersCount = useCountUp(1000, 2000, startCounter);

  return (
    <section id="customers" className="w-full bg-gray-50 py-16 px-0">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
          Our Happy Customers
        </h2>
        {/* Reviews Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {customers.map((customer, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 text-center flex flex-col items-center"
            >
              {/* Remove user image if not needed */}
              {/* <img
                src={customer.image}
                alt={customer.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-200 shadow"
              /> */}
              <StarRating count={customer.rating} />
              <p className="text-gray-700 italic mb-4">"{customer.review}"</p>
              <h3 className="text-lg font-semibold text-blue-700">{customer.name}</h3>
            </div>
          ))}
        </div>
        {/* Stats Section at the bottom */}
        <div ref={statsRef} className="grid gap-8 sm:grid-cols-2 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-600">
            <svg className="w-10 h-10 text-blue-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
              {eventsCount}+
            </div>
            <div className="text-lg md:text-xl font-medium text-gray-700">Events Completed</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yellow-400">
            <svg className="w-10 h-10 text-yellow-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
            </svg>
            <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
              {customersCount}+
            </div>
            <div className="text-lg md:text-xl font-medium text-gray-700">Customers Achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
}