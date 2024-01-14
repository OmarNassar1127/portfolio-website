import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = ({ language }) => {
  const [nextItems, setNextItems] = useState(30);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }
    if (selectTab === "school-project") {
      const filteredData = data.filter(
        (item) => item.category === "School project"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "professional") {
      const filteredData = data.filter(
        (item) => item.category === "Professional"
      );
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              {language === "EN" ? "My projects" : "Mijn projecten"}
            </h3>
            <h2 className="text-headingColor text-[1rem] font-[600]">
              {language === "EN"
                ? "Organized by timeline"
                : "Georganiseerd op basis van tijdlijn"}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                    rounded-[8px]"
            >
              {language === "EN" ? "All" : "Alles"}
            </button>
            <button
              onClick={() => setSelectTab("school-project")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                    rounded-[8px]"
            >
              {language === "EN" ? "School projects" : "School projecten"}
            </button>
            <button
              onClick={() => setSelectTab("professional")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                    rounded-[8px]"
            >
              Proffessional projects
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:2-[32.2%] relative z-[1]"
            >
              <figure style={{ width: "100%", height: "200px" }}>
                <img
                  className="rounded-[8px]"
                  src={portfolio.imgUrl}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </figure>
              <div
                className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] 
                        hidden group-hover:block"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                  font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 20 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                  font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          activeID={activeID}
          language={language}
        />
      )}
    </section>
  );
};

export default Portfolio;
