import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import OmarCV from "../../assets/cv/Omar-cv.pdf";
import { motion } from "framer-motion";

const Hero = ({ language, isDarkMode }) => {
  const typedRef = useRef(null);
  const cvLink = OmarCV;
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const text =
    language === "EN"
      ? "Full Stack Developer & AI Engineer. I build scalable applications and intelligent systems, from multi-agent workflows to enterprise RAG platforms that deliver measurable results."
      : "Full Stack Developer & AI Engineer. Ik bouw schaalbare applicaties en intelligente systemen, van multi-agent workflows tot enterprise RAG-platformen die meetbare resultaten leveren.";

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "AI Engineer", "Multi-Agent Systems", "RAG Architecture"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    typedRef.current = new Typed("#typed-text", options);

    return () => {
      if (typedRef.current) typedRef.current.destroy();
    };
  }, []);

  const stats = [
    { value: "€50K", label: language === "EN" ? "Monthly Impact" : "Maandelijkse Impact" },
    { value: "30+", label: language === "EN" ? "Systems Built" : "Systemen Gebouwd" },
    { value: "200+", label: language === "EN" ? "Automations Built" : "Automatiseringen Gebouwd" },
    { value: "7+", label: language === "EN" ? "Years in Tech" : "Jaar in Tech" },
  ];

  return (
    <section
      className={`relative overflow-hidden min-h-screen flex items-start pt-8 sm:pt-12 transition-colors duration-500 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-white'
      }`}
      id="about"
    >
      {/* Subtle glassy background bubbles - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
          {/* Purple/violet bubble - top right */}
          <div
            className={`absolute -top-10 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] animate-float-slow ${
              isDarkMode ? 'bg-violet-500/20' : 'bg-violet-400/25'
            }`}
          />
          {/* Blue bubble - left */}
          <div
            className={`absolute top-1/3 -left-20 w-[350px] h-[350px] rounded-full blur-[100px] animate-float-slow-reverse ${
              isDarkMode ? 'bg-blue-500/15' : 'bg-blue-400/20'
            }`}
          />
          {/* Pink/rose bubble - bottom */}
          <div
            className={`absolute bottom-20 right-10 w-[300px] h-[300px] rounded-full blur-[100px] animate-float-slow ${
              isDarkMode ? 'bg-rose-500/15' : 'bg-rose-400/20'
            }`}
            style={{ animationDelay: '2s' }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">

          {/* Main Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.8, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-12"
            style={{ willChange: 'opacity, transform' }}
          >
            {/* Small greeting */}
            <p className={`text-xs sm:text-sm font-medium tracking-wide uppercase mb-4 sm:mb-6 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {language === "EN" ? "Hello, I'm" : "Hallo, ik ben"}
            </p>

            {/* Name */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Omar Nassar
            </h1>

            {/* Role with typed text */}
            <div className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 min-h-[36px] sm:min-h-[40px] md:min-h-[48px] ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className="text-primaryColor">
                <span id="typed-text" />
              </span>
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg md:text-xl lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {text}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="#contact" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 bg-primaryColor text-white hover:bg-primaryColor/90 hover:shadow-glow-purple active:scale-[0.98]"
                >
                  {language === "EN" ? "Get in touch" : "Neem contact op"}
                </button>
              </a>

              <a href="#portfolio" className="w-full sm:w-auto">
                <button
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border active:scale-[0.98] ${
                    isDarkMode
                      ? 'text-white border-primaryColor/50 hover:border-primaryColor hover:bg-primaryColor/10'
                      : 'text-primaryColor border-primaryColor/30 hover:border-primaryColor hover:bg-primaryColor/5'
                  }`}
                >
                  {language === "EN" ? "View work" : "Bekijk werk"}
                </button>
              </a>

              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-4 py-2 overflow-hidden"
              >
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isDarkMode ? 'bg-primaryColor' : 'bg-primaryColor'
                  }`}
                />

                {/* Icon with bounce animation */}
                <span className={`relative transition-all duration-300 group-hover:-translate-y-0.5 ${
                  isDarkMode ? 'text-gray-400 group-hover:text-primaryColor' : 'text-gray-500 group-hover:text-primaryColor'
                }`}>
                  <i className="ri-download-2-line text-lg"></i>
                </span>

                {/* Text */}
                <span className={`relative font-medium text-sm sm:text-base transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'
                }`}>
                  Download CV
                </span>

                {/* Arrow that appears on hover */}
                <span className={`relative opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                  isDarkMode ? 'text-primaryColor' : 'text-primaryColor'
                }`}>
                  <i className="ri-arrow-right-up-line text-sm"></i>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Stats Row - Clean and minimal */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.1 : 0.3, ease: "easeOut" }}
            className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 ${
              isDarkMode
                ? 'bg-dark-card border border-dark-border'
                : 'bg-white border border-gray-200 shadow-md'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs sm:text-sm font-medium ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social links - subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.15 : 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            {[
              { href: "https://github.com/OmarNassar1127", icon: "ri-github-fill" },
              { href: "https://www.linkedin.com/in/omar-nassar-93a176155/", icon: "ri-linkedin-fill" },
              { href: "https://twitter.com/GodelTrabuco69", icon: "ri-twitter-fill" },
              { href: "mailto:omarnassar1127@gmail.com", icon: "ri-mail-line" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl sm:text-2xl transition-colors duration-200 ${
                  isDarkMode
                    ? 'text-gray-600 hover:text-white'
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
