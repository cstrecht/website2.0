import React from "react";
import Typed from "react-typed";

import avatar1 from "../assets/avatar1.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro">
        <div className="my-auto text-4xl">
          <p className="pb-3">Hello, I'm Carolina Strecht ✌️</p>
          <div>
            <Typed strings={["I'm a front-end developer"]} typeSpeed={70} />
          </div>
          <div className="socials-container">
            <a className="group" href="https://github.com/cstrecht">
              <img src={github} alt="Github" className="social-icon" />
              <div class="github-tooltip">Github</div>
            </a>
            <a className="group" href="https://www.linkedin.com/in/cstrecht/">
              <img src={linkedin} alt="Linkedin" className="social-icon" />
              <div class="linkedin-tooltip">LinkedIn</div>
            </a>
            <a className="group" href="https://twitter.com/cstrechtt">
              <img src={twitter} alt="Twitter" className="social-icon" />
              <div class="twitter-tooltip">Twitter</div>
            </a>
          </div>
        </div>
        <img src={avatar1} className="h-96" alt="Carolina's logo" />
      </div>
    </section>
  );
};
export default Intro;
