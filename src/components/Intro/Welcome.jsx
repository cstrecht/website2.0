import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Socials from "./Socials";

const Welcome = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm a frontend developer."],
      startDelay: 300,
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="intro-text">
      <p className="intro-welcome">Hello, I'm Carolina Strecht ✌️</p>
      <span ref={el}></span>
      <Socials />
    </div>
  );
};
export default Welcome;
