import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen bg-blue-100 flex items-center justify-center text-center px-4">
      <div className="max-w-xl w-full">
        <h1 className="text-5xl font-bold mb-4">Welcome to Ekaksha Eventers</h1>
        <p className="text-lg mb-6">Ekaksha Eventers is a creative event management company specializing in planning and executing memorable events with precision and flair. From corporate gatherings and weddings to private parties and cultural functions, we bring your vision to life with seamless coordination, innovative concepts, and personalized service.

</p>
        <a href="#services" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Explore Services</a>
      </div>
    </section>
  );
};

export default HeroSection;
