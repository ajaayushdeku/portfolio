import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import "../styles/Contact.css";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("address");

  const contactDetails = {
    address: "Prithivi-Chowk, Pokara, Nepal",
    phone: "+977-9814173184",
    email: "ajaayushsth234@gmail.com",
  };

  return (
    <section className="contact-section">
      <h2 className="component-heading">Contact</h2>

      <div className="contact-container">
        {/* Left Column: Contact Info */}
        <div className="contact-left">
          <h3>
            Feel free to reach out through email, phone, or the form below.
          </h3>
          <div className="contact-tabs">
            <button
              className={activeTab === "address" ? "active" : ""}
              onClick={() => setActiveTab("address")}
            >
              <FiMapPin
                className={`icon ${activeTab === "address" ? "active" : ""}`}
                size={22}
              />
              Address
            </button>
            <button
              className={activeTab === "phone" ? "active" : ""}
              onClick={() => setActiveTab("phone")}
            >
              <LuPhone
                className={`icon ${activeTab === "phone" ? "active" : ""}`}
                size={22}
              />
              Phone
            </button>
            <button
              className={activeTab === "email" ? "active" : ""}
              onClick={() => setActiveTab("email")}
            >
              <MdOutlineMailOutline
                className={`icon ${activeTab === "email" ? "active" : ""}`}
                size={22}
              />
              Email
            </button>
          </div>
          <div className="contact-info">
            {activeTab === "address" && <p>{contactDetails.address}</p>}
            {activeTab === "phone" && <p>{contactDetails.phone}</p>}
            {activeTab === "email" && <p>{contactDetails.email}</p>}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                className="contact-form-input-field"
              />
            </div>

            <div className="form-row">
              <label>E-mail:</label>
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
