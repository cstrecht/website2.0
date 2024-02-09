import React from "react";
import projects from "../../projects";

const OpenSource = () => {
  return (
    <>
      {projects.map((project, id) => {
        return (
          project.isOpenSource && (
            <div
              className="project-container"
              key={project.id}
              data-aos={project.scrollFade}
            >
              <div className={project.background}>
                <div>
                  <img
                    className="project-img"
                    src={project.image}
                    alt={project.alt}
                  />
                </div>
              </div>
              <div className="project-info">
                <h1 className="project-name mt-0">{project.name}</h1>
                <p className="project-desc italic">{project.description}</p>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <button className="btn-dark">Updates here</button>
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <button className="btn-light">Github repository</button>
                  </a>
                )}
              </div>
            </div>
          )
        );
      })}
    </>
  );
};
export default OpenSource;
