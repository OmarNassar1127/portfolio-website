import React from "react";
import journeyData from "../../data/journeyData.json";
import { motion } from "framer-motion";

const introText = {
  EN: `In 2017, I began my software development career at MBO Amstelland, learning HTML/CSS, PHP, Javascript, and MySQL, and quickly excelling in coding. After a year-long internship and an additional year of work at CSDM post-graduation, topping my class, I ventured into entrepreneurship with Bitsliced, focusing on blockchain and cryptocurrencies to create an NFT marketplace for trading real-world assets. In 2023, I further expanded my career by joining Vloto B.V as a Backend Developer. At Vloto, a luxury car-sharing service boasting a fleet from Audi e-tron Q8 to Polestar 2 Dual Motor, I used Laravel for creating RestFul APIs, initially enhancing our internal dashboard. My work has also involved innovating our app with features like discount coupons and flexible booking date edits, thereby significantly enriching user experience, and currently, I am automating various manual processes to elevate service efficiency.`,
  NL: `In 2017 begon ik mijn softwareontwikkelingscarrière bij MBO Amstelland, waar ik HTML/CSS, PHP, Javascript en MySQL leerde en snel uitblonk in programmeren. Na een jaar stage en een extra jaar werk bij CSDM na mijn afstuderen, waarbij ik de beste van mijn klas was, waagde ik me aan het ondernemerschap met Bitsliced, met focus op blockchain en cryptocurrencies om een NFT-marktplaats te creëren voor het verhandelen van real-world assets. In 2023 breidde ik mijn carrière verder uit door me aan te sluiten bij Vloto B.V. als Backend Developer. Bij Vloto, een luxe auto-deelservice met een indrukwekkende vloot van Audi e-tron Q8 tot Polestar 2 Dual Motor, gebruikte ik Laravel voor het creëren van RestFul API's, waarbij ik aanvankelijk ons interne dashboard verbeterde. Mijn werk heeft ook betrekking gehad op het innoveren van onze app met functies zoals kortingsbonnen en flexibele boekingsdatum aanpassingen, waardoor de gebruikerservaring aanzienlijk werd verrijkt, en momenteel ben ik bezig met het automatiseren van verschillende handmatige processen om de service-efficiëntie te verhogen.`
};

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
      <section id="journey" className="section-padding">
        <div className="container fade-in-up">
          <motion.div 
            variants={item}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              {language === "EN" ? "My Journey" : "Mijn Reis"}
            </h2>
            <motion.p
              variants={item}
              className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed"
            >
              {language === "EN" ? introText.EN : introText.NL}
            </motion.p>
            <motion.p
              variants={item}
              className="text-muted-foreground text-base mt-6 max-w-2xl mx-auto"
            >
              {language === "EN" 
                ? "Here below is a timeline with more details about my journey."
                : "Hieronder staat een tijdlijn met meer details over mijn reis."}
            </motion.p>
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
                      boxShadow: "0 20px 40px rgba(var(--primary), 0.1)"
                    }}
                    style={{ animation: "float 6s ease-in-out infinite" }}
                    className="group bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
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
