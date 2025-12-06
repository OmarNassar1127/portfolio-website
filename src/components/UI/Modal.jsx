import React from "react";
import portfolios from "../../assets/data/portfolioData";
import { motion } from "framer-motion";

const Modal = ({ activeID, setShowModal, language }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
  const isAI = portfolio.category === "ai/ml";

  const handleCloseModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
      onClick={() => setShowModal(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className={`
          w-11/12 md:max-w-[700px] relative rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl
          ${isAI
            ? 'bg-slate-900 border border-purple-500/30'
            : 'bg-white'
          }
        `}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className={`
            absolute top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
            ${isAI
              ? 'bg-black/40 text-white hover:bg-purple-600'
              : 'bg-white/80 text-headingColor hover:bg-primaryColor hover:text-white shadow-md'
            }
          `}
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        {/* Image Section */}
        <div className="relative h-64 md:h-80 w-full">
          <img
            className="w-full h-full object-cover"
            src={portfolio.imgUrl}
            alt={portfolio.title}
          />
          <div className={`absolute inset-0 bg-gradient-to-t 
            ${isAI
              ? 'from-slate-900 to-transparent'
              : 'from-white via-white/5 to-transparent'
            }`}
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-10 relative">
          <h2 className={`text-3xl font-bold mb-6 
            ${isAI ? 'text-white' : 'text-headingColor'}
          `}>
            {portfolio.title}
          </h2>

          <p className={`text-[15px] leading-7 mb-8 
            ${isAI ? 'text-gray-300' : 'text-smallTextColor'}
          `}>
            {language === "EN"
              ? portfolio.descriptionEN
              : portfolio.descriptionNL}
          </p>

          <div className="flex flex-col gap-4">
            <h4 className={`text-lg font-bold 
              ${isAI ? 'text-purple-300' : 'text-headingColor'}
            `}>
              {language === "EN" ? "Technologies Used:" : "Gebruikte Technologieën:"}
            </h4>

            <div className="flex flex-wrap gap-2">
              {portfolio.technologies.map((item, index) => (
                <span
                  key={index}
                  className={`
                    px-3 py-1.5 rounded-lg text-sm font-medium
                    ${isAI
                      ? 'bg-purple-900/30 text-purple-200 border border-purple-500/20'
                      : 'bg-gray-100 text-gray-700'
                    }
                  `}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Links / Live Site Button if available */}
          {portfolio.siteUrl && portfolio.siteUrl !== "#" && (
            <div className="mt-8 pt-6 border-t border-gray-100/10">
              <a
                href={portfolio.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                  ${isAI
                    ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                    : 'bg-primaryColor text-white hover:bg-gray-800'
                  }
                `}
              >
                {language === "EN" ? "Visit Live Site" : "Bezoek Website"}
                <i className="ri-external-link-line"></i>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
export default Modal;
