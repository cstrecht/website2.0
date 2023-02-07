import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="min-h-screen font-dmsans relative">
        <h1 className="section-title pt-12 m-3">About me</h1>
        <div class="custom-shape-divider-top-1675433410" data-aos="fade-up">
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
        <p className="mx-40 text-center text-lg my-2">
          I strongly believe that focusing on the small details and prioritizing
          usability are essential to build meaningful products.
        </p>
        <div className="flex justify-center">
          <div
            data-aos="fade-up"
            class=" bg-white max-w-sm rounded-t-full shadow m-3"
          >
            <img
              className="p-4 h-72 m-auto rounded-t-lg"
              src="https://illustrations.popsy.co/fuchsia/work-from-home.svg"
              alt="illustration"
            />

            <div class="px-5 pb-5">
              <h5 class="text-base text-violet font-semibold tracking-tight">
                My Skills
              </h5>

              <div class="">
                <span class="text-base font-bold text-neutral">
                  HTML • CSS • JavaScript • React JS • Deployment Services
                  (Netlify, Vercel) • Styled Components • Tailwind CSS • VS Code
                  • Gitflow • Github • Notion • Figma • Jira
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class=" bg-white max-w-sm rounded-t-full shadow m-3"
          >
            <img
              className="p-4 h-72 m-auto rounded-t-lg"
              src="https://illustrations.popsy.co/fuchsia/product-launch.svg"
              alt="illustration"
            />

            <div class="px-5 pb-5">
              <h5 class="text-base text-violet font-semibold tracking-tight">
                Currently Practicing...
              </h5>

              <div class="">
                <span class="text-base font-bold text-neutral">
                  React JS • Typescript • Next JS • React Query • REST APIs
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="bg-white max-w-sm rounded-t-full shadow m-3"
          >
            <img
              className="p-4 h-72 m-auto rounded-t-lg"
              src="https://illustrations.popsy.co/fuchsia/flower.svg"
              alt="illustration"
            />

            <div class="px-5 pb-5">
              <h5 class="text-base font-semibold tracking-tight text-violet">
                In the Outdoors
              </h5>

              <div class="">
                <span class="text-base font-bold text-neutral">
                  Knitting • Play music • Bouldering • Travel • Wine/beer
                  tastings
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1675781686">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};
export default About;
