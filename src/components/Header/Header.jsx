import React, { useEffect, useState } from "react";
import me2 from "../../assets/images/me2.png";

const Header = ({ toggleLanguage, language, isDarkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("#about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const content = {
    EN: {
      navigation: {
        about: "About",
        journey: "Journey",
        portfolio: "Portfolio",
        skills: "Skills",
        certifications: "Certifications",
        contact: "Contact"
      },
      logoText: "AI Engineer",
      menuClose: "Close menu",
      emailLabel: "Get in touch",
      availableText: "Available for AI projects"
    },
    NL: {
      navigation: {
        about: "Over mij",
        journey: "Journey",
        portfolio: "Portefeuille",
        skills: "Vaardigheden",
        certifications: "Certificeringen",
        contact: "Contact"
      },
      logoText: "AI Engineer",
      menuClose: "Menu sluiten",
      emailLabel: "Neem contact op",
      availableText: "Beschikbaar voor AI projecten"
    }
  };

  const currentContent = content[language];

  const navigationItems = [
    { href: "#about", label: currentContent.navigation.about, icon: "ri-user-line" },
    { href: "#journey", label: currentContent.navigation.journey, icon: "ri-road-map-line" },
    { href: "#portfolio", label: currentContent.navigation.portfolio, icon: "ri-briefcase-line" },
    { href: "#skills", label: currentContent.navigation.skills, icon: "ri-code-line" },
    { href: "#certifications", label: currentContent.navigation.certifications, icon: "ri-award-line" },
    { href: "#contact", label: currentContent.navigation.contact, icon: "ri-mail-line" }
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href);
      let current = sections[0];

      sections.forEach(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);

    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setActiveSection(href);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Header - Simple bar */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primaryColor/40">
                  <img src={me2} alt="Omar Nassar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-bg rounded-full"></div>
              </div>
            </a>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl transition-all ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {isDarkMode ? <i className="ri-sun-line text-lg"></i> : <i className="ri-moon-line text-lg"></i>}
              </button>

              <div className={`flex p-0.5 rounded-lg ${isDarkMode ? 'bg-dark-card' : 'bg-gray-100'}`}>
                <button
                  onClick={() => language !== "EN" && toggleLanguage()}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${language === "EN" ? 'text-white bg-primaryColor' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >EN</button>
                <button
                  onClick={() => language !== "NL" && toggleLanguage()}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${language === "NL" ? 'text-white bg-primaryColor' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >NL</button>
              </div>

              <button onClick={toggleMenu} className={`menu-toggle p-2 rounded-xl ${isDarkMode ? 'hover:bg-dark-card' : 'hover:bg-gray-100'}`}>
                <div className="w-6 h-6 relative">
                  <span className={`absolute h-0.5 w-full transition-all duration-300 ${isDarkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                  <span className={`absolute h-0.5 w-full transition-all duration-300 top-3 ${isDarkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute h-0.5 w-full transition-all duration-300 ${isDarkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Header - Floating pill navbar */}
      <header className="hidden lg:block fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="flex justify-center px-4 pt-4">
          <div
            className={`pointer-events-auto relative flex items-center justify-between h-14 px-3 rounded-full transition-all duration-500 ${
              isScrolled
                ? isDarkMode
                  ? 'bg-dark-card/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(136,115,239,0.15)]'
                  : 'bg-white/98 backdrop-blur-xl shadow-[0_8px_32px_rgba(136,115,239,0.2),0_2px_8px_rgba(0,0,0,0.08)]'
                : isDarkMode
                  ? 'bg-dark-card/80 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                  : 'bg-white/80 backdrop-blur-md shadow-[0_0_0_1px_rgba(0,0,0,0.06)]'
            }`}
          >
            {/* Rainbow scroll progress border */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                padding: '2px',
                background: `conic-gradient(from 0deg,
                  #8873ef 0deg,
                  #48dbfb ${scrollProgress * 0.72}deg,
                  #4ade80 ${scrollProgress * 1.44}deg,
                  #feca57 ${scrollProgress * 2.16}deg,
                  #ff9ff3 ${scrollProgress * 2.88}deg,
                  #ff6b6b ${scrollProgress * 3.6}deg,
                  ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'} ${scrollProgress * 3.6}deg
                )`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none'
              }}
            />

            {/* Subtle glow effect when scrolling */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                opacity: scrollProgress > 5 ? Math.min(scrollProgress / 100, 0.5) : 0,
                boxShadow: '0 0 20px rgba(255,107,107,0.2), 0 0 40px rgba(72,219,251,0.15), 0 0 60px rgba(136,115,239,0.1)',
                transition: 'opacity 0.3s ease'
              }}
            />

            {/* Logo */}
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="group flex-shrink-0"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primaryColor/40 group-hover:ring-primaryColor transition-all duration-300">
                  <img
                    src={me2}
                    alt="Omar Nassar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-card rounded-full"></div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-1 mx-6">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href
                      ? 'text-white bg-primaryColor'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Side - Dark Mode & Language Toggle */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? 'text-gray-400 hover:text-white hover:bg-white/10'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <i className="ri-sun-line text-lg"></i> : <i className="ri-moon-line text-lg"></i>}
              </button>

              <div className={`flex p-0.5 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`}>
                <button
                  onClick={() => language !== "EN" && toggleLanguage()}
                  className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                    language === "EN"
                      ? 'text-white bg-primaryColor'
                      : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >EN</button>
                <button
                  onClick={() => language !== "NL" && toggleLanguage()}
                  className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                    language === "NL"
                      ? 'text-white bg-primaryColor'
                      : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >NL</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Mobile Menu Panel */}
        <div className={`mobile-menu absolute top-0 right-0 h-full w-[75vw] max-w-[280px] shadow-2xl transform transition-transform duration-300 ${
          isDarkMode ? 'bg-dark-bg' : 'bg-white'
        } ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          {/* Menu Header */}
          <div className={`flex items-center justify-between p-4 border-b ${
            isDarkMode ? 'border-dark-border' : 'border-gray-100'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-r from-primaryColor to-accent-cyan rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={me2}
                  alt="Omar Nassar"
                  className="w-7 h-7 object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>Omar Nassar</h3>
                <p className={`text-xs ${isDarkMode ? 'text-accent-cyan' : 'text-smallTextColor'}`}>{currentContent.availableText}</p>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 duration-200"
              aria-label={currentContent.menuClose}
            >
            </button>
          </div>

          {/* Menu Navigation */}
          <nav className="px-4 py-4 flex-1 overflow-y-auto pb-32">
            <ul className="space-y-1">
              {navigationItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-3 py-2.5 px-3 rounded-xl font-medium transition-all duration-200 ${
                      activeSection === item.href
                        ? 'text-white bg-gradient-to-r from-primaryColor to-accent-cyan shadow-lg'
                        : isDarkMode
                          ? 'text-gray-400 hover:text-accent-cyan hover:bg-dark-card'
                          : 'text-smallTextColor hover:text-primaryColor hover:bg-gray-50'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      activeSection === item.href
                        ? 'bg-white/20'
                        : ''
                    }`}>
                      <i className={`${item.icon} text-lg ${
                        activeSection === item.href ? 'text-white' : isDarkMode ? 'text-accent-cyan' : 'text-primaryColor'
                      }`}></i>
                    </div>
                    <span className={`font-semibold text-base flex-1 ${
                      activeSection === item.href ? 'text-white' : ''
                    }`}>{item.label}</span>
                    {activeSection === item.href && (
                      <i className="ri-arrow-right-s-line text-lg text-white"></i>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Gradient Fade before Footer */}
          <div className={`absolute bottom-24 left-0 right-0 h-12 pointer-events-none z-10 ${
            isDarkMode ? 'bg-gradient-to-t from-dark-bg to-transparent' : 'bg-gradient-to-t from-white to-transparent'
          }`}></div>

          {/* Mobile Menu Footer - Email Contact */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 z-20 ${
            isDarkMode ? 'bg-dark-bg shadow-[0_-4px_12px_rgba(0,0,0,0.3)]' : 'bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)]'
          }`}>
            <div className="text-center">
              <p className={`text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-smallTextColor'}`}>
                {currentContent.emailLabel}
              </p>
              <a
                href="mailto:omarnassar1127@gmail.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primaryColor to-accent-cyan text-white font-medium px-3 py-2 rounded-xl hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-200"
              >
                <i className="ri-mail-line text-base"></i>
                <span className="text-xs">omarnassar1127@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-6"></div>
    </>
  );
};

export default Header;
