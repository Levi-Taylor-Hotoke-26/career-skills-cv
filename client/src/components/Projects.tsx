import { Project } from '../api';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="projects-container">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h4>{project.title}</h4>
            <p className="description">{project.description}</p>
            <div className="tech-stack">
              <strong>Tech Stack:</strong> {project.tech_stack}
            </div>
            
            <div className="project-links">
              {project.deployed && (
                <p>
                  <strong>Live Demo:</strong>{' '}
                  <a href={project.deployed} target="_blank" rel="noreferrer">
                    {project.deployed}
                  </a>
                </p>
              )}
              {project.repo_url && (
                <p>
                  <strong>Repository:</strong>{' '}
                  <a href={project.repo_url} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}