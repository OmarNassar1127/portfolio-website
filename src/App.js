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
import Loader from "./components/UI/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence, motion } from "framer-motion";

function App() {

  const [language, setLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(true);

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("NL");
    } else {
      setLanguage("EN");
    }
  };

  useEffect(() => {
    // Only init AOS after loading is done to prevent animation glitches
    if (!isLoading) {
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
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
