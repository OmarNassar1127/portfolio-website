import React, { useEffect, useRef } from "react";
import me from "../../assets/images/me.png";
import CountUp from "react-countup";
import Typed from "typed.js";
import OmarCV from "../../assets/cv/Omar-cv.pdf";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

const Hero = ({ language }) => {
  const typedRef = useRef(null);
  const cvLink = language === 'EN' ? OmarCV : OmarCV;

  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const text =
    language === "EN"
      ? "Omar is a Full-Stack AI Engineer who ships AI from concept to production. From Microsoft ecosystem integrations to multi-agent systems, from enterprise RAG platforms with 95% accuracy to voice and chat assistants serving 30K+ daily users — I build AI that delivers measurable impact."
      : "Omar is een Full-Stack AI Engineer die AI van concept naar productie brengt. Van Microsoft ecosystem integraties tot multi-agent systemen, van enterprise RAG-platformen met 95% accuracy tot voice- en chatassistants die 30K+ dagelijkse gebruikers bedienen — ik bouw AI die meetbare impact levert.";

  useEffect(() => {
    const options = {
      strings: ["Full-stack Development", "AI  .", "Machine Learning"],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    };

    typedRef.current = new Typed("#typed-text", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  const socialLinks = [
    {
      href: "mailto:omarnassar1127@gmail.com",
      icon: "ri-mail-line",
      label: "Email",
      gradient: "from-red-500 to-pink-500"
    },
    {
      href: "https://twitter.com/GodelTrabuco69",
      icon: "ri-twitter-line",
      label: "Twitter",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      href: "https://www.facebook.com/omar.portero13",
      icon: "ri-facebook-circle-fill",
      label: "Facebook",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      href: "https://www.linkedin.com/in/omar-nassar-93a176155/",
      icon: "ri-linkedin-box-fill",
      label: "LinkedIn",
      gradient: "from-blue-700 to-blue-900"
    },
    {
      href: "https://github.com/OmarNassar1127",
      icon: "ri-github-fill",
      label: "GitHub",
      gradient: "from-gray-700 to-gray-900"
    },
  ];

  const stats = [
    { end: 50, labelEN: "€50K+ Annual Savings Delivered", labelNL: "€50K+ Jaarlijkse Besparingen Geleverd", icon: "ri-money-euro-circle-line", color: "text-green-600", suffix: "K€" },
    { end: 30, labelEN: "Production Systems", labelNL: "Productiesystemen", icon: "ri-server-line", color: "text-blue-600" },
    { end: 30, labelEN: "30K+ Daily Active Users", labelNL: "30K+ Dagelijkse Actieve Gebruikers", icon: "ri-user-line", color: "text-purple-600", suffix: "K" },
    { end: 98.9, labelEN: "System Uptime", labelNL: "Systeembeschikbaarheid", icon: "ri-check-line", color: "text-pink-600", suffix: "%" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section className="relative min-h-screen pt-0 overflow-hidden -mt-8" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-primaryColor/5 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-10 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        ></motion.div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-10 w-6 h-6 bg-primaryColor/20"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360, x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-20 w-4 h-4 bg-blue-500/20 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ rotate: 180, scale: [1, 1.5, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-8 h-8 bg-purple-500/20"
      ></motion.div>

      <div className="container relative z-10 pt-8 pb-16">

        {/* ============= DESKTOP LAYOUT (lg and up) ================= */}
        <div className="hidden lg:flex items-center justify-between gap-12">

          {/* Desktop - Hero Left Content */}
          <motion.div
            className="lg:w-1/2 xl:w-2/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h5 variants={itemVariants} className="text-gray-600 font-semibold text-lg">
                  {language === "EN" ? "Hello, I'm" : "Hallo, ik ben"}
                </motion.h5>

                <motion.h1 variants={itemVariants} className="text-headingColor font-black text-4xl md:text-6xl xl:text-7xl leading-tight">
                  Omar{" "}
                  <span className="bg-gradient-to-r from-primaryColor to-blue-600 bg-clip-text text-transparent">
                    Nassar
                  </span>
                </motion.h1>

                <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-600 font-medium">
                  {language === "EN" ? "Specialized in " : "Gespecialiseerd in "}
                  <span className="text-primaryColor font-bold min-h-[1.2em] inline-block">
                    <span id="typed-text" />
                  </span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {text}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                <a href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-primaryColor to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl flex items-center gap-3 modern-button"
                  >
                    <i className="ri-mail-line text-lg"></i>
                    {language === "EN" ? "Let's Connect" : "Even kennismaken?"}
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                  </motion.button>
                </a>

                <a href="#portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-primaryColor hover:text-primaryColor flex items-center gap-3"
                  >
                    <i className="ri-folder-line text-lg"></i>
                    {language === "EN" ? "View Portfolio" : "Bekijk Portfolio"}
                  </motion.button>
                </a>

                <a href={cvLink} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-4 rounded-xl flex items-center gap-3"
                  >
                    <i className="ri-download-line text-lg"></i>
                    {language === "EN" ? "Download CV" : "Download CV"}
                  </motion.button>
                </a>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-gray-600 font-semibold text-lg">
                  {language === "EN" ? "Connect with me" : "Verbind met mij"}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl`}>
                        <i className={`${social.icon} text-lg`}></i>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop - Hero Center - Profile Image with 3D Tilt */}
          <motion.div
            className="lg:w-1/3 xl:w-1/3 flex justify-center my-12 lg:my-0"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryColor/20 to-blue-600/20 animate-spin-slow" style={{ transform: "translateZ(-50px)" }}></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-reverse-spin" style={{ transform: "translateZ(-30px)" }}></div>

              {/* Profile image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200" style={{ transform: "translateZ(20px)" }}>
                <img
                  src={me}
                  alt="Omar Nassar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primaryColor to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(50px)" }}
              >
                🤖 AI Specialist
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ transform: "translateZ(50px)" }}
              >
                💻 Developer
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop - Hero Right - Statistics */}
          <div className="lg:w-1/3 xl:w-1/3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: -10 }}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-xl flex items-center justify-center`}>
                      <i className={`${stat.icon} text-xl ${stat.color}`}></i>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-headingColor">
                        <CountUp
                          start={0}
                          end={stat.end}
                          duration={2.5}
                          suffix={stat.suffix || "+"}
                          decimals={stat.end % 1 !== 0 ? 1 : 0}
                        />
                      </h2>
                      <p className="text-gray-600 font-medium text-sm">
                        {language === "EN" ? stat.labelEN : stat.labelNL}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement badges */}
            <motion.div
              className="mt-8 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-graduation-cap-line text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800 text-sm">
                      {language === "EN" ? "AI Certified" : "AI Gecertificeerd"}
                    </p>
                    <p className="text-blue-600 text-xs">
                      {language === "EN" ? "Machine Learning & RAG" : "Machine Learning & RAG"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ============= MOBILE LAYOUT (below lg) ================= */}
        <div className="block lg:hidden space-y-12">

          {/* Mobile Step 1: Greeting & Title */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h5 className="text-gray-600 font-semibold text-lg">
              {language === "EN" ? "Hello, I'm" : "Hallo, ik ben"}
            </h5>

            <h1 className="text-headingColor font-black text-4xl md:text-5xl leading-tight">
              Omar{" "}
              <span className="bg-gradient-to-r from-primaryColor to-blue-600 bg-clip-text text-transparent">
                Nassar
              </span>
            </h1>

            <div className="text-xl text-gray-600 font-medium">
              {language === "EN" ? "Specialized in " : "Gespecialiseerd in "}
              <span className="text-primaryColor font-bold min-h-[1.2em] inline-block">
                <span id="typed-text-mobile" />
              </span>
            </div>
          </motion.div>

          {/* Mobile Step 2: Avatar */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryColor/20 to-blue-600/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-reverse-spin"></div>

              {/* Profile image container - smaller on mobile */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-6 border-white shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={me}
                  alt="Omar Nassar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-2 bg-gradient-to-r from-primaryColor to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🤖 AI Specialist
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                💻 Developer
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Step 3: Description */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg mx-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 leading-relaxed text-base text-center">
              {text}
            </p>
          </motion.div>

          {/* Mobile Step 4: Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="w-full sm:w-auto">
              <button className="group w-full bg-gradient-to-r from-primaryColor to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 modern-button">
                <i className="ri-mail-line text-lg"></i>
                {language === "EN" ? "Let's Connect" : "Even kennismaken?"}
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </a>

            <a href="#portfolio" className="w-full sm:w-auto">
              <button className="group w-full bg-white border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-primaryColor hover:text-primaryColor transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <i className="ri-folder-line text-lg"></i>
                {language === "EN" ? "View Portfolio" : "Bekijk Portfolio"}
              </button>
            </a>

            <a href={cvLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="group w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <i className="ri-download-line text-lg"></i>
                {language === "EN" ? "Download CV" : "Download CV"}
              </button>
            </a>
          </motion.div>

          {/* Mobile Step 5: Statistics Cards */}
          <div className="grid grid-cols-2 gap-4 px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center space-y-2">
                  <div className={`w-10 h-10 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-lg flex items-center justify-center mx-auto`}>
                    <i className={`${stat.icon} text-lg ${stat.color}`}></i>
                  </div>
                  <h2 className="text-2xl font-bold text-headingColor">
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={2.5}
                      suffix={stat.suffix || "+"}
                      decimals={stat.end % 1 !== 0 ? 1 : 0}
                    />
                  </h2>
                  <p className="text-gray-600 font-medium text-xs">
                    {language === "EN" ? stat.labelEN : stat.labelNL}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Step 6: Achievement Badge */}
          <motion.div
            className="px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-blue-600"></i>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-blue-800 text-sm">
                    {language === "EN" ? "AI Certified" : "AI Gecertificeerd"}
                  </p>
                  <p className="text-blue-600 text-xs">
                    {language === "EN" ? "Machine Learning & RAG" : "Machine Learning & RAG"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Step 7: Social Media */}
          <motion.div
            className="space-y-6 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-600 font-semibold text-lg text-center">
              {language === "EN" ? "Connect with me" : "Verbind met mij"}
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    <i className={`${social.icon} text-lg`}></i>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;