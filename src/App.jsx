import React from 'react';
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

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
