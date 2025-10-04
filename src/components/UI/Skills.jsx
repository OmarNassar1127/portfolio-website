import React, { useState } from "react";
import "../../../src/styles.css";

// Import SVG files directly
import atlassianSvg from "../../assets/images/SVG/SVGs/atlassian.svg";
import bootstrapSvg from "../../assets/images/SVG/SVGs/bootstrap.svg";
import cssSvg from "../../assets/images/SVG/SVGs/css.svg";
import figmaSvg from "../../assets/images/SVG/SVGs/figma.svg";
import githubSvg from "../../assets/images/SVG/SVGs/github.svg";
import graphQLSvg from "../../assets/images/SVG/SVGs/graphQL.svg";
import htmlSvg from "../../assets/images/SVG/SVGs/html.svg";
import javascriptSvg from "../../assets/images/SVG/SVGs/javascript.svg";
import jiraSvg from "../../assets/images/SVG/SVGs/jira.svg";
import mysqlSvg from "../../assets/images/SVG/SVGs/mysql.svg";
import nodejsSvg from "../../assets/images/SVG/SVGs/nodejs.svg";
import phpSvg from "../../assets/images/SVG/SVGs/php.svg";
import reactSvg from "../../assets/images/SVG/SVGs/react.svg";
import tailwindSvg from "../../assets/images/SVG/SVGs/tailwind.svg";
import vscodeSvg from "../../assets/images/SVG/SVGs/vscode.svg";
import cSvg from "../../assets/images/SVG/SVGs/c.svg";
import cplusSvg from "../../assets/images/SVG/SVGs/cplus.svg";
import laravelSvg from "../../assets/images/SVG/SVGs/laravel.svg";
import wordpressSvg from "../../assets/images/SVG/SVGs/wordpress-svgrepo-com.svg";
import postgresqlSvg from "../../assets/images/SVG/SVGs/postgresql.svg";
import pythonSvg from "../../assets/images/SVG/SVGs/python.svg";

