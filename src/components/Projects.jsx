import { useState } from "react";
import projectData from "../assets/projectData";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projectData
    : projectData.slice(0, 4);

  return (
    <section id="project-section" className="project-section" aria-labelledby="projects-heading">
      <div className="heading-container" data-aos="fade-up">
        <h2 id="projects-heading" className="heading">Featured Projects</h2>
        <p className="subheading">
          React.js Developer Portfolio &amp; Full-Stack MERN Web Applications
        </p>
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={index * 100}
            aria-label={`View details of ${project.title}`}
          >
            <div className="project-img-wrapper">
              <img
                src={project.image[0]}
                alt={`${project.title} - React & JavaScript project screenshot`}
                width="400"
                height="190"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="project-content">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="project-card-title">{project.title}</h3>
                  <FaExternalLinkAlt className="project-link-icon text-xs shrink-0 mt-1" aria-hidden="true" />
                </div>
                <p className="project-card-desc">{project.desc[0]}</p>
              </div>

              <div className="tech-tags">
                {project.tech &&
                  project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {projectData.length > 4 && (
        <div className="view-more-container" data-aos="fade-up">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            {showAll ? "Show Less Projects" : `View All Projects (${projectData.length})`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
