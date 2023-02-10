import React from "react";
import skills from "../../skills";

const AboutCard = () => {
  return (
    <>
      {skills.map((skill, id) => {
        return (
          <div data-aos="fade-up" className="about-card" key={skill.id}>
            <img
              className="card-image"
              src={skill.illustration}
              alt={skill.alt}
            />
            <div className="card-text">
              <h5 className="card-title">{skill.title}</h5>
              <div className="card-data">{skill.data}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default AboutCard;
