import React, { useState, useEffect, useMemo, useRef } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
import NeuralBackground from "./NeuralBackground";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = ({ language }) => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");
  const loadMoreButtonRef = useRef(null);

  // Detect mobile for performance optimizations
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter out different categories for separate counts
  const aiProjects = useMemo(() => data.filter(item => item.category === "ai/ml"), []);
  const proProjects = useMemo(() => data.filter(item => item.category === "Professional"), []);

  const filterOptions = [
    { key: "all", labelEN: "All Work", labelNL: "Alle Projecten" },
    { key: "ai", labelEN: "AI & ML", labelNL: "AI & ML" },
    { key: "professional", labelEN: "Web/App Dev", labelNL: "Web/App Dev" },
  ];

  const loadMoreHandler = () => {
    // Store the current scroll position relative to the button
    const buttonPosition = loadMoreButtonRef.current?.getBoundingClientRect().top || 0;
    const scrollY = window.scrollY || window.pageYOffset;
    const targetScrollPosition = scrollY + buttonPosition;

    setNextItems(portfolios.length);

    // After state update, restore scroll position
    setTimeout(() => {
      window.scrollTo({
        top: targetScrollPosition - 100, // Offset a bit so they can see new content
        behavior: 'smooth'
      });
    }, 100);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  const sortProjects = (projects, order) => {
    return [...projects].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const dateComparison = order === "newest" ? dateB - dateA : dateA - dateB;

      if (dateComparison !== 0) return dateComparison;

      if (a.priority && b.priority) return a.priority - b.priority;
      if (a.priority) return -1;
      if (b.priority) return 1;
      return 0;
    });
  };

  useEffect(() => {
    let filteredData = data;

    if (selectTab === "professional") {
      filteredData = proProjects;
    } else if (selectTab === "ai") {
      filteredData = aiProjects;
    }

    const sortedData = sortProjects(filteredData, sortOrder);
    setPortfolios(sortedData);
  }, [selectTab, sortOrder, aiProjects, proProjects]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "EN" ? "en-US" : "nl-NL", {
      year: 'numeric',
      month: 'short'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="portfolio" className={`relative py-16 overflow-hidden ${
      selectTab === 'ai'
        ? 'bg-gradient-to-b from-gray-50 via-slate-900 to-slate-900'
        : 'bg-gradient-to-br from-gray-50 to-white'
    }`}
    style={{ transition: isMobile ? 'background-color 0.3s ease' : 'background 0.5s ease' }}>

      {/* Combined Gradient Overlay for AI Mode - Only on desktop */}
      {selectTab === 'ai' && !isMobile && (
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(249, 250, 251, 1) 0%, transparent 10%, transparent 90%, rgba(249, 250, 251, 1) 100%)'
          }}
        />
      )}

      {/* Simplified fade for mobile */}
      {selectTab === 'ai' && isMobile && (
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(249, 250, 251, 1) 0%, transparent 15%, transparent 85%, rgba(249, 250, 251, 1) 100%)'
          }}
        />
      )}

      {/* Neural Background - DESKTOP ONLY for performance */}
      {selectTab === 'ai' && !isMobile && (
        <div
          className="absolute inset-0 z-0 opacity-100"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
            transition: 'opacity 0.5s ease'
          }}
        >
          <NeuralBackground />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {selectTab === 'ai' && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primaryColor/20 rounded-full blur-[100px] pointer-events-none" />
          )}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-md shadow-lg
              ${selectTab === 'ai'
                ? 'bg-purple-900/80 text-white border border-purple-400/50'
                : 'bg-primaryColor/10 text-primaryColor'}`}
          >
            {selectTab === 'ai' ? (
              <i className="ri-brain-line text-lg animate-pulse"></i>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            )}
            {language === "EN" ? "Portfolio Timeline" : "Portfolio Tijdlijn"}
          </motion.div>

          <h3 className={`text-4xl md:text-5xl font-bold mb-4 ${
            selectTab === 'ai'
              ? 'text-gray-900'
              : 'text-headingColor'
          }`}
          style={selectTab === 'ai' ? { textShadow: '0 2px 8px rgba(255,255,255,0.5)' } : {}}>
            {language === "EN" ? "My Projects" : "Mijn Projecten"}
          </h3>
          <p className={`text-lg max-w-2xl mx-auto font-medium ${
            selectTab === 'ai'
              ? 'text-gray-800'
              : 'text-smallTextColor'
          }`}
          style={selectTab === 'ai' ? { textShadow: '0 1px 4px rgba(255,255,255,0.3)' } : {}}>
            {language === "EN"
              ? "A curated selection of projects showcasing full stack development, AI integration, and end-to-end system design."
              : "Een selectie van projecten die full stack development, AI-integratie en end-to-end systeemontwerp tonen."}
          </p>
        </div>

        {/* Controls Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 relative z-10">

          {/* Custom Tab Switcher */}
          <div className={`p-1.5 rounded-2xl shadow-xl flex flex-wrap gap-2 ${
            isMobile ? '' : 'backdrop-blur-md'
          } ${
            selectTab === 'ai'
              ? 'bg-gray-800/90 border border-gray-700/50'
              : 'bg-white border border-gray-200/20'
          }`}
          style={{ transition: 'background-color 0.2s ease, border-color 0.2s ease' }}>
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setSelectTab(option.key)}
                className={`
                  relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
                  ${selectTab === option.key
                    ? selectTab === 'ai'
                      ? 'text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                      : 'text-white shadow-lg'
                    : selectTab === 'ai'
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-primaryColor hover:bg-gray-50'
                  }
                `}
              >
                {selectTab === option.key && (
                  <motion.div
                    layoutId={selectTab === 'ai' ? 'activeTabAI' : 'activeTabNormal'}
                    className={`absolute inset-0 rounded-xl ${selectTab === 'ai' ? 'bg-purple-600' : 'bg-primaryColor'}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{language === "EN" ? option.labelEN : option.labelNL}</span>
              </button>
            ))}
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-3">
            <span className={`font-medium text-sm ${selectTab === 'ai' ? 'text-gray-200' : 'text-smallTextColor'}`}>
              {language === "EN" ? "Sort by:" : "Sorteer op:"}
            </span>
            <div className={`rounded-lg p-1 ${selectTab === 'ai' ? 'bg-gray-800/90 border border-gray-700/50' : 'bg-gray-100'}`}
            style={{ transition: 'background-color 0.2s ease, border-color 0.2s ease' }}>
              <button
                onClick={() => setSortOrder("newest")}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                  ${sortOrder === "newest"
                    ? selectTab === 'ai'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-white text-primaryColor shadow-sm'
                    : selectTab === 'ai'
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-primaryColor'
                  }
                `}
              >
                {language === "EN" ? "Newest" : "Nieuwste"}
              </button>
              <button
                onClick={() => setSortOrder("oldest")}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                  ${sortOrder === "oldest"
                    ? selectTab === 'ai'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-white text-primaryColor shadow-sm'
                    : selectTab === 'ai'
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-primaryColor'
                  }
                `}
              >
                {language === "EN" ? "Oldest" : "Oudste"}
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {portfolios?.slice(0, nextItems)?.map((portfolio) => (
              <motion.div
                key={portfolio.id}
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`
                  group relative rounded-2xl overflow-hidden transition-all duration-500 flex flex-col
                  ${portfolio.category === 'ai/ml' && selectTab === 'ai'
                    ? 'bg-gray-900/80 backdrop-blur-md border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:-translate-y-2'
                    : 'bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2'
                  }
                `}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={portfolio.imgUrl}
                    alt={portfolio.title}
                  />

                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100
                    ${portfolio.category === 'ai/ml'
                      ? 'bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent'
                      : 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                    }`}
                  />

                  {/* View Details Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <button
                      onClick={() => showModalHandler(portfolio.id)}
                      className={`
                        px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 focus:outline-none
                        ${portfolio.category === 'ai/ml'
                          ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-[0_0_15px_rgba(147,51,234,0.5)]'
                          : 'bg-white text-primaryColor hover:bg-gray-100 border-2 border-white'
                        }
                      `}
                    >
                      {language === "EN" ? "View Details" : "Bekijk Details"}
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolio.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium border
                          ${portfolio.category === 'ai/ml' && selectTab === 'ai'
                            ? 'bg-purple-900/40 text-purple-300 border-purple-500/20'
                            : 'bg-gray-100 text-gray-600 border-transparent group-hover:bg-primaryColor/10 group-hover:text-primaryColor'
                          }
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300
                    ${portfolio.category === 'ai/ml' && selectTab === 'ai'
                      ? 'text-white group-hover:text-purple-400'
                      : 'text-headingColor group-hover:text-primaryColor'
                    }
                  `}>
                    {portfolio.title}
                  </h3>

                  <p className={`text-sm leading-relaxed line-clamp-3 mb-4
                    ${selectTab === 'ai' ? 'text-gray-400' : 'text-smallTextColor'}
                  `}>
                    {language === "EN" ? portfolio.descriptionEN : portfolio.descriptionNL}
                  </p>

                  {/* Date Footer - Consistent for all cards */}
                  <div className={`flex items-center gap-2 pt-4 mt-auto border-t ${
                    portfolio.category === 'ai/ml' && selectTab === 'ai'
                      ? 'border-purple-500/10'
                      : 'border-gray-100'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      portfolio.category === 'ai/ml' && selectTab === 'ai'
                        ? 'bg-purple-500'
                        : 'bg-primaryColor'
                    }`} />
                    <span className="text-xs text-gray-500 font-medium">{formatDate(portfolio.date)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {nextItems < portfolios.length && (
          <div ref={loadMoreButtonRef} className="text-center mt-16">
            <button
              onClick={loadMoreHandler}
              className={`
                px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl
                ${selectTab === 'ai'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                  : 'bg-primaryColor hover:bg-primaryColor/90 text-white'
                }
              `}
            >
              {language === "EN" ? "Load More Projects" : "Meer Projecten Laden"}
            </button>
          </div>
        )}
      </div>

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          activeID={activeID}
          language={language}
        />
      )}
    </section>
  );
};

export default Portfolio;