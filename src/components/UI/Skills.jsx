import React from "react";
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

  return (
    <section id="skills">
      <div className="container">
        <div className="flex items-center justify-center">
          <h1 className="text-smallTextColor font-[800] text-[35px]">
            {language === "EN" ? "I have experience with:" : "Ik heb ervaring met:"}
          </h1>
        </div>
        <div className="icon-carousel mt-5">
          <div className="icon-list">
            {icons.map((icon, index) => (
              <figure key={index} className="icon-item">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 1024 1024"
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
              </figure>
            ))}
            {icons.map((icon, index) => (
              <figure key={index + icons.length} className="icon-item">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 1024 1024"
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
