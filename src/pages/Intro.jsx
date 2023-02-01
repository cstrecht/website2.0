import React from "react";
import Welcome from "../components/Intro/Welcome";
import Avatar from "../components/Intro/Avatar";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-container">
        <Welcome />
        <Avatar />
      </div>
    </section>
  );
};
export default Intro;
