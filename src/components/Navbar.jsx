import React from "react";
import avatar2 from "../assets/avatar2.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent w-full px-14  py-4 font-dmsans absolute">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <img src={avatar2} className="mr-3 h-14" alt="My Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              /cstrecht
            </span>
          </div>
          <div className="block w-auto">
            <ul className="flex p-4 flex-row space-x-8 text-base font-medium">
              <li>
                <a href="#projects" className="nav-link" aria-current="page">
                  Projects
                </a>
              </li>
              <li>
                <a href="#aboutme" className="nav-link">
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
