import React from "react";
import projects from "../../projects";

const Project = () => {
  return (
    <>
      {projects.map((project, id) => {
        return (
          <div
            className="project-container"
            key={project.id}
            data-aos={project.scrollFade}
          >
            <div className={project.background}>
              <div className="project-view">
                <img
                  className="project-img"
                  src={project.image}
                  alt={project.alt}
                />
              </div>
            </div>
            <div className="project-info">
              <h1 className="project-name">{project.name}</h1>
              <p className="project-desc">{project.description}</p>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <button className="btn-dark">Try demo</button>
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <button className="btn-light">View code</button>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Project;
