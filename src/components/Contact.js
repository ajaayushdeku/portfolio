import React from "react";
import { FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import "../styles/Contact.css";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FiMapPin size={22} color="#007bff" />,
      label: "Address",
      value: "Prithivi-Chowk, Pokhara, Nepal",
    },
    {
      icon: <LuPhone size={22} color="#007bff" />,
      label: "Phone",
      value: "+977 - 9814173184",
    },
    {
      icon: <MdOutlineMailOutline size={22} color="#007bff" />,
      label: "Email",
      value: "ajaayushsth234@gmail.com",
    },
  ];

  return (
    <section className="contact-section">
      <h2 className="component-heading">Contact</h2>

      <div className="contact-container">
        {/* Left Column: Contact Details */}
        <div className="contact-left">
          <p>Feel free to reach out through email, phone, or the form below.</p>
          <div className="contact-info-vertical">
            {contactDetails.map((item, index) => (
              <div className="contact-item" key={index}>
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <label>Name:</label>
              <input type="email" placeholder="Enter Your Email" required />
            </div>

            <div className="form-row">
              <label>E-mail</label>
              <input type="email" placeholder="Enter Your Email" required />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea
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
