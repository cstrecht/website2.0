import React from "react";

const Form = () => {
  return (
    <>
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
    </>
  );
};
export default Form;
