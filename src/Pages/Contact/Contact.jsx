import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eag83j9",
        "template_ruqbvzb",
        e.target,
        "IjZ1YaeDE46MlZU-k"
      )
      .then(
        (result) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            background: "#272727e2",
            color: "#fff",
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Message sent successfully!",
          });
        },
        (error) => {
          console.log(error.text);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            background: "#272727e2",
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: "Failed to send message, please try again later.",
          });
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact pages">
      <div className="contact-form">
        <h1>Get in touch</h1>
        <div className="question">
          Have a question? Want to work together? Just want to say hi? I'd love
          to hear from you!
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            required
          ></textarea>
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
