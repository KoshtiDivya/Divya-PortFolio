import React, { useState } from "react";
import projectData from "../assets/projectData";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projectData
    : projectData.slice(0, 4);

  return (
    <section id="project-section" className="project-section">
      <div className="heading-container" data-aos="fade-up">
        <h2 className="heading">Featured Projects</h2>
        <p className="subheading">
          Showcasing My Full-Stack & Frontend Applications
        </p>
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={index * 100}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="project-img-wrapper">
              <img src={project.image[0]} alt={project.title} />
            </div>

            <div className="project-content">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="project-card-title">{project.title}</h3>
                  <FaExternalLinkAlt className="text-cyan-400 text-xs shrink-0 mt-1" />
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
          </div>
        ))}
      </div>

      {projectData.length > 4 && (
        <div className="view-more-container" data-aos="fade-up">
          <button
            className="btn-secondary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less Projects" : `View All Projects (${projectData.length})`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;