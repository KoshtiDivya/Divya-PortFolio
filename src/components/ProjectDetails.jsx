import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import projectData from "../assets/projectData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) return <h2 style={{ padding: "40px", textAlign: "center", color: "#00ffff" }}>Project not found</h2>;

  return (
    <div className="project-details">
      <div className="project-heading">
        <h1>{project.title}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="#00ffff"
          viewBox="0 0 256 256"
          onClick={() => navigate("/")}
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
        </svg>
      </div>

      <div className="project-data">
        <div className="left-section">
          {project.image.slice(0, 2).map((img, index) => (
            <img key={index} src={img} alt={project.title} />
          ))}
        </div>

        <div className="right-section">
          {Array.isArray(project.desc) ? (
            project.desc.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>{project.desc}</p>
          )}

          <h3>Technologies:</h3>
          <ul>
            {project.tech.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>

          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;