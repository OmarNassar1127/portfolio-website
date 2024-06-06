import React, { useEffect, useState } from "react";
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
  const [icons, setIcons] = useState([
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
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) => [...prevIcons.slice(1), prevIcons[0]]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="flex items-center justify-center">
          <h1 className="text-smallTextColor font-[800] text-[35px]">{language === "EN" ? "I have experience with:" : "Ik heb ervaring met:"} </h1>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center mt-5">
          {icons.map((icon, index) => (
            <figure key={index} className="max-w-[50px] mx-1">
              <svg
                width="50"
                height="50"
                viewBox="0 0 1024 1024"
                dangerouslySetInnerHTML={{ __html: icon }}
                className="icon-animation"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
