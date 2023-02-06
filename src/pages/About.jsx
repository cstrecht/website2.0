import React from "react";
import mypic4 from "../assets/mypic4.jpeg";

const About = () => {
  return (
    <>
      <section id="about" className="min-h-screen font-dmsans relative">
        <h1 className="section-title pt-24 mb-8">About me</h1>
        <div
          class="custom-shape-divider-top-1675433410"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <p className="mx-40 text-center text-xl">
          I strongly believe that focusing on the small details and prioritizing
          usability are essential to build meaningful products.
        </p>
        {/* <div className="flex justify-center mt-12">
          <div className=" text-neutral bg-white text-center w-72 h-56 m-2 shadow rounded-sm">
            <ul>
              <h1 className="text-xl mb-3">My Skills</h1>
              <li>HTML | CSS | JavaScript</li>
              <li>Deployment Services (Netlify, Vercel)</li>
              <li>Styled Components | Tailwind CSS</li>
              <li>VS Code | Gitflow</li>
              <li>Github | Notion | Figma | Jira</li>
            </ul>
          </div>
          <div className="text-center bg-white text-primary w-72 h-56 m-2  shadow rounded-sm">
            <ul>
              <h1 className="text-xl mb-3">Currently Practicing</h1>
              <li>React JS</li>
              <li>TypeScript</li>
              <li>Next JS</li>
              <li>React Query</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" text-neutral bg-white border-primary border-2 text-center w-72 h-56 m-2  shadow rounded-sm">
            <ul>
              <h1 className="text-xl mb-3">In the outdoors</h1>
              <li>Kniting</li>
              <li>Play music with friends</li>
              <li>Bouldering</li>
              <li>Wine/beer tasting</li>
              <li>Travel</li>
            </ul>
          </div>
          <div className="">
            <img
              className="w-72 h-56 m-2 shadow-md object-cover"
              src={mypic4}
              alt="Me"
            />
          </div>
        </div> */}
        <div className="flex flex-row justify-evenly">
          <div class="border max-w-sm rounded-lg shadow">
            <img
              className="p-4 h-72 m-auto rounded-t-lg"
              src="https://illustrations.popsy.co/white/work-from-home.svg"
              alt="illustration"
            />

            <div class="px-5 pb-5">
              <h5 class="text-base font-semibold tracking-tight text-neutral">
                My Skills
              </h5>

              <div class="">
                <span class="text-xl font-bold text-neutral">
                  HTML • CSS • JavaScript • React JS • Deployment Services
                  (Netlify, Vercel) • Styled Components • Tailwind CSS • VS Code
                  • Gitflow • Github • Notion • Figma • Jira
                </span>
              </div>
            </div>
          </div>
          <div class="border max-w-sm rounded-lg shadow">
            <img
              className="p-4 h-72 m-auto rounded-t-lg"
              src="https://illustrations.popsy.co/white/product-launch.svg"
              alt="illustration"
            />

            <div class="px-5 pb-5">
              <h5 class="text-base font-semibold tracking-tight text-neutral">
                Currently practicing...
              </h5>

              <div class="">
                <span class="text-xl font-bold text-neutral">
                  React JS • Typescript • Next JS • React Query • REST APIs
                </span>
              </div>
            </div>
          </div>
          <div class="border max-w-sm rounded-lg shadow">
            <img
              className="p-4 h-72 m-auto rounded-t-lg"
              src="https://illustrations.popsy.co/white/flower.svg"
              alt="illustration"
            />

            <div class="px-5 pb-5">
              <h5 class="text-base font-semibold tracking-tight text-neutral">
                In the outdoors
              </h5>

              <div class="">
                <span class="text-xl font-bold text-neutral">
                  Knitting • Play music • Bouldering • Wine or beer tastings •
                  Travel the world
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
