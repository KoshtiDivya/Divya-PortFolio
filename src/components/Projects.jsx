import React, { useState } from "react";
import projectData from "../assets/projectData";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projectData
    : projectData.slice(0, 4);

  return (
    <section id="project-section">
      <h1 className="heading">My Projects</h1>

      <div className="projects">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="project"
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="project-img">
              <img src={project.image[0]} alt={project.title} />
            </div>
            <p className="project-title">{project.title}</p>
            <p>{project.desc[0]}</p>
          </div>
        ))}
      </div>

      {projectData.length > 4 && (
        <div className="view-more-container">
          <button
            className="view-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;