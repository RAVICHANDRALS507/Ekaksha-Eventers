import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./components/Header.jsx";
// import EventList from "./components/EventList.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Galary from './components/Galary.jsx';
import Customers from './components/Customers.jsx';
import Founder from './components/Founder.jsx';
import Contact from './components/Contact.jsx';
import ChatBot from './components/ChatBot.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Galary />
      <Customers />
      <Founder />
      <Contact />
      <ChatBot />
      {/* <EventList />*/}
      <Footer /> 
    </div>
  );
};

export default App;

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
