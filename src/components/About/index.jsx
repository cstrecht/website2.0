import React from "react";
import skills from "../../skills";

const AboutCard = () => {
  return (
    <>
      {skills.map((skill, id) => {
        return (
          <div data-aos="fade-up" class="about-card" key={skill.id}>
            <img
              className="card-image"
              src={skill.illustration}
              alt={skill.alt}
            />
            <div class="card-text">
              <h5 class="card-title">{skill.title}</h5>
              <div class="card-data">{skill.data}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default AboutCard;
