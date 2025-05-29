import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Journey from "./components/UI/Journey";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import Skills from "./components/UI/Skills";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("NL");
    } else {
      setLanguage("EN");
    }
  };

  useEffect(() => {
    Aos.init();
    
    // Mobile-specific fix for hero section
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        // Trigger hero animations immediately on mobile
        const heroElements = document.querySelectorAll('#about [data-aos]');
        heroElements.forEach(el => {
          el.classList.add('aos-animate');
        });
      }, 100);
    }
  }, []);
  return (
    <>
      <Header toggleLanguage={toggleLanguage} language={language} />
      <main>
        <Hero language={language} />
        <Journey language={language} />
        <Portfolio language={language} />
        <Skills language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
      <ToastContainer />
    </>
  );
}

export default App;
