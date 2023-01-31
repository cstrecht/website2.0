import React from "react";
import projects from "../projects";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="flex flex-col">
          <h1 className="text-4xl text-center mt-4 mb-16">My projects</h1>
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
                <div className="project-data">
                  <h1 className="mb-6 text-2xl">{project.name}</h1>
                  <p className="text-xs mb-6">{project.description}</p>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <button className="btn-dark">Try demo</button>
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <button className="btn-light">View code</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Projects;
