import React from "react";
import CVCarolinaStrecht from "../../assets/CVCarolinaStrecht.pdf";

const DownloadCV = () => {
  return (
    <div className="download-btn-container">
      <button className="download-btn">
        <a href={CVCarolinaStrecht} rel="noreferrer" target="_blank">
          Download CV
        </a>
      </button>
    </div>
  );
};
export default DownloadCV;
