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
import Certifications from "./components/UI/Certifications";
import Loader from "./components/UI/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence, motion } from "framer-motion";

function App() {

  const [language, setLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode for tech aesthetic

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("NL");
    } else {
      setLanguage("EN");
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
      <AnimatePresence>
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`overflow-x-hidden ${isDarkMode ? 'dark' : ''}`}
          >
            <Header
              toggleLanguage={toggleLanguage}
              language={language}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
            <main className="bg-[var(--color-bg)] transition-colors duration-300 overflow-x-hidden">
              <Hero language={language} isDarkMode={isDarkMode} />
              <Journey language={language} isDarkMode={isDarkMode} />
              <Portfolio language={language} isDarkMode={isDarkMode} />
              <Skills language={language} isDarkMode={isDarkMode} />
              <Certifications language={language} isDarkMode={isDarkMode} />
              <Contact language={language} isDarkMode={isDarkMode} />
            </main>
            <Footer language={language} isDarkMode={isDarkMode} />
            <ToastContainer
              theme={isDarkMode ? 'dark' : 'light'}
              position="bottom-right"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
