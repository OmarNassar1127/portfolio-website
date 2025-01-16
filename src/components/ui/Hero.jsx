import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CountUp from "react-countup";
import Typed from "typed.js";
import { Button } from "./button";
import { Card } from "./card";
import { Github, Linkedin, Mail, Download, Twitter, ChevronDown, ExternalLink, Code, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
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

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

const glowAnimation = {
  opacity: [0.5, 1, 0.5],
  scale: [1, 1.05, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Hero = ({ language }) => {
  const typedRef = useRef(null);
  const cvLink = language === 'EN' ? '/cv/Omar-cv-en.pdf' : '/cv/Omar-cv-nl.pdf';

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

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden" 
      id="about"
    >
      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1),transparent_70%)]" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ============= hero left content ================= */}
          <div className="space-y-6">
            <motion.div 
              variants={container}
              className="space-y-4">
              {/* Badge */}
              <motion.div
                variants={item}
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
                  <Code className="w-4 h-4" />
                  {language === "EN" ? "Full Stack Developer" : "Full Stack Ontwikkelaar"}
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.div
                variants={container}
                className="space-y-4"
              >
                <motion.div className="space-y-2">
                  <motion.p
                    variants={item}
                    className="text-lg text-muted-foreground font-medium"
                  >
                    {language === "EN" ? "Hello, I'm" : "Hallo, ik ben"}
                  </motion.p>
                  <motion.h1 
                    variants={item}
                    className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight"
                  >
                    <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-2">
                      Omar Nassar
                    </span>
                  </motion.h1>
                </motion.div>
                <motion.div 
                  variants={item}
                  className="flex items-center gap-3"
                >
                  <div className="h-px w-12 bg-primary/30" />
                  <span className="text-xl sm:text-2xl text-muted-foreground/90 font-medium">
                    <span id="typed-text"></span>
                  </span>
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
            {/* CTA Buttons */}
            <motion.div
              variants={container}
              className="flex flex-wrap items-center gap-6 mt-8"
            >
              <motion.div
                variants={item}
                className="relative group"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                  animate={glowAnimation}
                />
                <Button
                  asChild
                  className="relative px-8 py-6 bg-background/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">
                      {language === "EN" ? "Contact me" : "Neem contact met mij op"}
                    </span>
                  </motion.a>
                </Button>
              </motion.div>

              <motion.div
                variants={item}
                className="relative group"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                  animate={glowAnimation}
                />
                <Button
                  asChild
                  variant="outline"
                  className="relative px-8 py-6 hover:bg-primary/5 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <motion.a
                    href="#portfolio"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span className="font-medium">
                      {language === "EN" ? "View Portfolio" : "Bekijk Portfolio"}
                    </span>
                  </motion.a>
                </Button>
              </motion.div>

              <motion.div
                variants={item}
                className="relative group"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                  animate={glowAnimation}
                />
                <Button
                  asChild
                  variant="outline"
                  className="relative px-8 py-6 hover:bg-primary/5 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <motion.a
                    href={cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3"
                  >
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Download CV</span>
                  </motion.a>
                </Button>
              </motion.div>
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
            {/* Social Links */}
            <motion.div
              variants={container}
              className="flex flex-col gap-6 mt-14"
            >
              <motion.div
                variants={item}
                className="flex items-center gap-3"
              >
                <div className="h-px flex-1 bg-primary/20" />
                <span className="text-sm font-medium text-muted-foreground">
                  {language === "EN" ? "Connect with me" : "Verbind met mij"}
                </span>
                <div className="h-px flex-1 bg-primary/20" />
              </motion.div>

              <motion.div
                variants={container}
                className="flex flex-wrap gap-4 justify-center"
              >
                {[
                  { icon: Github, href: "https://github.com/OmarNassar1127", label: "GitHub", color: "group-hover:text-[#333]" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/omar-nassar-b63b93220/", label: "LinkedIn", color: "group-hover:text-[#0077b5]" },
                  { icon: Mail, href: "mailto:contact@omardev.xyz", label: "Email", color: "group-hover:text-primary" },
                  { icon: Twitter, href: "https://twitter.com/GodelTrabuco69", label: "Twitter", color: "group-hover:text-[#1DA1F2]" }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    variants={item}
                    className="relative group"
                  >
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"
                      animate={glowAnimation}
                    />
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="relative bg-background/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:bg-background/90"
                    >
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={social.color}
                      >
                        <social.icon className="h-5 w-5 transition-colors duration-300" />
                      </motion.a>
                    </Button>
                  </motion.div>
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
              <div className="relative">
                {/* Animated rings */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-lg"
                  animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Profile image */}
                <motion.figure 
                  variants={item}
                  className="relative w-full h-full rounded-full border-4 border-primary/20 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                >
                  <img 
                    src="/images/me.png" 
                    alt="Omar Nassar" 
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                </motion.figure>
              </div>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div 
              variants={container}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
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
                  className="relative p-6 rounded-lg overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-grid-white/5"
                    style={{ backgroundSize: "10px 10px" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  />
                  <div className="relative">
                    <motion.h2 
                      className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
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
                  </div>
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
