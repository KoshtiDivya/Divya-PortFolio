import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer (React.js & JavaScript)",
    company: "Web Mind Technology Private Limited",
    location: "Ahmedabad, Gujarat",
    duration: "July - Present",
    description: [
      "Architected and maintained responsive, high-performance web applications using React.js, JavaScript (ES6+), and modern CSS frameworks like Tailwind CSS.",
      "Collaborated closely with cross-functional product and backend teams to integrate RESTful APIs, ensuring smooth asynchronous data fetching and real-time state synchronization.",
      "Engineered modular, reusable UI components following best practices in component lifecycle, clean code principles, and scalable state management.",
      "Performed continuous performance tuning, accessibility (a11y) enhancements, cross-browser compatibility fixes, and Google Core Web Vitals optimizations across mobile and desktop devices."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience-section" className="experience-section" aria-labelledby="experience-heading">
      <div className="heading-container" data-aos="fade-up">
        <h2 id="experience-heading" className="heading">Professional Experience</h2>
        <p className="subheading">
          Hands-On Industry Experience &amp; Frontend Engineering Milestones
        </p>
      </div>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="experience-card"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="experience-header">
              <div className="experience-icon-wrapper">
                <FaBriefcase className="experience-main-icon" aria-hidden="true" />
              </div>
              <div className="experience-title-group">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">
                  <FaBuilding aria-hidden="true" /> {exp.company} &bull; <FaMapMarkerAlt aria-hidden="true" /> {exp.location}
                </p>
              </div>
              <div className="experience-badge">
                <FaCalendarAlt aria-hidden="true" /> {exp.duration}
              </div>
            </div>

            <ul className="experience-list">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
