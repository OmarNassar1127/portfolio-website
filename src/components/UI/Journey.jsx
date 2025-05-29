import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsdImg from "../../assets/images/apps.png";

const Journey = ({ language }) => {
  const text =
    language === "EN"
      ? "From learning my first lines of HTML in 2017 to developing AI-powered solutions today, my journey has been driven by curiosity and a passion for solving complex problems. Each role has shaped my expertise in both frontend and backend development, product management, and emerging technologies."
      : "Van het leren van mijn eerste HTML-regels in 2017 tot het ontwikkelen van AI-aangedreven oplossingen vandaag, mijn reis is gedreven door nieuwsgierigheid en een passie voor het oplossen van complexe problemen. Elke rol heeft mijn expertise gevormd in zowel frontend- als backend-ontwikkeling, productmanagement en opkomende technologieën.";

  const journeyData = [
    {
      id: 1,
      year: "2017-2019",
      title: language === "EN" ? "Foundation Years" : "Basis Jaren",
      subtitle: "Frontend Development",
      company: "MBO Amstelland",
      icon: frontendImg,
      technologies: ["HTML/CSS", "JavaScript", "Web Design"],
      description: language === "EN"
        ? "Started my programming journey learning the fundamentals of web development, focusing on HTML/CSS and JavaScript to create interactive web applications."
        : "Begon mijn programmeertraject met het leren van de fundamenten van webontwikkeling, gericht op HTML/CSS en JavaScript voor interactieve webapplicaties.",
    },
    {
      id: 2,
      year: "2019-2020",
      title: language === "EN" ? "Backend Expansion" : "Backend Uitbreiding",
      subtitle: "Full-Stack Development",
      company: "MBO Amstelland",
      icon: backendImg,
      technologies: ["PHP", "MySQL", "C#", "WordPress"],
      description: language === "EN"
        ? "Expanded into backend development, mastering database design, server-side programming, and building complete web applications with CRUD functionality."
        : "Uitgebreid naar backend-ontwikkeling, het beheersen van database-ontwerp, server-side programmering en het bouwen van complete webapplicaties met CRUD-functionaliteit.",
    },
    {
      id: 3,
      year: "2020-2021",
      title: "Frontend Developer",
      subtitle: "Professional Start",
      company: "CSDM",
      icon: uiImg,
      technologies: ["ReactJS", "GraphQL", "Modern Frontend"],
      description: language === "EN"
        ? "First professional role working with enterprise clients like Coca-Cola and Shell, developing modern React applications and implementing complex user interfaces."
        : "Eerste professionele rol met enterprise klanten zoals Coca-Cola en Shell, ontwikkelen van moderne React applicaties en implementeren van complexe gebruikersinterfaces.",
    },
    {
      id: 4,
      year: "2021",
      title: language === "EN" ? "Blockchain Explorer" : "Blockchain Verkenner",
      subtitle: "Self-Development",
      company: language === "EN" ? "Independent Study" : "Zelfstandige Studie",
      icon: appsdImg,
      technologies: ["Blockchain", "Smart Contracts", "Web3"],
      description: language === "EN"
        ? "Deep dive into blockchain technology and cryptocurrency, exploring smart contracts and decentralized applications to understand the future of digital finance."
        : "Diepe duik in blockchain-technologie en cryptocurrency, verkennen van smart contracts en gedecentraliseerde applicaties om de toekomst van digitale financiën te begrijpen.",
    },
    {
      id: 5,
      year: "2021-2023",
      title: "Product Manager",
      subtitle: "Entrepreneurship",
      company: "Bitsliced",
      icon: frontendImg,
      technologies: ["NFT", "Product Strategy", "Team Leadership"],
      description: language === "EN"
        ? "Co-founded and managed an NFT marketplace for real-world assets, leading product development and team coordination in the emerging Web3 space."
        : "Mede-oprichter en manager van een NFT-marktplaats voor real-world assets, leidinggevend in productontwikkeling en teamcoördinatie in de opkomende Web3-ruimte.",
    },
    {
      id: 6,
      year: "2023-Present",
      title: "Backend Developer",
      subtitle: "AI Integration",
      company: "Vloto B.V.",
      icon: appsdImg,
      technologies: ["Laravel", "AI/ML", "API Development"],
      description: language === "EN"
        ? "Currently building scalable backend systems for luxury car-sharing platform, focusing on API development, automation, and AI-powered features."
        : "Momenteel bouwen van schaalbare backend-systemen voor luxe autodeel platform, gericht op API-ontwikkeling, automatisering en AI-aangedreven functies.",
      current: true
    }
  ];

  return (
    <section id="journey" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primaryColor/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primaryColor/10 text-primaryColor px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <i className="ri-map-pin-time-line"></i>
            {language === "EN" ? "Career Timeline" : "Carrière Tijdlijn"}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-headingColor mb-6" data-aos="fade-up">
            {language === "EN" ? "My Journey" : "Mijn Reis"}
          </h2>
          
          <p className="text-lg text-smallTextColor max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {text}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primaryColor to-blue-500"></div>
          
          <div className="space-y-8 md:space-y-16">
            {journeyData.map((item, index) => (
              <div 
                key={item.id}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full bg-white border-4 border-primaryColor flex items-center justify-center shadow-lg ${
                    item.current ? 'ring-4 ring-primaryColor/20' : ''
                  }`}>
                    <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                  <div className={`relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                    item.current ? 'ring-2 ring-primaryColor/20' : ''
                  }`}>
                    {/* Current badge */}
                    {item.current && (
                      <div className="absolute -top-3 -right-3">
                        <span className="bg-primaryColor text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {language === "EN" ? "Current" : "Huidig"}
                        </span>
                      </div>
                    )}

                    {/* Year badge for mobile */}
                    <div className="md:hidden mb-4">
                      <div className="inline-flex items-center gap-2 bg-primaryColor text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        <img src={item.icon} alt={item.title} className="w-4 h-4 object-contain filter brightness-0 invert" />
                        {item.year}
                      </div>
                    </div>

                    {/* Year for desktop */}
                    <div className="hidden md:block text-primaryColor font-bold text-lg mb-2">{item.year}</div>
                    
                    <h3 className="text-xl font-bold text-headingColor mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-smallTextColor font-medium">{item.subtitle}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-primaryColor font-medium">{item.company}</span>
                    </div>

                    <p className="text-smallTextColor mb-4 leading-relaxed">{item.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primaryColor/10 text-primaryColor text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-primaryColor/5 to-blue-50 rounded-2xl p-8" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-primaryColor rounded-2xl flex items-center justify-center">
                <i className="ri-code-box-line text-2xl text-white"></i>
              </div>
              <h4 className="text-2xl font-bold text-headingColor mb-2">6+</h4>
              <p className="text-smallTextColor">{language === "EN" ? "Years Experience" : "Jaar Ervaring"}</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-2xl flex items-center justify-center">
                <i className="ri-building-line text-2xl text-white"></i>
              </div>
              <h4 className="text-2xl font-bold text-headingColor mb-2">4+</h4>
              <p className="text-smallTextColor">{language === "EN" ? "Companies" : "Bedrijven"}</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-2xl flex items-center justify-center">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <h4 className="text-2xl font-bold text-headingColor mb-2">15+</h4>
              <p className="text-smallTextColor">{language === "EN" ? "Projects" : "Projecten"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;