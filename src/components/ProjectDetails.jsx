import { useNavigate, useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import projectData from "../assets/projectData";
import SEOHead from "./SEOHead";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-details">
        <SEOHead
          title="Project Not Found | Divya Koshti"
          description="The requested portfolio project could not be found."
          canonicalUrl="https://divyakoshti.netlify.app/"
        />
        <h2 style={{ padding: "40px", textAlign: "center", color: "var(--accent-cyan)" }}>
          Project not found
        </h2>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn-primary"
            onClick={() => navigate("/")}
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const primaryDesc = Array.isArray(project.desc) ? project.desc[0] : project.desc;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": project.title,
    "description": primaryDesc,
    "programmingLanguage": project.tech,
    "codeRepository": project.github,
    "author": {
      "@type": "Person",
      "name": "Divya Koshti",
      "url": "https://divyakoshti.netlify.app/"
    }
  };

  return (
    <article className="project-details">
      <SEOHead
        title={`${project.title} | Divya Koshti - React Developer Portfolio`}
        description={`${primaryDesc} Built by Divya Koshti using ${project.tech.slice(0, 4).join(", ")}.`}
        canonicalUrl={`https://divyakoshti.netlify.app/project/${project.id}`}
        jsonLd={projectJsonLd}
      />

      <nav aria-label="Breadcrumb" className="breadcrumb-nav" style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
        <Link to="/" style={{ color: "var(--accent-cyan)", textDecoration: "none" }}>Home</Link>
        {" / "}
        <span style={{ color: "var(--text-main)" }}>{project.title}</span>
      </nav>

      <div className="project-heading">
        <h1>{project.title}</h1>
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/")}
          aria-label="Back to portfolio home"
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
              alt={`${project.title} - application interface screenshot ${index + 1}`}
              width="500"
              height="300"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        <div className="right-section">
          <h2>Project Overview</h2>
          {Array.isArray(project.desc) ? (
            project.desc.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>{project.desc}</p>
          )}

          <h3>Technologies &amp; Libraries:</h3>
          <ul>
            {project.tech.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetails;
