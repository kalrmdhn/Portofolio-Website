import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  const featured = projects.find((project) => project.featured);

  const others = projects.filter((project) => !project.featured);

  return (
    <section className="projects-page">
      <div className="projects-header">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
        <h1 className="projects-title">Projects</h1>
        <div className="projects-title-line"></div>
      </div>
      <div className="featured-project">
        <div className="featured-content">
          <span className="featured-badge">Featured Project</span>

          <h2>{featured.title}</h2>

          <h3>{featured.subtitle}</h3>

          <p>{featured.description}</p>

          <div className="project-tags">
            {featured.tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>

          <Link to={`/project/${featured.id}`} className="project-button">
            View Project 
          </Link>
        </div>

        <div className="featured-image">
          <img src={featured.image} alt="" />
        </div>
      </div>

      <div className="other-projects">
        {others.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt="" />

            <h3>{project.title}</h3>

            <p>{project.subtitle}</p>

            <Link to={`/project/${project.id}`}>View Project →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
