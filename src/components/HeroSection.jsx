import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen bg-blue-100 flex items-center justify-center text-center px-4">
      <div className="max-w-xl w-full">
        <h1 className="text-5xl font-bold mb-4">Welcome to Ekaksha Eventers</h1>
        <p className="text-lg mb-6">We build awesome websites and applications</p>
        <a href="#services" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Explore Services</a>
      </div>
    </section>
  );
};

export default HeroSection;
