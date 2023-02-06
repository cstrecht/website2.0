import React from "react";
import avatarRight from "../assets/avatarRight.svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-flex">
          <div className="nav-logo">
            <img src={avatarRight} className="nav-img" alt="Carolina's Logo" />
            <span className="nav-username">/cstrecht</span>
          </div>
          <div className="nav-sections">
            <ul className="nav-list">
              <li>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  About me
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
