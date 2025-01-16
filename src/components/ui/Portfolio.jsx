import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Modal from "./Modal";
import portfolioData from '../../assets/data/portfolioData';

const Portfolio = ({ language }) => {
  const [nextItems, setNextItems] = useState(30);
  const [portfolios, setPortfolios] = useState(portfolioData);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };
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
    <section id="portfolio" className="section-padding bg-secondary/5">
      <div className="container fade-in-up">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            {language === "EN" ? "My Projects" : "Mijn Projecten"}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {language === "EN"
              ? "Explore my latest projects and achievements"
              : "Ontdek mijn laatste projecten en prestaties"}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: "all", labelEN: "All", labelNL: "Alles" },
              { id: "school-project", labelEN: "School Projects", labelNL: "School Projecten" },
              { id: "professional", labelEN: "Professional", labelNL: "Professioneel" },
              { id: "ai", labelEN: "AI / ML", labelNL: "AI / ML" }
            ].map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectTab === category.id ? "default" : "outline"}
                  onClick={() => setSelectTab(category.id)}
                  className="rounded-full"
                >
                  {language === "EN" ? category.labelEN : category.labelNL}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
                <Card 
                  className="group h-full hover:shadow-xl transition-all duration-300 hover:border-primary/30 cursor-pointer"
                  onClick={() => showModalHandler(portfolio.id)}
                >
                  <CardHeader>
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={portfolio.imgUrl} 
                        alt={portfolio.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="ghost" className="bg-background/20 backdrop-blur-sm border border-primary/20">
                          {language === "EN" ? "View Details" : "Bekijk Details"}
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{portfolio.title}</CardTitle>
                    <CardDescription className="text-muted-foreground/80">{portfolio.category}</CardDescription>
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
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={(e) => {
                      e.stopPropagation();
                      showModalHandler(portfolio.id);
                    }}>
                      {language === "EN" ? "View Details" : "Bekijk Details"}
                    </Button>
                    {portfolio.siteUrl && portfolio.siteUrl !== "#" && (
                      <Button variant="outline" className="flex-1" asChild>
                        <a 
                          href={portfolio.siteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {language === "EN" ? "Visit" : "Bezoek"}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          {nextItems < portfolios.length && portfolios.length > 20 && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={loadMoreHandler}
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                {language === "EN" ? "Load More" : "Laad Meer"}
              </Button>
            </motion.div>
          )}
        </motion.div>
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
