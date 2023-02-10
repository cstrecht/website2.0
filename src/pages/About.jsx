import React from "react";
import BottomWave from "../components/About/BottomWave";
import TopWave from "../components/About/TopWave";
import AboutCard from "../components/About";

const About = () => {
  return (
    <>
      <section id="about" className="about-section">
        <h1 className="section-title pt-12 m-3">About me</h1>
        <TopWave />
        <p className="about-description">
          I strongly believe that focusing on the small details and prioritizing
          usability are essential to build meaningful products.
        </p>
        <div className="about-container">
          <AboutCard />
        </div>
        <br />
        <br />
        <BottomWave />
      </section>
    </>
  );
};
export default About;
