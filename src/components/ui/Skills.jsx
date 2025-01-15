import { Card, CardContent } from "./card"
import { motion } from "framer-motion";

const Skills = ({ language }) => {
  const skills = [
    { name: "React", icon: "/SVG/react.svg" },
    { name: "JavaScript", icon: "/SVG/javascript.svg" },
    { name: "Node.js", icon: "/SVG/nodejs.svg" },
    { name: "HTML", icon: "/SVG/html.svg" },
    { name: "CSS", icon: "/SVG/css.svg" },
    { name: "Tailwind", icon: "/SVG/tailwind.svg" },
    { name: "PHP", icon: "/SVG/php.svg" },
    { name: "MySQL", icon: "/SVG/mysql.svg" },
    { name: "GraphQL", icon: "/SVG/graphQL.svg" },
    { name: "Git", icon: "/SVG/github.svg" },
    { name: "VSCode", icon: "/SVG/vscode.svg" },
    { name: "Figma", icon: "/SVG/figma.svg" },
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
          {skills.map((skill, index) => (
              <motion.figure
                key={index}
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mx-auto mb-2"
                />
                <p className="text-sm text-center font-medium">{skill.name}</p>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </motion.section>
  );
};

export default Skills;
