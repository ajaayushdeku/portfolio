import React from "react";

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <p>Feel free to reach out through email or the form below.</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
};

export default Contact;
