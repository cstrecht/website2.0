import React from "react";
import Project from "../components/Project";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="projects-container">
          <h1 className="section-title">My projects</h1>
          <Project />
        </div>
      </section>
    </>
  );
};
export default Projects;
