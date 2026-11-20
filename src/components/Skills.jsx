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
  { name: "React.js", img: react, alt: "React.js - Component-Based Frontend UI Library" },
  { name: "JavaScript", img: javascript, alt: "JavaScript ES6+ - Modern Web Programming Language" },
  { name: "Node.js", img: node, alt: "Node.js - Server-Side JavaScript Runtime" },
  { name: "Express.js", img: express, alt: "Express.js - Node.js Backend Framework" },
  { name: "MongoDB", img: mongodb, alt: "MongoDB - NoSQL Database for Modern Web Applications" },
  { name: "Tailwind CSS", img: tailwind, alt: "Tailwind CSS - Modern Utility-First CSS Framework" },
  { name: "Bootstrap", img: bootstrap, alt: "Bootstrap - Responsive Frontend Component Framework" },
  { name: "HTML5", img: html, alt: "HTML5 - Semantic Web Structure and Standards" },
  { name: "CSS3", img: css, alt: "CSS3 - Modern Responsive Layouts and Animations" },
  { name: "Java", img: java, alt: "Java - Object-Oriented Programming and Backend Basics" },
  { name: "C Language", img: c, alt: "C Language - Fundamental Programming & Data Structures" },
];

const Skills = () => {
  return (
    <section id="skills-section" className="skills-section" aria-labelledby="skills-heading">
      <div className="heading-container" data-aos="fade-up">
        <h2 id="skills-heading" className="heading">Technical Skills</h2>
        <p className="subheading">
          Core Technologies: React.js, JavaScript, MERN Stack &amp; Modern Frontend Engineering
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
            <img
              src={skill.img}
              alt={skill.alt}
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
