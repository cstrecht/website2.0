import React from "react";
import { useState } from "react";
import projects from "../../projects";

const Project = () => {
  const [sortedProjects, setSortedProjects] = useState(projects);
  const [activeButton, setActiveButton] = useState(null);

  const sortProjectsByNewestToOldest = () => {
    const sorted = [...sortedProjects].sort((a, b) => b.id - a.id);
    setSortedProjects(sorted);
    setActiveButton("newestToOldest");
  };

  const sortProjectsByPride = () => {
    const sorted = [...sortedProjects].sort(
      (a, b) => b.prideScore - a.prideScore
    );
    setSortedProjects(sorted);
    setActiveButton("pride");
  };

  return (
    <>
      <div className="sort-section">
        <button
          onClick={sortProjectsByNewestToOldest}
          className={
            activeButton === "newestToOldest" ? "sort-active" : "sort-disable"
          }
        >
          sort by newest to oldest
        </button>
        <button
          onClick={sortProjectsByPride}
          className={activeButton === "pride" ? "sort-active" : "sort-disable"}
        >
          sort by carolina's pride level 🚀
        </button>
      </div>

      {sortedProjects.map((project, id) => {
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
