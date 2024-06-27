import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectLang } from "../../store/languageSlice";
import { languageData } from "../../Language/language";

const Contact = () => {
  const { language } = useSelector(selectLang);
  const { contactPage } = languageData[language];

  const {
    title,
    questions,
    formName,
    formEmail,
    formPhone,
    formMessage,
    formButton,
    sendTitle,
  } = contactPage;

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
            title: sendTitle,
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
        <h1>{title}</h1>
        <div className="question">{questions}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={formName}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={formEmail}
            required
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={formPhone}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={formMessage}
            rows={5}
            required
          ></textarea>
          <button type="submit">{formButton}</button>
        </form>
      </div>

      <a href="tel:+374-33-31-33-12" className="callPhone">
        <div className="contact-info-item">
          <div className="info-item-icon">
            <i className="fas fa-phone"></i>
          </div>

          <h2>+374 33 313 312</h2>
        </div>
      </a>
    </div>
  );
};

export default Contact;
