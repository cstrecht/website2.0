import React from "react";

const BackToTop = () => {
  return (
    <div className="back-to-top-container" data-aos="fade-up">
      <div className="back-to-top-btn">
        <a href="#intro" className="text-neutral dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </a>
        <span className="back-to-top-txt">Back to top</span>
      </div>
    </div>
  );
};
export default BackToTop;
