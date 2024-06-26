import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact pages ">
      <div className="contact-form">
        <h1>Get in touch</h1>
        <div className="question">
          Have a question? Want to work together? Just want to say hi? I'd love
          to hear from you!
        </div>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" defaultValue={+374} placeholder="Phone" />
          <textarea placeholder="Message" rows={5}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="info-item-icon">
            <i className="fas fa-phone"></i>
          </div>
          <h2>+374 33 313 312</h2>
        </div>
        <div className="contact-info-item">
          <div className="info-item-icon">
          <i className="fa-regular fa-envelope"></i>
          </div>
          <h2>armbabujyan@gmail.com</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
