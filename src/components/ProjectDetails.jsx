import { useParams } from "react-router-dom";
import projectData from "../assets/projectData";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectData.find(p => p.id === parseInt(id));

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="project-details">
      
      <div className="left-section">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="right-section">
        <h1>{project.title}</h1>
        <p>{project.desc}</p>

        <h3>Technologies:</h3>
        <p>{project.tech}</p>

        <a href={project.github} target="_blank">
          View on GitHub
        </a>
      </div>

    </div>
  );
};

export default ProjectDetails;