import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Typed from "typed.js";
import { Button } from "./button";
import { Card } from "./card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Hero = ({ language }) => {
  const typedRef = useRef(null);
  const cvLink = language === 'EN' ? EnglishCV : DutchCV;

  const text =
    language === "EN"
      ? "As a quick learner who thrives on challenges, I began in cryptocurrency trading, founding CIWW to educate on market strategies. At Vloto B.V., I’m a Backend Developer, building efficient APIs and enhancing automation. Recently, I've been focusing on AI projects, including a Private Document QA system using RAG and vector databases, and a neural network for recognizing nails even in blurry images. I’m passionate about shaping the future of digital technologies. Let’s connect to drive innovation forward."
      : "Als snelle leerling die gedijt op uitdagingen, begon ik in cryptocurrency-handel en richtte CIWW op om marktstrategieën te onderwijzen. Bij Vloto B.V. werk ik als Backend Developer, waar ik efficiënte API's bouw en automatisering verbeter. Recentelijk heb ik me gericht op AI-projecten, waaronder een Private Document QA-systeem met RAG en vectordatabases en een neuraal netwerk voor het herkennen van nagels. Ik ben gepassioneerd over het vormgeven van de toekomst van digitale technologieën. Laten we verbinden om innovatie vooruit te drijven.";

  useEffect(() => {
    const options = {
      strings: ["Software Development", "Product Management", "QA"],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    };

    typedRef.current = new Typed("#typed-text", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-[90vh] flex items-center py-16 sm:py-20" 
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ============= hero left content ================= */}
          <div className="space-y-6">
            <motion.div 
              variants={container}
              className="space-y-4">
              <motion.h5
              variants={item}
              className="text-muted-foreground font-medium text-sm sm:text-base tracking-wide"
            >
              {language === "EN" ? "Hello, my name is" : "Hallo, ik ben"}
            </motion.h5>
            <motion.div
              variants={container}
              className="space-y-2"
            >
              <motion.h1 
                variants={item}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
              >
                Omar Nassar
              </motion.h1>
              <motion.div variants={item} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-sm sm:text-base">
                  {language === "EN" ? "and I'm a" : "en ik ben een"}
                </span>
                <motion.span
                  variants={item}
                  whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                  className="text-lg sm:text-xl font-semibold text-primary"
                >
                  Developer
                </motion.span>
              </motion.div>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm sm:text-base font-medium">
                {language === "EN" ? "With experience in:" : "Met ervaring in:"}{" "}
              </span>
              <motion.span 
                variants={item}
                className="text-primary font-semibold" 
                id="typed-text"
              ></motion.span>
            </motion.div>
            <motion.div
              variants={container}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <motion.a 
                href="#contact"
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="bg-primary text-primary-foreground font-[500] flex items-center gap-2
                            hover:bg-primary/90 transition-colors duration-300 py-2 px-4 rounded-[8px]"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 8px rgba(var(--primary), 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="ri-mail-line"></i>
                  {language === "EN" ? "Contact me" : "Neem contact met mij op"}
                </motion.button>
              </motion.a>
              <motion.a
                href="#portfolio"
                variants={item}
                className="text-primary font-[600] text-[16px] border-b-2 border-transparent hover:border-primary transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "EN" ? "See my portfolio" : "Zie mijn portfolio"}
              </motion.a>
              <motion.a 
                href={cvLink} 
                target="_blank" 
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="bg-primary/10 text-primary font-[500] flex items-center gap-2
                            hover:bg-primary hover:text-primary-foreground transition-all duration-300 py-2 px-4 rounded-[8px]"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 8px rgba(var(--primary), 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="ri-article-line"></i>
                  {language === "EN" ? "CV" : "CV"}
                </motion.button>
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="flex gap-2 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-prose"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 1.2 }}
                >
                  <i className="ri-apps-line"></i>
                </motion.span>
                {text}
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="flex items-center flex-wrap gap-4 mt-14"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="text-blueGray-700 text-sm font-bold w-full mb-2"
              >
                {language === "EN" ? "My socials:" : "Mijn socials:"}
              </motion.span>
              <motion.div
                variants={container}
                className="flex flex-wrap gap-4"
              >
                {[
                  { icon: "ri-mail-line", href: "mailto:omarnassar1127@gmail.com" },
                  { icon: "ri-twitter-line", href: "https://twitter.com/GodelTrabuco69" },
                  { icon: "ri-facebook-circle-fill", href: "https://www.facebook.com/omar.portero13" },
                  { icon: "ri-linkedin-box-fill", href: "https://www.linkedin.com/in/omar-nassar-93a176155/" },
                  { icon: "ri-github-fill", href: "https://github.com/OmarNassar1127" }
                ].map((social, index) => (
                  <motion.span
                    key={social.href}
                    variants={item}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-[35px] h-[35px] bg-primaryColor p-1 rounded-[50px] cursor-pointer text-center"
                  >
                    <a
                      href={social.href}
                      className="text-white font-bold text-[18px]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            </motion.div>
          </div>
          {/* ============= hero right content ================= */}

          <div className="space-y-8">
            <motion.div
              variants={container}
              className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto"
            >
              <motion.figure 
                variants={item}
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/images/me.png" 
                  alt="Omar Nassar" 
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20" 
                />
              </motion.figure>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div 
              variants={container}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { end: 120, labelEN: "APIs Developed", labelNL: "APIs Onwikkeld" },
                { end: 10, labelEN: "Automations Implemented", labelNL: "Geimplementeerde Automatiseringen" },
                { end: 15, labelEN: "Projects Completed", labelNL: "Projecten afgerond" },
                { end: 4, labelEN: "AI projects", labelNL: "AI-projecten" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-primary/5 backdrop-blur-sm"
                >
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CountUp start={0} end={item.end} duration={2} suffix={index === 1 ? "" : "+"} />
                  </motion.h2>
                  <motion.h4 
                    className="text-sm sm:text-base font-medium text-muted-foreground mt-2"
                    variants={item}
                  >
                    {language === "EN" ? item.labelEN : item.labelNL}
                  </motion.h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* ============= hero content right end ================= */}
        </div>
      </div>
    </motion.section>
  );
};



export default Hero;
