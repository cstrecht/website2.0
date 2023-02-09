import React from "react";
import BottomWave from "../components/About/BottomWave";
import TopWave from "../components/About/TopWave";

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

        {/* TODO: make a JSON file for this info */}
        <div className="about-container">
          <div data-aos="fade-up" class="about-card">
            <img
              className="card-image"
              src="https://illustrations.popsy.co/fuchsia/work-from-home.svg"
              alt="illustration"
            />
            <div class="px-5 pb-5">
              <h5 class="card-title">My Skills</h5>
              <div class="card-data">
                React JS • CI/CD • Tailwind CSS • VSCode • Github • Notion •
                Figma
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="about-card">
            <img
              className="card-image"
              src="https://illustrations.popsy.co/fuchsia/product-launch.svg"
              alt="illustration"
            />
            <div class="px-5 pb-5">
              <h5 class="card-title">Currently Practicing...</h5>
              <div class="card-data">
                React JS • Typescript • Next JS • Styled Components • React
                Query • REST APIs
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="about-card">
            <img
              className="card-image"
              src="https://illustrations.popsy.co/fuchsia/flower.svg"
              alt="illustration"
            />
            <div class="px-5 pb-5">
              <h5 class="card-title">In the Outdoors</h5>
              <div class="card-data">
                Knitting • Play music • Bouldering • Travel • Wine/Beer tasting
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <BottomWave />
      </section>
    </>
  );
};
export default About;