const Skills = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "all",
      labelEN: "All Skills",
      labelNL: "Alle Vaardigheden",
      icon: "ri-apps-line",
      color: "from-gray-500 to-gray-700"
    },
    {
      id: "frontend",
      labelEN: "Frontend",
      labelNL: "Frontend",
      icon: "ri-palette-line",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "backend",
      labelEN: "Backend",
      labelNL: "Backend",
      icon: "ri-server-line",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "tools",
      labelEN: "Tools & Platforms",
      labelNL: "Tools & Platforms",
      icon: "ri-tools-line",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: "databases",
      labelEN: "Databases",
      labelNL: "Databases",
      icon: "ri-database-2-line",
      color: "from-orange-500 to-red-600"
    }
  ];

  const skillsData = [
    // Frontend
    {
      name: "HTML5",
      category: "frontend",
      icon: htmlSvg,
      proficiency: 95,
      description: language === "EN" ? "Semantic markup & accessibility" : "Semantische markup & toegankelijkheid",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: cssSvg,
      proficiency: 90,
      description: language === "EN" ? "Modern layouts & animations" : "Moderne layouts & animaties",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "JavaScript",
      category: "frontend",
      icon: javascriptSvg,
      proficiency: 88,
      description: language === "EN" ? "ES6+ & DOM manipulation" : "ES6+ & DOM manipulatie",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "React",
      category: "frontend",
      icon: reactSvg,
      proficiency: 85,
      description: language === "EN" ? "Hooks, Context & state management" : "Hooks, Context & state management",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: tailwindSvg,
      proficiency: 92,
      description: language === "EN" ? "Utility-first CSS framework" : "Utility-first CSS framework",
      color: "from-teal-400 to-cyan-500"
    },
    {
      name: "Bootstrap",
      category: "frontend",
      icon: bootstrapSvg,
      proficiency: 80,
      description: language === "EN" ? "Responsive grid systems" : "Responsieve grid systemen",
      color: "from-purple-400 to-purple-600"
    },

    // Backend
    {
      name: "PHP",
      category: "backend",
      icon: phpSvg,
      proficiency: 90,
      description: language === "EN" ? "Laravel & modern PHP practices" : "Laravel & moderne PHP praktijken",
      color: "from-indigo-400 to-purple-600"
    },
    {
      name: "Laravel",
      category: "backend",
      icon: laravelSvg,
      proficiency: 90,
      description: language === "EN" ? "Eloquent ORM & Artisan CLI" : "Eloquent ORM & Artisan CLI",
      color: "from-red-400 to-red-600"
    },
    {
      name: "Node.js",
      category: "backend",
      icon: nodejsSvg,
      proficiency: 82,
      description: language === "EN" ? "Server-side JavaScript & APIs" : "Server-side JavaScript & APIs",
      color: "from-green-400 to-green-600"
    },
    {
      name: "GraphQL",
      category: "backend",
      icon: graphQLSvg,
      proficiency: 75,
      description: language === "EN" ? "Query language for APIs" : "Query taal voor APIs",
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "C#",
      category: "backend",
      icon: cSvg,
      proficiency: 70,
      description: language === "EN" ? ".NET development" : ".NET ontwikkeling",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "C++",
      category: "backend",
      icon: cplusSvg,
      proficiency: 30,
      description: language === "EN" ? "Object-oriented programming" : "Object-georiënteerd programmeren",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Python",
      category: "backend",
      icon: pythonSvg,
      proficiency: 85,
      description: language === "EN" ? "Data science & automation" : "Data science & automatisering",
      color: "from-blue-400 to-yellow-500"
    },

    // Databases
    {
      name: "MySQL",
      category: "databases",
      icon: mysqlSvg,
      proficiency: 88,
      description: language === "EN" ? "Relational database design" : "Relationele database ontwerp",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "PostgreSQL",
      category: "databases",
      icon: postgresqlSvg,
      proficiency: 82,
      description: language === "EN" ? "Advanced relational database" : "Geavanceerde relationele database",
      color: "from-blue-500 to-indigo-600"
    },

    // Tools
    {
      name: "GitHub",
      category: "tools",
      icon: githubSvg,
      proficiency: 90,
      description: language === "EN" ? "Version control & collaboration" : "Versiebeheer & samenwerking",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "VS Code",
      category: "tools",
      icon: vscodeSvg,
      proficiency: 95,
      description: language === "EN" ? "Code editor & extensions" : "Code editor & extensies",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Figma",
      category: "tools",
      icon: figmaSvg,
      proficiency: 78,
      description: language === "EN" ? "UI/UX design & prototyping" : "UI/UX ontwerp & prototyping",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Jira",
      category: "tools",
      icon: jiraSvg,
      proficiency: 82,
      description: language === "EN" ? "Project management & tracking" : "Projectbeheer & tracking",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Atlassian",
      category: "tools",
      icon: atlassianSvg,
      proficiency: 80,
      description: language === "EN" ? "Team collaboration tools" : "Team samenwerkingstools",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "WordPress",
      category: "tools",
      icon: wordpressSvg,
      proficiency: 85,
      description: language === "EN" ? "CMS & custom development" : "CMS & custom ontwikkeling",
      color: "from-blue-600 to-indigo-700"
    }
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const getOverallProficiency = (category) => {
    const categorySkills = category === "all"
      ? skillsData
      : skillsData.filter(skill => skill.category === category);

    const average = categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length;
    return Math.round(average);
  };

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primaryColor/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-primaryColor/20 rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-500/20 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-10 w-8 h-8 bg-purple-500/20 rotate-12 animate-float animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primaryColor/10 text-primaryColor px-4 py-2 rounded-full text-sm font-medium mb-3">
            <i className="ri-code-s-slash-line text-base"></i>
            {language === "EN" ? "Technical Expertise" : "Technische Expertise"}
          </div>

          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-headingColor font-bold text-3xl md:text-4xl mb-4"
          >
            {language === "EN" ? "My Skills" : "Mijn Vaardigheden"}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="lg:max-w-2xl mx-auto text-gray-600 text-base leading-relaxed"
          >
            {language === "EN"
              ? "Technical skills and proficiencies across different technologies and tools."
              : "Technische vaardigheden en expertise in verschillende technologieën en tools."}
          </p>
        </div>

        {/* Category Filter */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                group relative px-4 py-3 rounded-xl font-semibold transition-all duration-300 
                transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2
                ${activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-primaryColor/25`
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:border-primaryColor hover:text-primaryColor'
                }
              `}
            >
              <i className={`${category.icon} text-lg`}></i>
              <span>{language === "EN" ? category.labelEN : category.labelNL}</span>

              {/* Proficiency indicator */}
              <div className={`
                px-2 py-1 text-xs rounded-full font-bold
                ${activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
                }
              `}>
                {getOverallProficiency(category.id)}%
              </div>

              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/10 to-blue-600/10 rounded-2xl opacity-20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 50}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-400"
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center mb-3">
                <div className={`
                  w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl 
                  flex items-center justify-center shadow-md group-hover:shadow-lg
                  transform group-hover:scale-110 transition-all duration-300
                `}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Skill Info */}
              <div className="text-center mb-3">
                <h3 className="text-base font-bold text-headingColor mb-1 group-hover:text-primaryColor transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-700">
                    {language === "EN" ? "Skill" : "Vaardigheid"}
                  </span>
                  <span className="text-xs font-bold text-primaryColor">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${skill.proficiency}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Experience Level Badge */}
              <div className="flex justify-center">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-bold
                  ${skill.proficiency >= 90 ? 'bg-green-100 text-green-800' :
                    skill.proficiency >= 80 ? 'bg-blue-100 text-blue-800' :
                      skill.proficiency >= 70 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-orange-100 text-orange-800'
                  }
                `}>
                  {skill.proficiency >= 90 ? (language === "EN" ? "Advanced" : "Gevorderd") :
                    skill.proficiency >= 80 ? (language === "EN" ? "Advanced" : "Gevorderd") :
                      skill.proficiency >= 70 ? (language === "EN" ? "Intermediate" : "Gemiddeld") :
                        (language === "EN" ? "Learning" : "Lerende")}
                </span>
              </div>

              {/* Decorative corner element */}
              <div className={`
                absolute top-3 right-3 w-6 h-6 bg-gradient-to-r ${skill.color} 
                rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300
              `}></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          className="mt-10 bg-gradient-to-r from-primaryColor/5 to-blue-50 rounded-2xl p-6 md:p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-headingColor mb-3">
              {language === "EN" ? "Skills Overview" : "Vaardigheden Overzicht"}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillCategories.filter(cat => cat.id !== "all").map((category) => (
              <div key={category.id} className="text-center">
                <div className={`
                  w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl 
                  flex items-center justify-center mx-auto mb-3 shadow-lg
                  hover:scale-110 transition-transform duration-300
                `}>
                  <i className={`${category.icon} text-lg text-white`}></i>
                </div>
                <h4 className="font-bold text-base text-headingColor mb-1">
                  {getOverallProficiency(category.id)}%
                </h4>
                <p className="text-gray-600 text-xs">
                  {language === "EN" ? category.labelEN : category.labelNL}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primaryColor to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <i className="ri-lightbulb-line text-lg"></i>
            <span className="text-sm">
              {language === "EN"
                ? "Always learning new technologies"
                : "Altijd nieuwe technologieën leren"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;