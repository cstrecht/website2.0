import React from "react";
import socials from "../../socials";

const Socials = () => {
  return (
    <div className="intro-socials">
      <div className="socials-container">
        {socials.map((social, id) => {
          if (social.id <= 3) {
            return (
              <a
                key={social.id}
                className="group"
                href="https://github.com/cstrecht"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="social-icon"
                />
                <div className={social.tooltip}>{social.name}</div>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Socials;
