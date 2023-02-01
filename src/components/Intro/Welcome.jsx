import React from "react";
import Typed from "react-typed";
import Socials from "./Socials";

const Welcome = () => {
  return (
    <div className="intro-text">
      <p className="intro-welcome">Hello, I'm Carolina Strecht ✌️</p>
      <div>
        <Typed strings={["I'm a front-end developer"]} typeSpeed={70} />
      </div>
      <Socials />
    </div>
  );
};
export default Welcome;
