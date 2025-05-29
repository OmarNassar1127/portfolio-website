import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsdImg from "../../assets/images/apps.png";

const Journey = ({ language }) => {
  const content = {
    EN: {
      badge: "Career Timeline",
      title: "Development Journey",
      subtitle: "What started as curiosity about HTML in 2017 has evolved into architecting AI-powered solutions that transform businesses. From building NFT marketplaces to developing intelligent WhatsApp assistants and automating complex financial processes, my journey bridges the gap between cutting-edge technology and real-world impact.",
      current: "Current",
      years: "Years Experience",
      companies: "Companies",
      projects: "Projects",
      milestones: {
        experience: "5+",
        companies: "4+", 
        projects: "26+"
      }
    },
    NL: {
      badge: "Carrière Tijdlijn",
      title: "Ontwikkelingsreis", 
      subtitle: "Wat begon als nieuwsgierigheid naar HTML in 2017 is geëvolueerd tot het architecteren van AI-aangedreven oplossingen die bedrijven transformeren. Van het bouwen van NFT-marktplaatsen tot het ontwikkelen van intelligente WhatsApp-assistenten en het automatiseren van complexe financiële processen, mijn reis overbrugt de kloof tussen geavanceerde technologie en echte impact.",
      current: "Huidig",
      years: "Jaar Ervaring",
      companies: "Bedrijven",
      projects: "Projecten",
      milestones: {
        experience: "5+",
        companies: "4+",
        projects: "26+"
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
      subtitle: "AI Integration & Automation",
      company: "Vloto B.V.",
      icon: appsdImg,
      color: "from-teal-500 to-teal-600",
      technologies: ["Laravel", "AI/ML", "WhatsApp API", "Email Automation", "RESTful APIs", "Process Optimization"],
      description: language === "EN"
        ? "Joined luxury car-sharing service with fleet from Audi e-tron Q8 to Polestar 2 Dual Motor. Developed intelligent automation systems including AI-powered WhatsApp assistant for customer support, automated email flows with smart auto-replies, and streamlined fine processing workflows. Enhanced internal dashboard with real-time analytics, implemented discount coupon systems, and optimized booking algorithms to improve fleet utilization by 30%."
        : "Toegetreden tot luxe autodeel-service met vloot van Audi e-tron Q8 tot Polestar 2 Dual Motor. Intelligente automatiseringssystemen ontwikkeld waaronder AI-aangedreven WhatsApp-assistent voor klantenservice, geautomatiseerde e-mailflows met slimme auto-antwoorden, en gestroomlijnde boeteverwerkingsworkflows. Intern dashboard verbeterd met real-time analytics, kortingscouponsystemen geïmplementeerd, en boekingsalgoritmen geoptimaliseerd om vlootbenutting met 30% te verbeteren.",
      current: true
    },
    {
      id: 6,
      year: "2023-Present",
      period: "2023-Nu",
      title: language === "EN" ? "Freelance Developer" : "Freelance Ontwikkelaar",
      subtitle: "Multi-Technology Projects",
      company: language === "EN" ? "Various Clients" : "Verschillende Klanten",
      icon: frontendImg,
      color: "from-indigo-500 to-indigo-600",
      technologies: ["Python", "NodeJS", "C#", "C++"],
      description: language === "EN"
        ? "Providing freelance development services alongside full-time role, working with diverse technologies including Python, NodeJS, C#, and C++ to deliver custom solutions for various clients."
        : "Freelance ontwikkelingsdiensten verlenen naast fulltime rol, werkend met diverse technologieën waaronder Python, NodeJS, C# en C++ om aangepaste oplossingen te leveren voor verschillende klanten.",
      current: true
    }
  ];

  return (
    <section id="journey" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 sm:left-20 w-32 sm:w-72 h-32 sm:h-72 bg-primaryColor/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-32 sm:w-72 h-32 sm:h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primaryColor/10 text-primaryColor px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <i className="ri-map-pin-time-line text-sm sm:text-base"></i>
            {currentContent.badge}
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-headingColor mb-4 sm:mb-6" data-aos="fade-up">
            {currentContent.title}
          </h2>
          
          <p className="text-base sm:text-lg text-smallTextColor max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4" data-aos="fade-up" data-aos-delay="200">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Mobile-First Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - only visible on larger screens */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primaryColor to-purple-500"></div>
            
            {/* Mobile center line */}
            <div className="sm:hidden absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primaryColor to-purple-500 opacity-30"></div>
            
            <div className="space-y-0 sm:space-y-8">
              {journeyData.map((item, index) => (
                <div key={item.id}>
                  <div 
                    className="relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Timeline dot for larger screens */}
                    <div className="hidden sm:flex absolute left-6 top-6 w-4 h-4 bg-white border-4 border-primaryColor rounded-full z-10"></div>
                    
                    {/* Mobile timeline dot */}
                    <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2 top-8 w-6 h-6 bg-white border-4 border-primaryColor rounded-full z-10 shadow-lg">
                      <div className="w-full h-full bg-primaryColor rounded-full scale-50"></div>
                    </div>
                  
                    {/* Card */}
                    <div className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 mx-4 sm:mx-0 sm:ml-20 ${
                      item.current ? 'ring-2 ring-primaryColor/30 shadow-primaryColor/10' : ''
                    }`}>
                    
                    {/* Mobile year badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} text-white px-3 py-1.5 rounded-xl text-sm font-bold`}>
                        <img src={item.icon} alt={item.title} className="w-4 h-4 filter brightness-0 invert" />
                        <span className="text-xs sm:text-sm">{item.period}</span>
                      </div>
                      
                      {/* Current badge */}
                      {item.current && (
                        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          {currentContent.current}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-headingColor mb-2">
                        {item.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3 text-sm sm:text-base">
                        <span className="text-smallTextColor font-medium">{item.subtitle}</span>
                        <span className="hidden sm:inline text-gray-300">•</span>
                        <span className="text-primaryColor font-semibold">{item.company}</span>
                      </div>
                    </div>

                    <p className="text-smallTextColor mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-primaryColor/10 text-primaryColor text-xs sm:text-sm font-medium rounded-lg hover:bg-primaryColor/20 transition-colors duration-200"
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
          <div className="bg-gradient-to-r from-primaryColor/5 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-primaryColor to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-code-box-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-headingColor">
                  {currentContent.milestones.experience}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-smallTextColor">
                  {currentContent.years}
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-building-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-headingColor">
                  {currentContent.milestones.companies}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-smallTextColor">
                  {currentContent.companies}
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-trophy-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-headingColor">
                  {currentContent.milestones.projects}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-smallTextColor">
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