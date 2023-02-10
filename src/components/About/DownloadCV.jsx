import React from "react";
import CVCarolinaStrecht from "../../assets/CVCarolinaStrecht.pdf";

const DownloadCV = () => {
  return (
    <div className="flex justify-center">
      <button className="btn-light hover:bg-primary hover:text-white transition-all ease-in-out hover:border-primary">
        <a href={CVCarolinaStrecht} rel="noreferrer" target="_blank">
          Download CV
        </a>
      </button>
    </div>
  );
};
export default DownloadCV;
