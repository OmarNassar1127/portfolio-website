import { motion } from "framer-motion";
import { Card, CardContent } from "./card";

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
      className="section-padding"
    >
      <div className="container fade-in-up">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            {language === "EN" ? "I have experience with:" : "Ik heb ervaring met:"}
          </h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12"
        >
          {skills.map((skill, index) => (
              <motion.figure
                key={index}
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"
                  animate={{
                    opacity: [0.2, 0.3, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm text-center font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</p>
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </motion.section>
  );
};

export default Skills;
