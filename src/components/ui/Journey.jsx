import React from "react";
import journeyData from "../../data/journeyData.json";
import { motion } from "framer-motion";

const Journey = ({ language }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconAnimation = {
    hidden: { scale: 0, rotate: -180 },
    show: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <section id="journey" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            variants={item}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              {language === "EN" ? "My Journey" : "Mijn Reis"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "EN" 
                ? journeyData.stages[0].descriptionEN 
                : journeyData.stages[0].descriptionNL}
            </p>
          </motion.div>
          <div className="relative">
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-1 h-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full"
                style={{ 
                  backgroundSize: "200% 200%",
                  animation: "gradient 8s ease infinite"
                }}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
              className="relative z-10"
            >
              {journeyData.stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                variants={item}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    style={{ animation: "float 6s ease-in-out infinite" }}
                    className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/10 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                      {`${stage.year} - ${stage.period}`}
                    </h3>
                    <h4 className="text-lg font-semibold mb-3 text-foreground/80">
                      {language === "EN" ? stage.titleEN : stage.titleNL}
                    </h4>
                    <p className="text-muted-foreground">
                      {language === "EN" ? stage.descriptionEN : stage.descriptionNL}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  variants={iconAnimation}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border-4 border-background flex items-center justify-center relative z-10 shadow-lg"
                >
                  <motion.img 
                    src={stage.icon} 
                    alt="" 
                    className="w-6 h-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
              </motion.div>
            ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Journey;
