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
        <div className="my-auto text-2xl text-center sm:text-left md:text-4xl 2xl:text-5xl">
          <p className="pb-3 2xl:pb-6">Hello, I'm Carolina Strecht ✌️</p>
          <div>
            <Typed strings={["I'm a front-end developer"]} typeSpeed={70} />
          </div>
          <div className="flex justify-center sm:justify-start">
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
        </div>
        <div className="my-auto flex justify-center">
          <img
            src={avatar1}
            className="h-72 mt-10 sm:mt-0 sm:h-80 md:h-96 2xl:h-[484px]"
            alt="Carolina's logo"
          />
        </div>
      </div>
    </section>
  );
};
export default Intro;
