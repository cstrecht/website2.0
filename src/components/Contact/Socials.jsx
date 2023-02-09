import React from "react";
import socials from "../../socials";

const Socials = () => {
  return (
    <>
      <ul className="contact-social-list">
        {socials.map((social, id) => {
          return (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                {social.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Socials;
