import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import OurExperience from './components/OurExperience';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Founder from './components/Founder';
import Customers from './components/Customers';
import FAQ from './components/FAQ';
import ChatBot from './components/ChatBot';
import NammaNavbar from './components/Navbar';
import Gallery from './components/Gallery'; // Make sure this exists

// ✅ Home component combining all main sections
const Home = () => {
  return (
    <>
      <NammaNavbar />
      <HeroSection />
      <OurExperience />
      <AboutSection />
      <ServicesSection />
      <Customers />
      <Founder />
      <FAQ />
      <ChatBot />
      <ContactSection />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
