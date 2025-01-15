import React from "react";
import { motion } from "framer-motion";
import "../../../src/styles.css";
import {
  atlassian,
  bootstrap,
  css,
  figma,
  github,
  graphQL,
  html,
  javascript,
  jira,
  mysql,
  nodejs,
  php,
  react,
  tailwind,
  vscode,
  c,
  wordpress,
} from "../../assets/images/SVG/object/Icons";

const Skills = ({ language }) => {
  const icons = [
    html,
    css,
    javascript,
    php,
    bootstrap,
    mysql,
    nodejs,
    tailwind,
    react,
    github,
    graphQL,
    atlassian,
    jira,
    figma,
    vscode,
    c,
    wordpress,
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="skills"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <h1 className="text-smallTextColor font-[800] text-[35px]">
            {language === "EN" ? "I have experience with:" : "Ik heb ervaring met:"}
          </h1>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 mt-12"
        >
          {icons.map((icon, index) => (
              <motion.figure
                key={index}
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="icon-item p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 1024 1024"
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </motion.section>
  );
};

export default Skills;
