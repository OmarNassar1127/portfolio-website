import React, { useEffect, useRef } from "react";
import me from "../../assets/images/me.png";
import CountUp from "react-countup";
import Typed from "typed.js";
import EnglishCV from "../../assets/cv/Omar-cv-en.pdf";
import DutchCV from "../../assets/cv/Omar-cv-nl.pdf";

const Hero = ({ language }) => {
  const typedRef = useRef(null);
  const cvLink = language === 'EN' ? EnglishCV : DutchCV;

  const text =
    language === "EN"
      ? "As a quick learner who thrives on challenges, I began in cryptocurrency trading, founding CIWW to educate on market strategies. At Vloto B.V., I'm a Backend Developer, building efficient APIs and enhancing automation. Recently, I've been focusing on AI projects, including a Private Document QA system using RAG and vector databases, and a neural network for recognizing nails even in blurry images. I'm passionate about shaping the future of digital technologies."
      : "Als snelle leerling die gedijt op uitdagingen, begon ik in cryptocurrency-handel en richtte CIWW op om marktstrategieën te onderwijzen. Bij Vloto B.V. werk ik als Backend Developer, waar ik efficiënte API's bouw en automatisering verbeter. Recentelijk heb ik me gericht op AI-projecten, waaronder een Private Document QA-systeem met RAG en vectordatabases en een neuraal netwerk voor het herkennen van nagels. Ik ben gepassioneerd over het vormgeven van de toekomst van digitale technologieën.";

  useEffect(() => {
    const options = {
      strings: ["Software Development", "Product Management", "QA", "AI & Machine Learning"],
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
    { end: 120, labelEN: "APIs Developed", labelNL: "APIs Ontwikkeld", icon: "ri-code-box-line", color: "text-blue-600" },
    { end: 10, labelEN: "Automations", labelNL: "Automatiseringen", icon: "ri-robot-line", color: "text-green-600" },
    { end: 15, labelEN: "Projects", labelNL: "Projecten", icon: "ri-folder-line", color: "text-purple-600" },
    { end: 4, labelEN: "AI Projects", labelNL: "AI-projecten", icon: "ri-brain-line", color: "text-pink-600" },
  ];

  return (
    <section className="relative min-h-screen pt-0 overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primaryColor/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-primaryColor/20 rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-500/20 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-10 w-8 h-8 bg-purple-500/20 rotate-12 animate-float animation-delay-2000"></div>

      <div className="container relative z-10 pt-20 pb-16">
        
        {/* ============= DESKTOP LAYOUT (lg and up) ================= */}
        <div className="hidden lg:flex items-center justify-between gap-12">
          
          {/* Desktop - Hero Left Content */}
          <div className="lg:w-1/2 xl:w-2/5">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h5
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="text-gray-600 font-semibold text-lg"
                >
                  {language === "EN" ? "Hello, I'm" : "Hallo, ik ben"}
                </h5>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  className="text-headingColor font-black text-4xl md:text-6xl xl:text-7xl leading-tight"
                >
                  Omar{" "}
                  <span className="bg-gradient-to-r from-primaryColor to-blue-600 bg-clip-text text-transparent">
                    Nassar
                  </span>
                </h1>

                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                  className="text-xl md:text-2xl text-gray-600 font-medium"
                >
                  {language === "EN" ? "Specialized in " : "Gespecialiseerd in "}
                  <span className="text-primaryColor font-bold min-h-[1.2em] inline-block">
                    <span id="typed-text" />
                  </span>
                </div>
              </div>

              {/* Description */}
              <div
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="600"
                className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg"
              >
                <p className="text-gray-700 leading-relaxed text-lg">
                  {text}
                </p>
              </div>

              {/* Action Buttons */}
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="flex flex-wrap items-center gap-4"
              >
                <a href="#contact">
                  <button className="group bg-gradient-to-r from-primaryColor to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 modern-button">
                    <i className="ri-mail-line text-lg"></i>
                    {language === "EN" ? "Let's Connect" : "Laten we Verbinden"}
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </a>

                <a href="#portfolio">
                  <button className="group bg-white border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-primaryColor hover:text-primaryColor transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <i className="ri-folder-line text-lg"></i>
                    {language === "EN" ? "View Portfolio" : "Bekijk Portfolio"}
                  </button>
                </a>

                <a href={cvLink} target="_blank" rel="noopener noreferrer">
                  <button className="group bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <i className="ri-download-line text-lg"></i>
                    {language === "EN" ? "Download CV" : "Download CV"}
                  </button>
                </a>
              </div>

              {/* Social Media */}
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="space-y-4"
              >
                <h4 className="text-gray-600 font-semibold text-lg">
                  {language === "EN" ? "Connect with me" : "Verbind met mij"}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                        <i className={`${social.icon} text-lg`}></i>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop - Hero Center - Profile Image */}
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="200"
            data-aos-duration="800"
            className="lg:w-1/3 xl:w-1/3 flex justify-center my-12 lg:my-0"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div 
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryColor/20 to-blue-600/20 animate-spin-slow"
              ></div>
              <div 
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-reverse-spin"
              ></div>

              {/* Profile image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={me}
                  alt="Omar Nassar"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badges - synced with image timing */}
              <div 
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primaryColor to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow"
              >
                💻 Developer
              </div>
              <div 
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow animation-delay-1000"
              >
                🤖 AI Enthusiast
              </div>
            </div>
          </div>

          {/* Desktop - Hero Right - Statistics */}
          <div className="lg:w-1/3 xl:w-1/3">
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
              className="grid grid-cols-2 lg:grid-cols-1 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={200 + (index * 50)}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
                          suffix={index < 3 ? "+" : ""}
                        />
                      </h2>
                      <p className="text-gray-600 font-medium text-sm">
                        {language === "EN" ? stat.labelEN : stat.labelNL}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement badges */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="mt-8 space-y-3"
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
            </div>
          </div>
        </div>

        {/* ============= MOBILE LAYOUT (below lg) ================= */}
        <div className="block lg:hidden space-y-12">
          
          {/* Mobile Step 1: Greeting & Title */}
          <div className="text-center space-y-6">
            <h5
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-gray-600 font-semibold text-lg"
            >
              {language === "EN" ? "Hello, I'm" : "Hallo, ik ben"}
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-headingColor font-black text-4xl md:text-5xl leading-tight"
            >
              Omar{" "}
              <span className="bg-gradient-to-r from-primaryColor to-blue-600 bg-clip-text text-transparent">
                Nassar
              </span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="text-xl text-gray-600 font-medium"
            >
              {language === "EN" ? "Specialized in " : "Gespecialiseerd in "}
              <span className="text-primaryColor font-bold min-h-[1.2em] inline-block">
                <span id="typed-text" />
              </span>
            </div>
          </div>

          {/* Mobile Step 2: Avatar */}
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="400"
            data-aos-duration="800"
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div 
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryColor/20 to-blue-600/20 animate-spin-slow"
              ></div>
              <div 
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
                className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-reverse-spin"
              ></div>

              {/* Profile image container - smaller on mobile */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-6 border-white shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={me}
                  alt="Omar Nassar"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badges - synced with image timing */}
              <div 
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
                className="absolute -top-2 -right-2 bg-gradient-to-r from-primaryColor to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce-slow"
              >
                💻 Developer
              </div>
              <div 
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
                className="absolute -bottom-2 -left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce-slow animation-delay-1000"
              >
                🤖 AI Enthusiast
              </div>
            </div>
          </div>

          {/* Mobile Step 3: Description */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
            className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg mx-4"
          >
            <p className="text-gray-700 leading-relaxed text-base text-center">
              {text}
            </p>
          </div>

          {/* Mobile Step 4: Action Buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <button className="group w-full bg-gradient-to-r from-primaryColor to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 modern-button">
                <i className="ri-mail-line text-lg"></i>
                {language === "EN" ? "Let's Connect" : "Laten we Verbinden"}
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
          </div>

          {/* Mobile Step 5: Statistics Cards */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="grid grid-cols-2 gap-4 px-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 50)}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
                      suffix={index < 3 ? "+" : ""}
                    />
                  </h2>
                  <p className="text-gray-600 font-medium text-xs">
                    {language === "EN" ? stat.labelEN : stat.labelNL}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Step 6: Achievement Badge */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="px-4"
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
          </div>

          {/* Mobile Step 7: Social Media */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="space-y-6 px-4"
          >
            <h4 className="text-gray-600 font-semibold text-lg text-center">
              {language === "EN" ? "Connect with me" : "Verbind met mij"}
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <i className={`${social.icon} text-lg`}></i>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;