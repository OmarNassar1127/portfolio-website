import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsdImg from "../../assets/images/apps.png";

const Journey = ({ language, isDarkMode }) => {
  const content = {
    EN: {
      badge: "Career Timeline",
      title: "Building the Future, One System at a Time",
      current: "Current",
      years: "Years in Tech",
      companies: "Companies",
      projects: "Projects Shipped",
      milestones: {
        experience: "7+",
        companies: "5+",
        projects: "50+"
      }
    },
    NL: {
      badge: "Carrière Tijdlijn",
      title: "De Toekomst Bouwen, Systeem voor Systeem",
      current: "Huidig",
      years: "Jaar in Tech",
      companies: "Bedrijven",
      projects: "Projecten Opgeleverd",
      milestones: {
        experience: "7+",
        companies: "5+",
        projects: "50+"
      }
    }
  };

  const currentContent = content[language];

  const journeyData = [
    {
      id: 1,
      year: "2017-2019",
      period: "2017-2019",
      title: language === "EN" ? "Education Journey" : "Opleidingsreis",
      subtitle: "Frontend & Backend Development",
      company: "MBO Amstelland",
      icon: frontendImg,
      color: "from-blue-500 to-blue-600",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "C#", "WordPress"],
      description: language === "EN"
        ? "Started with frontend development during the first 18 months, mastering HTML/CSS and JavaScript. The last 18 months focused on backend technologies including PHP, MySQL, and C#, learning database design and CRUD functionalities."
        : "Begon met frontend-ontwikkeling in de eerste 18 maanden, beheersing van HTML/CSS en JavaScript. De laatste 18 maanden gericht op backend-technologieën waaronder PHP, MySQL en C#, leren van database-ontwerp en CRUD-functionaliteiten.",
    },
    {
      id: 2,
      year: "2019-2021",
      period: "2019-2021",
      title: language === "EN" ? "Frontend Developer" : "Frontend Ontwikkelaar",
      subtitle: "Professional Start",
      company: "CSDM",
      icon: backendImg,
      color: "from-green-500 to-green-600",
      technologies: ["ReactJS", "GraphQL", "Frontend Architecture"],
      description: language === "EN"
        ? "Served as a front-end developer utilizing ReactJS and GraphQL. Gained valuable company insights through internship, then promoted to junior developer working with high-profile clients like Coca-Cola, Shell, and Schiphol."
        : "Diende als front-end ontwikkelaar met ReactJS en GraphQL. Waardevolle bedrijfsinzichten opgedaan via stage, daarna gepromoveerd tot junior ontwikkelaar werkend met vooraanstaande klanten zoals Coca-Cola, Shell en Schiphol.",
    },
    {
      id: 3,
      year: "2021",
      period: "2021",
      title: language === "EN" ? "Self-Development Year" : "Zelfontwikkelingsjaar",
      subtitle: "Blockchain & Cryptography",
      company: language === "EN" ? "Independent Study" : "Zelfstandige Studie",
      icon: appsdImg,
      color: "from-purple-500 to-purple-600",
      technologies: ["Blockchain", "Smart Contracts", "Cryptography", "Web3"],
      description: language === "EN"
        ? "Delved deep into blockchain and cryptography, gaining extensive knowledge about various blockchain types, consensus mechanisms, and the limitless possibilities of smart contracts for automating complex tasks."
        : "Dook diep in blockchain en cryptografie, uitgebreide kennis opgedaan over verschillende blockchain-types, consensus mechanismen en de grenzeloze mogelijkheden van smart contracts voor het automatiseren van complexe taken.",
    },
    {
      id: 4,
      year: "2021-2023",
      period: "2021-2023",
      title: language === "EN" ? "Product Manager" : "Product Manager",
      subtitle: "Entrepreneurship & Teaching",
      company: "Bitsliced",
      icon: uiImg,
      color: "from-orange-500 to-orange-600",
      technologies: ["NFT", "Product Strategy", "Team Leadership", "Teaching"],
      description: language === "EN"
        ? "Started teaching career sharing knowledge with aspiring learners. Co-founded Bitsliced, an NFT marketplace leveraging blockchain for real-world asset digitization. Assembled and managed a team of four professionals while overseeing project development and quality assurance."
        : "Begon onderwijscarrière door kennis te delen met aspirant-leerlingen. Mede-oprichter van Bitsliced, een NFT-marktplaats die blockchain gebruikt voor digitalisering van echte assets. Team van vier professionals samengesteld en geleid terwijl projectontwikkeling en kwaliteitsborging werd overzien.",
    },
    {
      id: 5,
      year: "2023-Present",
      period: "2023-Nu",
      title: language === "EN" ? "Backend Developer" : "Backend Ontwikkelaar",
      subtitle: "Backend, AI Integration & Automation",
      company: "Vloto B.V.",
      icon: appsdImg,
      color: "from-teal-500 to-teal-600",
      technologies: ["Laravel", "AI/ML", "WhatsApp API", "Voice AI", "RESTful APIs", "Process Optimization"],
      description: language === "EN"
        ? "Joined luxury car-sharing service with fleet from Audi e-tron to Polestar 2 Dual Motor. Built AI-powered WhatsApp assistant and voice assistant serving 20K+ customers, reducing customer support calls by 70% in the first 3 months. Developed fraud prevention system recovering €50K+, streamlined fine processing workflows, enhanced internal dashboard with real-time analytics, and optimized booking algorithms improving fleet utilization by 30%."
        : "Toegetreden tot luxe autodeel-service met vloot van Audi e-tron tot Polestar 2 Dual Motor. AI-aangedreven WhatsApp-assistent en voice assistant gebouwd voor 20K+ klanten, waardoor klantenservice-oproepen met 70% zijn verminderd in de eerste 3 maanden. Fraudepreventiesysteem ontwikkeld dat €50K+ recupereert, boeteverwerkingsworkflows gestroomlijnd, intern dashboard verbeterd met real-time analytics, en boekingsalgoritmen geoptimaliseerd met 30% betere vlootbenutting.",
      current: true
    },
    {
      id: 6,
      year: "2023-Present",
      period: "2023-Nu",
      title: language === "EN" ? "AI Engineer & Co-Founder" : "AI Engineer & Co-Founder",
      subtitle: "Production AI Systems",
      company: "Virelio Agency",
      icon: frontendImg,
      color: "from-purple-600 to-pink-600",
      technologies: ["LangChain", "RAG", "Multi-Agent Systems", "CrewAI", "GPT-4", "Qdrant", "Python", "Azure"],
      description: language === "EN"
        ? "Co-founded AI agency delivering production-grade solutions for enterprises. Built Microsoft ecosystem integrations with Teams, SharePoint, and Outlook automation. Developed multi-agent workflows orchestrating complex business processes, enterprise RAG platforms achieving 95% accuracy on domain-specific queries, and medical compliance platforms reducing 3-month certification processes to 1 week. Shipped custom LLM integrations, intelligent document processing pipelines, and AI-powered analytics dashboards."
        : "AI-bureau mede-opgericht dat productie-klare oplossingen levert voor enterprises. Microsoft ecosystem integraties gebouwd met Teams, SharePoint en Outlook automatisering. Multi-agent workflows ontwikkeld die complexe bedrijfsprocessen orkestreren, enterprise RAG-platformen met 95% accuracy op domein-specifieke queries, en medische compliance platformen die 3-maanden certificeringsprocessen terugbrengen naar 1 week. Custom LLM-integraties, intelligente documentverwerkingspipelines en AI-aangedreven analytics dashboards opgeleverd.",
      current: true
    }
  ];

  return (
    <section id="journey" className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-dark-surface' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 sm:left-20 w-32 sm:w-72 h-32 sm:h-72 bg-primaryColor/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-32 sm:w-72 h-32 sm:h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 ${
            isDarkMode ? 'bg-primaryColor/20 text-primaryColor' : 'bg-primaryColor/10 text-primaryColor'
          }`}>
            <i className="ri-map-pin-time-line text-sm sm:text-base"></i>
            {currentContent.badge}
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
            isDarkMode ? 'text-white' : 'text-headingColor'
          }`} data-aos="fade-up">
            {currentContent.title}
          </h2>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
            {/* Card 1 - What I Do */}
            <div className={`relative p-6 rounded-2xl border shadow-sm ${
              isDarkMode
                ? 'bg-dark-card/50 border-dark-border hover:border-primaryColor/30'
                : 'bg-white border-gray-200 hover:border-primaryColor/30 shadow-md'
            } transition-all duration-300`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primaryColor to-purple-600 flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-xl text-white"></i>
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>
                    {language === "EN" ? "What I Build" : "Wat Ik Bouw"}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-smallTextColor'}`}>
                    {language === "EN" ? (
                      <>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>Senior AI Specialist</span> & <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>Full Stack Developer</span> building enterprise-ready AI solutions and custom software systems that scale. Currently powering customer support for <span className="text-primaryColor font-semibold">30,000+ daily users</span>.
                      </>
                    ) : (
                      <>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>Senior AI Specialist</span> & <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>Full Stack Developer</span> die enterprise-ready AI-oplossingen en schaalbare custom software systemen bouwt. Momenteel de klantenservice aandrijvend voor <span className="text-primaryColor font-semibold">30.000+ dagelijkse gebruikers</span>.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - My Edge */}
            <div className={`relative p-6 rounded-2xl border shadow-sm ${
              isDarkMode
                ? 'bg-dark-card/50 border-dark-border hover:border-primaryColor/30'
                : 'bg-white border-gray-200 hover:border-primaryColor/30 shadow-md'
            } transition-all duration-300`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-blue-600 flex items-center justify-center">
                  <i className="ri-lightbulb-flash-line text-xl text-white"></i>
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>
                    {language === "EN" ? "My Edge" : "Mijn Voorsprong"}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-smallTextColor'}`}>
                    {language === "EN" ? (
                      <>
                        With my background as an <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>entrepreneur</span> and <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>technical builder</span>, I understand both the tech and business side, giving me an edge when solving complex problems.
                      </>
                    ) : (
                      <>
                        Met mijn achtergrond als <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>ondernemer</span> en <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-headingColor'}`}>technische bouwer</span>, begrijp ik zowel de tech- als de businesskant, wat me een voorsprong geeft bij het oplossen van complexe problemen.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Specialization - Full Width */}
            <div className={`md:col-span-2 relative p-6 rounded-2xl border ${
              isDarkMode
                ? 'bg-gradient-to-r from-primaryColor/10 to-accent-cyan/10 border-primaryColor/20'
                : 'bg-gradient-to-r from-primaryColor/5 to-blue-50 border-primaryColor/20'
            }`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <i className={`ri-robot-2-line text-2xl ${isDarkMode ? 'text-primaryColor' : 'text-primaryColor'}`}></i>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-smallTextColor'}`}>
                    {language === "EN" ? "Bread & butter:" : "Specialisatie:"}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    isDarkMode ? 'bg-primaryColor/20 text-white border border-primaryColor/30' : 'bg-primaryColor/10 text-primaryColor'
                  }`}>
                    {language === "EN" ? "Multi-Agent Systems" : "Multi-Agent Systemen"}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    isDarkMode ? 'bg-accent-cyan/20 text-white border border-accent-cyan/30' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {language === "EN" ? "RAG Architectures" : "RAG-Architecturen"}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    isDarkMode ? 'bg-green-500/20 text-white border border-green-500/30' : 'bg-green-100 text-green-700'
                  }`}>
                    LLM Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-First Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - only visible on larger screens */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primaryColor to-purple-500"></div>
            
            {/* Mobile center line */}
            <div className="sm:hidden absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primaryColor to-purple-500 opacity-30"></div>
            
            <div className="space-y-0 sm:space-y-8">
              {journeyData.slice().reverse().map((item, index) => (
                <div key={item.id}>
                  <div 
                    className="relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Timeline dot for larger screens */}
                    <div className={`hidden sm:flex absolute left-6 top-6 w-4 h-4 border-4 border-primaryColor rounded-full z-10 ${
                      isDarkMode ? 'bg-dark-card' : 'bg-white'
                    }`}></div>

                    {/* Mobile timeline dot */}
                    <div className={`sm:hidden absolute left-1/2 transform -translate-x-1/2 top-8 w-6 h-6 border-4 border-primaryColor rounded-full z-10 shadow-lg ${
                      isDarkMode ? 'bg-dark-card' : 'bg-white'
                    }`}>
                      <div className="w-full h-full bg-primaryColor rounded-full scale-50"></div>
                    </div>

                    {/* Card */}
                    <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 mx-4 sm:mx-0 sm:ml-20 ${
                      isDarkMode ? 'bg-dark-card border border-dark-border' : 'bg-white'
                    } ${item.current ? 'ring-2 ring-primaryColor/30 shadow-primaryColor/10' : ''}`}>
                    
                    {/* Mobile year badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} text-white px-3 py-1.5 rounded-xl text-sm font-bold`}>
                        <img src={item.icon} alt={item.title} className="w-4 h-4 filter brightness-0 invert" />
                        <span className="text-xs sm:text-sm">{item.period}</span>
                      </div>
                      
                      {/* Current badge */}
                      {item.current && (
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                          isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                        }`}>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          {currentContent.current}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-headingColor'
                      }`}>
                        {item.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3 text-sm sm:text-base">
                        <span className={`font-medium ${isDarkMode ? 'text-gray-400' : 'text-smallTextColor'}`}>{item.subtitle}</span>
                        <span className={`hidden sm:inline ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}>•</span>
                        <span className="text-primaryColor font-semibold">{item.company}</span>
                      </div>
                    </div>

                    <p className={`mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${
                      isDarkMode ? 'text-gray-400' : 'text-smallTextColor'
                    }`}>
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 ${
                            isDarkMode
                              ? 'bg-primaryColor/20 text-primaryColor hover:bg-primaryColor/30'
                              : 'bg-primaryColor/10 text-primaryColor hover:bg-primaryColor/20'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    </div>
                  </div>
                  
                  {/* Mobile Arrow - only show between items, not after last */}
                  {index < journeyData.length - 1 && (
                    <div className="sm:hidden flex justify-center py-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-primaryColor to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <i className="ri-arrow-down-line text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20" data-aos="fade-up">
          <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${
            isDarkMode
              ? 'bg-dark-card border border-dark-border'
              : 'bg-gradient-to-r from-primaryColor/5 to-blue-50'
          }`}>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-primaryColor to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-time-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-headingColor'
                }`}>
                  {currentContent.milestones.experience}
                </h4>
                <p className={`text-xs sm:text-sm lg:text-base ${
                  isDarkMode ? 'text-gray-400' : 'text-smallTextColor'
                }`}>
                  {currentContent.years}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-robot-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-headingColor'
                }`}>
                  {currentContent.milestones.companies}
                </h4>
                <p className={`text-xs sm:text-sm lg:text-base ${
                  isDarkMode ? 'text-gray-400' : 'text-smallTextColor'
                }`}>
                  {currentContent.companies}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-money-euro-circle-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-headingColor'
                }`}>
                  {currentContent.milestones.projects}
                </h4>
                <p className={`text-xs sm:text-sm lg:text-base ${
                  isDarkMode ? 'text-gray-400' : 'text-smallTextColor'
                }`}>
                  {currentContent.projects}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;