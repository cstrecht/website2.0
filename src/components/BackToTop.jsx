import React from "react";

const BackToTop = () => {
  return (
    <div className="hidden md:flex relative" data-aos="fade-up">
      <div className="flex flex-col justify-center items-center absolute right-8 2xl:right-24 z-30 animate-[bounce_2s_ease-in-out_infinite]">
        <a href="#intro" className="text-neutral ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </a>
        <span className="text-center text-xs 2xl:text-base">Back to top</span>
      </div>
    </div>
  );
};
export default BackToTop;
