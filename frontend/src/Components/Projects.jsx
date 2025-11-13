import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects({ data }) {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {data.projects.length > 0 ? (
          data.projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
                <div className="project-links">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code <FaGithub style={{ marginLeft: '0.3rem' }} />
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo <FaExternalLinkAlt style={{ marginLeft: '0.3rem' }} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects yet. Add your projects in src/data/portfolioData.js</p>
        )}
      </div>
    </section>
  )
}

export default Projects