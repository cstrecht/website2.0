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
                className="flex mb-32"
                key={project.id}
                data-aos={project.scrollFade}
              >
                <div className={project.background}>
                  <div className="absolute bottom-0 right-0">
                    <img
                      className="object-cover rounded-md ml-3"
                      src={project.image}
                      alt={project.alt}
                    />
                  </div>
                </div>
                <div className="mx-6 w-96">
                  <h1 className="mb-6 text-2xl">{project.name}</h1>
                  <p className="text-xs mb-6">{project.description}</p>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <button className="bg-neutral py-1 px-2 mr-3 text-sm text-white">
                      Try demo
                    </button>
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <button className="bg-white py-1 px-2 m-3 text-sm text-neutral border border-neutral">
                      View code
                    </button>
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
