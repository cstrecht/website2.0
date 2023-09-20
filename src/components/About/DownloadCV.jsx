import React from "react";
import cv_carolina_strecht from "../../assets/cv_carolina_strecht.pdf";

const DownloadCV = () => {
  return (
    <div className="download-btn-container">
      <button className="download-btn">
        <a href={cv_carolina_strecht} rel="noreferrer" target="_blank">
          Open my CV (.pdf)
        </a>
      </button>
    </div>
  );
};
export default DownloadCV;
