import React, { useRef, useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

const contactItems = [
  {
    icon: <MdEmail />,
    label: "Email",
    value: "aayush@example.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "aj-aayush-shrestha",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "ajaayushdeku",
  },
  {
    icon: <MdLocationOn />,
    label: "Location",
    value: "Pokhara, Nepal",
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up your email service (EmailJS, Formspree, etc.) here
    setSent(true);
    formRef.current?.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        {/* Header */}
        <div className="contact-header">
          <span className="contact-eyebrow">Get in touch</span>
          <h2 className="contact-title">
            Contact <span>Me</span>
          </h2>
          <div className="contact-title-bar" />
          <p className="contact-subtitle">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className="contact-container">
          {/* Left: info items */}
          <div className="contact-left">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon-wrap">{item.icon}</div>
                <div className="contact-item-body">
                  <span className="contact-item-label">{item.label}</span>
                  <span className="contact-item-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div className="contact-right">
            <form
              className="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea name="message" placeholder="Your message..." required />
              <button type="submit" className="contact-submit">
                {sent ? "Message sent ✓" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
