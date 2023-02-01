import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const Socials = () => {
  return (
    <div className="intro-socials">
      <div className="socials-container">
        <a
          className="group"
          href="https://github.com/cstrecht"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github" className="social-icon" />
          <div className="github-tooltip">Github</div>
        </a>
        <a
          className="group"
          href="https://www.linkedin.com/in/cstrecht/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" className="social-icon" />
          <div className="linkedin-tooltip">LinkedIn</div>
        </a>
        <a
          className="group"
          href="https://twitter.com/cstrechtt"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter" className="social-icon" />
          <div className="twitter-tooltip">Twitter</div>
        </a>
      </div>
    </div>
  );
};
export default Socials;
