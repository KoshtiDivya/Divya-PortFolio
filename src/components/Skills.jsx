import React from 'react'
import c from "../images/c-logo.png";
import html from '../images/html-logo.png';
import java from '../images/java-logo.png';
import css from '../images/css-logo.png';
import bootstrap from '../images/bootstap-logo.png';
import tailwind from '../images/tailwind.png';
import javascript from '../images/js-logo.png';
import react from '../images/react-logo.png';
import node from "../images/node-js.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";

const skills = [
  { name: "C", img: c },
  { name: "Java", img: java },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "Bootstrap", img: bootstrap },
  { name: "Tailwind", img: tailwind },
  { name: "JavaScript", img: javascript },

  { name: "React", img: react },
  { name: "Node.js", img: node },
  { name: "Express.js", img: express },
  { name: "MongoDB", img: mongodb },
];

const Skills = () => {
  return (
    <section id='skills-section'>
      <h1 className='heading'>Technical Skills</h1>

      <p className="subheading">
        Frontend & MERN Stack Technologies I Work With
      </p>

      <div className='skills'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-data"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>

  )
}

  export default Skills;
