import React, { useState } from "react";
import { send } from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    //
  };
  const handleChange = (e) => {
    setToSend({
      ...toSend,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="contact-section">
        <form onSubmit={onSubmit} className="form">
          <input
            required
            type="text"
            name="first_name"
            className="firstName"
            placeholder="First name"
            value={toSend.first_name}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="last_name"
            className="lastName"
            placeholder="last name"
            value={toSend.last_name}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="message"
            className="message"
            placeholder="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="reply_to"
            className="reply"
            placeholder="your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
