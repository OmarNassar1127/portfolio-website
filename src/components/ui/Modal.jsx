import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal, language }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  const handleCloseModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
  };

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modal = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => setShowModal(false)}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="w-11/12 md:max-w-2xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card rounded-lg shadow-lg overflow-hidden"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="relative">
            <div className="aspect-video overflow-hidden">
              <motion.img
                src={portfolio.imgUrl}
                alt={portfolio.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
              onClick={handleCloseModal}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent mb-2">
                {portfolio.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {language === "EN" ? portfolio.descriptionEN : portfolio.descriptionNL}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">
                  {language === "EN" ? "Technologies Used:" : "Gebruikte Technologieën:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {portfolio.technologies.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Badge variant="secondary">{item}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {portfolio.siteUrl && portfolio.siteUrl !== "#" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <Button asChild>
                    <a
                      href={portfolio.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {language === "EN" ? "Visit Project" : "Bekijk Project"}
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
