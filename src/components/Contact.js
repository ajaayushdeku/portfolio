import React, { useRef } from "react";
import { FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79ma28b", // Your EmailJS service ID
        "template_upvnpv8", // Your EmailJS template ID
        formRef.current,
        "bH5QW9n4OlfGwUGE6", // Your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Failed to send message.");
        },
      );
  };

  const contactDetails = [
    {
      icon: <FiMapPin size={22} />,
      label: "Address",
      value: "Prithivi-Chowk, Pokhara, Nepal",
    },
    {
      icon: <LuPhone size={22} />,
      label: "Phone",
      value: "+977 - 9814173184",
    },
    {
      icon: <MdOutlineMailOutline size={22} />,
      label: "Email",
      value: "ajaayushsth234@gmail.com",
    },
  ];

  return (
    <section className="contact-section">
      <h2 className="component-heading">
        My <span>Contacts</span>
      </h2>

      <div className="contact-container">
        {/* Left Column: Contact Details */}
        <div className="contact-left">
          <p>Feel free to reach out through email, phone, or the form below.</p>
          <div className="contact-info-vertical">
            {contactDetails.map((item, index) => (
              <div className="contact-item" key={index}>
                <span className="contact-icon">{item.icon}</span>
                <div className="contact-info">
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-right">
          <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <label>Name:</label>
              <input
                type="text"
                name="name" // Matches {{name}} in your template
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="form-row">
              <label>Subject:</label>
              <input
                type="text"
                name="subject" // Optional, if you want to pass email separately
                placeholder="Enter Your Subject"
                required
              />
            </div>

            <div className="form-row">
              <label>Email:</label>
              <input
                type="email"
                name="email" // Optional, if you want to pass email separately
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="form-row">
              <label>Message:</label>
              <textarea
                name="message" // Matches {{message}} in your template
                placeholder="Enter Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
