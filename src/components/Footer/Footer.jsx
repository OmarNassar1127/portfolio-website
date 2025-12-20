import React from "react";

const Footer = ({ language, isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const content = {
    EN: {
      ctaTitle: "Let's build AI that works",
      ctaSubtitle: "Multi-agent systems, RAG platforms, and custom AI solutions. From concept to production.",
      ctaButton: "Start a conversation",
      quickLinks: "Quick Links",
      connect: "Connect",
      location: "Based in Amsterdam",
      availability: "Available for AI projects",
      navigation: {
        about: "About",
        journey: "Journey",
        portfolio: "Portfolio",
        skills: "Skills",
        contact: "Contact"
      },
      copyright: `© ${currentYear} Omar Nassar. All rights reserved.`,
      madeWith: "Made with code in Amsterdam"
    },
    NL: {
      ctaTitle: "Laten we AI bouwen die werkt",
      ctaSubtitle: "Multi-agent systemen, RAG-platformen en custom AI-oplossingen. Van concept tot productie.",
      ctaButton: "Start een gesprek",
      quickLinks: "Snelle Links",
      connect: "Verbinden",
      location: "Gevestigd in Amsterdam",
      availability: "Beschikbaar voor AI projecten",
      navigation: {
        about: "Over mij",
        journey: "Journey",
        portfolio: "Portefeuille",
        skills: "Vaardigheden",
        contact: "Contact"
      },
      copyright: `© ${currentYear} Omar Nassar. Alle rechten voorbehouden.`,
      madeWith: "Gemaakt met code in Amsterdam"
    }
  };

  const currentContent = content[language];

  const socialLinks = [
    { href: "mailto:omarnassar1127@gmail.com", icon: "ri-mail-line", label: "Email", platform: "Email" },
    { href: "https://www.linkedin.com/in/omar-nassar-93a176155/", icon: "ri-linkedin-box-fill", label: "LinkedIn", platform: "Omar Nassar" },
    { href: "https://github.com/OmarNassar1127", icon: "ri-github-fill", label: "GitHub", platform: "OmarNassar1127" },
    { href: "https://twitter.com/GodelTrabuco69", icon: "ri-twitter-line", label: "Twitter", platform: "@GodelTrabuco69" }
  ];

  const navigationLinks = [
    { href: "#about", label: currentContent.navigation.about },
    { href: "#journey", label: currentContent.navigation.journey },
    { href: "#portfolio", label: currentContent.navigation.portfolio },
    { href: "#skills", label: currentContent.navigation.skills },
    { href: "#contact", label: currentContent.navigation.contact }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className={`relative transition-colors duration-300 ${
      isDarkMode
        ? 'bg-dark-bg border-t border-dark-border'
        : 'bg-white border-t border-gray-100'
    }`}>
      {/* Cyber grid background for dark mode */}
      {isDarkMode && (
        <div className="absolute inset-0 cyber-bg opacity-30"></div>
      )}

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* CTA Section */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="max-w-md">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 leading-tight ${
                isDarkMode ? 'text-white' : 'text-headingColor'
              }`}>
                {currentContent.ctaTitle}
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-smallTextColor'
              }`}>
                {currentContent.ctaSubtitle}
              </p>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="inline-block group"
              >
                <div className="bg-gradient-to-r from-accent-cyan to-primaryColor text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-accent-cyan/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                  <i className="ri-chat-3-line text-xl group-hover:scale-110 transition-transform duration-200"></i>
                  {currentContent.ctaButton}
                  <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform duration-200"></i>
                </div>
              </a>

              {/* Status badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <div className={`flex items-center gap-2 text-sm px-3 py-2 rounded-full ${
                  isDarkMode
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-green-50 text-green-700'
                }`}>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {currentContent.availability}
                </div>
                <div className={`flex items-center gap-2 text-sm px-3 py-2 rounded-full ${
                  isDarkMode
                    ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                    : 'bg-blue-50 text-blue-700'
                }`}>
                  <i className={`ri-map-pin-line ${isDarkMode ? 'text-accent-cyan' : 'text-blue-500'}`}></i>
                  {currentContent.location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation & Social */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">

              {/* Quick Links */}
              <div>
                <h3 className={`text-lg font-semibold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-headingColor'
                }`}>
                  {currentContent.quickLinks}
                </h3>
                <nav className="space-y-4">
                  {navigationLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`block font-medium transition-all duration-200 hover:translate-x-1 transform ${
                        isDarkMode
                          ? 'text-gray-400 hover:text-accent-cyan'
                          : 'text-smallTextColor hover:text-primaryColor'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Social Connect */}
              <div>
                <h3 className={`text-lg font-semibold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-headingColor'
                }`}>
                  {currentContent.connect}
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                      className={`group flex items-center gap-4 p-3 rounded-xl transition-all duration-200 ${
                        isDarkMode
                          ? 'hover:bg-dark-card border border-transparent hover:border-dark-border'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-200 ${
                        isDarkMode
                          ? 'bg-dark-card border border-dark-border text-gray-400 group-hover:border-accent-cyan group-hover:text-accent-cyan'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-primaryColor group-hover:text-white'
                      }`}>
                        <i className={`${link.icon} text-lg`}></i>
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium transition-colors duration-200 ${
                          isDarkMode
                            ? 'text-gray-300 group-hover:text-accent-cyan'
                            : 'text-headingColor group-hover:text-primaryColor'
                        }`}>
                          {link.label}
                        </div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-smallTextColor'}`}>
                          {link.platform}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`border-t transition-colors duration-300 ${
        isDarkMode
          ? 'border-dark-border bg-dark-surface/50'
          : 'border-gray-100 bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className={`flex flex-col sm:flex-row items-center gap-4 text-sm ${
              isDarkMode ? 'text-gray-500' : 'text-smallTextColor'
            }`}>
              <span>{currentContent.copyright}</span>
              <span className="hidden sm:block">•</span>
              <span>{currentContent.madeWith}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
