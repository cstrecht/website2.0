import React from "react";
import BackToTop from "../components/BackToTop";
import Socials from "../components/Contact/Socials";
import Form from "../components/Contact/Form";
import DownloadCV from "../components/About/DownloadCV";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="section-title mb-12 pt-6 lg:pt-0">Let's get in touch.</h1>
      <BackToTop />
      <div className="contact-container">
        <div className="contact-social-links">
          <h5 className="contact-find-text">Find me at</h5>
          <Socials />
          <DownloadCV />
        </div>
        <div className="contact-form-container">
          <Form />
        </div>
      </div>
    </section>
  );
};
export default Contact;
