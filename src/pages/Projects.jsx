import React from "react";
import Project from "../components/Project";
import OpenSource from "../components/Project/OpenSource";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="projects-container">
          <h1 className="section-title">Projects</h1>
          <Project />
          <h2 className="section-subtitle">
            Open Source projects I've contributed to
          </h2>
          <OpenSource />
        </div>
      </section>
    </>
  );
};
export default Projects;
