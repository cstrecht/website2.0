import React from "react";
import BackToTop from "../components/BackToTop";

const Contact = () => {
  return (
    <section id="contact" className="h-fit relative">
      <h1 className="section-title pt-6 mb-12">Let's get in touch.</h1>
      <BackToTop />
      <div className="contact-container">
        <div className="contact-social-links">
          <h5 className="text-sm 2xl:text-lg mb-2 align-top">Find me at</h5>
          <ul className="contact-social-list">
            <li>
              <a
                href="https://github.com/cstrecht"
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cstrecht/"
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/cstrechtt"
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/carolina_strx/"
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form-container">
          <form
            action="https://formspree.io/f/xqkozeqq"
            method="POST"
            className="contact-form"
          >
            <div>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                name="message"
                className="contact-form-input h-44"
                placeholder="Go ahead, I'm listening..."
              ></textarea>
            </div>
            <button type="submit" className="message-btn">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
