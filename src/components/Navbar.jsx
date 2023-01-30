import React from "react";
import avatar2 from "../assets/avatar2.svg";

const Navbar = () => {
  return (
    <>
      <nav class="bg-transparent w-full px-14  py-4 font-dmsans absolute">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div class="flex items-center">
            <img src={avatar2} class="mr-3 h-14" alt="My Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap">
              /cstrecht
            </span>
          </div>
          <div class="block w-auto">
            <ul class="flex p-4 flex-row space-x-8 text-base font-medium">
              <li>
                <a href="#projects" class="nav-link" aria-current="page">
                  Projects
                </a>
              </li>
              <li>
                <a href="#aboutme" class="nav-link">
                  About me
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link">
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
