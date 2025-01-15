import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import portfolioData from '../../assets/data/portfolioData';

const Portfolio = ({ language }) => {
  const [nextItems, setNextItems] = useState(30);
  const [portfolios, setPortfolios] = useState(portfolioData);
  const [selectTab, setSelectTab] = useState("all");
  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(portfolioData);
    }
    if (selectTab === "school-project") {
      const filteredData = portfolioData.filter(
        (item) => item.category === "School project"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "professional") {
      const filteredData = portfolioData.filter(
        (item) => item.category === "Professional"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "ai") {
      const filteredData = portfolioData.filter(
        (item) => item.category === "ai/ml"
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
            <button
              onClick={() => setSelectTab("ai")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                    rounded-[8px]"
            >
              AI / ML
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <AnimatePresence mode="popLayout">
            {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={portfolio.imgUrl} 
                        alt={portfolio.title}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle>{portfolio.title}</CardTitle>
                    <CardDescription>{portfolio.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {language === "EN" ? portfolio.descriptionEN : portfolio.descriptionNL}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {portfolio.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                      {portfolio.technologies.length > 3 && (
                        <Badge variant="outline">
                          +{portfolio.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    {portfolio.siteUrl && portfolio.siteUrl !== "#" && (
                      <Button variant="outline" className="w-full" asChild>
                        <a href={portfolio.siteUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Project
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && portfolios.length > 20 && (
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
      {/* Modal removed in favor of card-based design */}
    </section>
  );
};

export default Portfolio;
