import React from "react";
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Web Mind Technology Private Limited",
    duration: "July - Present",
    description: [
      "Developed and maintained dynamic, responsive web interfaces using React.js, JavaScript (ES6+), and modern CSS frameworks.",
      "Collaborated with cross-functional teams to integrate RESTful APIs ensuring seamless frontend & backend data flow.",
      "Built reusable, modular UI components to enhance application performance, maintainability, and reusability.",
      "Participated in bug fixing, UI/UX enhancements, accessibility improvements, and performance optimizations across devices."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience-section" className="experience-section">
      <div className="heading-container" data-aos="fade-up">
        <h2 className="heading">Work Experience</h2>
        <p className="subheading">
          My Professional Journey & Hands-On Industry Experience
        </p>
      </div>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="experience-header">
              <div className="experience-icon-wrapper">
                <FaBriefcase className="experience-main-icon" />
              </div>
              <div className="experience-title-group">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">
                  <FaBuilding /> {exp.company}
                </p>
              </div>
              <div className="experience-badge">
                <FaCalendarAlt /> {exp.duration}
              </div>
            </div>

            <ul className="experience-list">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
