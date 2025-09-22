import React from 'react'
import c from "../images/c-logo.png";
import html from '../images/html-logo.png';
import java from '../images/java-logo.png';
import css from '../images/css-logo.png';
import bootstrap from '../images/bootstap-logo.png';
import javascript from '../images/js-logo.png';
import react from '../images/react-logo.png';
const Skills = () => {
  return (
    <section id='skills-section' >
      <h1 className='heading'>My skills</h1>
      <div className='skills'>
        <div className="skill-data" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={c} alt="c"  />
          <p>C</p>
        </div>
        <div className="skill-data" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={java} alt="java" />
          <p>Java</p>
        </div>
        <div className="skill-data" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={react} alt="React" />
          <p>React</p>
        </div>
        <div className="skill-data" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={html} alt="html" />
          <p>HTML</p> 
        </div>
        <div className="skill-data" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={css} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-data" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={bootstrap} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-data" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={javascript} alt="Javascript" />
          <p>JavaScript</p>
        </div>
        
      </div>
    </section>
  )
}

export default Skills
