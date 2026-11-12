import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import projectData from "../assets/projectData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) return <h2 style={{ padding: "40px", textAlign: "center", color: "var(--accent-cyan)" }}>Project not found</h2>;

  return (
    <div className="project-details">
      <div className="project-heading">
        <h1>{project.title}</h1>
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/")}
          aria-label="Back to portfolio"
        >
          <FiArrowLeft aria-hidden="true" />
        </button>
      </div>

      <div className="project-data">
        <div className="left-section">
          {project.image.slice(0, 2).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
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