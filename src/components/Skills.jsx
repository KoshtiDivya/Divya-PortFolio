import React from "react";
import c from "../images/c-logo.png";
import html from "../images/html-logo.png";
import java from "../images/java-logo.png";
import css from "../images/css-logo.png";
import bootstrap from "../images/bootstap-logo.png";
import tailwind from "../images/tailwind.png";
import javascript from "../images/js-logo.png";
import react from "../images/react-logo.png";
import node from "../images/node-js.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";

const skills = [
  { name: "React.js", img: react },
  { name: "JavaScript", img: javascript },
  { name: "Node.js", img: node },
  { name: "Express.js", img: express },
  { name: "MongoDB", img: mongodb },
  { name: "Tailwind CSS", img: tailwind },
  { name: "Bootstrap", img: bootstrap },
  { name: "HTML5", img: html },
  { name: "CSS3", img: css },
  { name: "Java", img: java },
  { name: "C Language", img: c },
];

const Skills = () => {
  return (
    <section id="skills-section" className="skills-section">
      <div className="heading-container" data-aos="fade-up">
        <h2 className="heading">Technical Skills</h2>
        <p className="subheading">
          Frontend & MERN Stack Technologies I Work With
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay={index * 50}
          >
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
