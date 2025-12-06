import React, { useState } from "react";
import oracleLogo from "../../assets/images/oracle.png";
import udemyLogo from "../../assets/images/udemy.png";

const Certifications = ({ language }) => {
  const [filter, setFilter] = useState("all");

  const certificationsData = [
    {
      id: 1,
      title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG Skill Badge",
      issuer: "Google",
      date: "Oct 2025",
      credentialUrl: "#",
      category: "AI/ML",
      logo: "google",
      skills: ["Artificial Intelligence (AI)", "Gemini API"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Prompt Design in Vertex AI Skill Badge",
      issuer: "Google",
      date: "Oct 2025",
      credentialUrl: "#",
      category: "AI/ML",
      logo: "google",
      skills: ["Artificial Intelligence (AI)", "Gemini API"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "Machine Learning Operations (MLOps) for Generative AI",
      issuer: "Google",
      date: "Feb 2025",
      credentialUrl: "#",
      category: "AI/ML",
      logo: "google",
      skills: ["Artificial Intelligence (AI)", "Machine Learning", "MLOps"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 4,
      title: "Advanced: Generative AI for Developers",
      issuer: "Google",
      date: "Jan 2025",
      credentialUrl: "#",
      category: "AI/ML",
      logo: "google",
      skills: ["Artificial Intelligence (AI)", "Google Gemini"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 5,
      title: "OCI Generative AI Professional",
      issuer: "Oracle",
      date: "Nov 2024",
      credentialUrl: "#",
      category: "Cloud",
      logo: "oracle",
      skills: ["Oracle Cloud", "Artificial Intelligence (AI)"],
      color: "from-red-500 to-red-600",
    },
    {
      id: 6,
      title: "Laravel: Beginner to Advanced",
      issuer: "Udemy",
      date: "May 2023",
      credentialUrl: "#",
      category: "Development",
      logo: "udemy",
      skills: ["Laravel", "Object-Relational Mapping (ORM)"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const translations = {
    EN: {
      badge: "My Achievements",
      title: "Certifications",
      subtitle: "Professional certifications and continuous learning journey",
      showCredential: "Show Credential",
      skills: "Skills:",
      filterAll: "All",
      filterAI: "AI/ML",
      filterCloud: "Cloud",
      filterDev: "Development",
      issuedBy: "Issued by",
    },
    NL: {
      badge: "Mijn Prestaties",
      title: "Certificeringen",
      subtitle: "Professionele certificeringen en voortdurende leerreis",
      showCredential: "Toon Certificaat",
      skills: "Vaardigheden:",
      filterAll: "Alle",
      filterAI: "AI/ML",
      filterCloud: "Cloud",
      filterDev: "Ontwikkeling",
      issuedBy: "Uitgegeven door",
    },
  };

  const t = translations[language] || translations.EN;

  const categories = [
    { id: "all", label: t.filterAll },
    { id: "AI/ML", label: t.filterAI },
    { id: "Cloud", label: t.filterCloud },
    { id: "Development", label: t.filterDev },
  ];

  const filteredCertifications =
    filter === "all"
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === filter);

  // Logo components
  const GoogleLogo = () => (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );

  const OracleLogo = () => (
    <img
      src={oracleLogo}
      alt="Oracle"
      className="w-20 h-20 object-contain"
      style={{ background: 'transparent' }}
    />
  );

  const UdemyLogo = () => (
    <img
      src={udemyLogo}
      alt="Udemy"
      className="w-20 h-20 object-contain"
      style={{ background: 'transparent' }}
    />
  );

  const getLogo = (logo) => {
    switch (logo) {
      case "google":
        return <GoogleLogo />;
      case "oracle":
        return <OracleLogo />;
      case "udemy":
        return <UdemyLogo />;
      default:
        return null;
    }
  };

  return (
    <section
      id="certifications"
      className="pb-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primaryColor opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primaryColor to-blue-600 text-white rounded-full text-sm font-medium mb-4">
            <i className="ri-award-line"></i>
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-headingColor mb-4">
            {t.title}
          </h2>
          <p className="text-smallTextColor text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-primaryColor to-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-smallTextColor border-2 border-gray-200 hover:border-primaryColor hover:text-primaryColor"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primaryColor hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card Header with Logo */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0">{getLogo(cert.logo)}</div>
                  <span className="text-sm text-gray-500 font-medium">
                    {cert.date}
                  </span>
                </div>

                {/* Issuer */}
                <p className="text-sm text-smallTextColor mb-3">
                  <span className="font-semibold text-headingColor">
                    {cert.issuer}
                  </span>
                </p>

                {/* Title */}
                <h3 className="text-lg font-bold text-headingColor mb-4 line-clamp-3 min-h-[4.5rem]">
                  {cert.title}
                </h3>

                {/* Skills Tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-smallTextColor mb-2 font-medium">
                      {t.skills}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-gray-100 text-smallTextColor text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer with Credential Link */}
              <div className="px-6 pb-6">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${cert.color} text-white hover:shadow-lg hover:scale-105`}
                >
                  <i className="ri-external-link-line mr-2"></i>
                  {t.showCredential}
                </a>
              </div>

              {/* Decorative corner accent */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full`}
              ></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertifications.length === 0 && (
          <div
            className="text-center py-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
            <p className="text-smallTextColor text-lg">
              {language === "EN"
                ? "No certifications found in this category."
                : "Geen certificeringen gevonden in deze categorie."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
