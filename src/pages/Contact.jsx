import React from "react";
import BackToTop from "../components/BackToTop";
import Socials from "../components/Contact/Socials";
import Form from "../components/Contact/Form";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="section-title pt-6 mb-12 lg:pt-0">Let's get in touch.</h1>
      <BackToTop />
      <div className="contact-container">
        <div className="contact-social-links">
          <h5 className="contact-find-text">Find me at</h5>
          <Socials />
        </div>
        <div className="contact-form-container">
          <Form />
        </div>
      </div>
    </section>
  );
};
export default Contact;
