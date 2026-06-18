import React from "react";
import projectData from "../assets/projectData";

import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id="project-section">
      <h1 className="heading">My Projects</h1>

      <div className="projects">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project"
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            
            <img src={project.image[0]} alt={project.title} />
            <p className="project-title">{ project.title}</p>
            <p>{project.desc[0]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
