import React from "react";

export default function Home() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-700 to-purple-600 text-white py-30 mt-20">
      <div className="w-full max-w-screen-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-6">
          Welcome to Ekaksha Eventers
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl mb-8">
          We create unforgettable experiences for your special occasions. From
          corporate events to weddings and concerts, our team brings your vision
          to life!
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
// 