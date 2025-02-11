import React from "react";
import "./home.css";
import MyImage from "../../Images/arm.jpg";
import { Link } from "react-router-dom";
import cv from "../../cv/Arman Babujyan - en.pdf";
import cvHy from "../../cv/Arman Babujyan - hy.pdf";
import { languageData } from "../../Language/language";
import { useSelector } from "react-redux";
import { selectLang } from "../../store/languageSlice";

const Home = () => {
  const { language } = useSelector(selectLang);
  const { homepage } = languageData[language];

  return (
    <div className="homepage pages">
      <div className="description">
        <p className="name">{homepage?.position}</p>
        <h1>
          {homepage?.title} <span className="name">{homepage?.name}</span>
        </h1>
        <p>{homepage?.description}</p>

        <div className="social-pages">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/arm313/"
            className="social-item"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link
            target="_blank"
            to="https://www.facebook.com/ArmBABUJYan/"
            className="social-item"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link
            target="_blank"
            to="https://www.instagram.com/arm_313/"
            className="social-item"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            target="_blank"
            to="https://github.com/Arm313"
            className="social-item"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            target="_blank"
            to="https://t.me/arm313"
            className="social-item"
          >
            <i className="fa-brands fa-telegram"></i>
          </Link>
        </div>
        <a
          href={`${language === "en" ? cv : cvHy}`}
          download={`${language === "en" ? "Arman Babujyan-en.pdf" : "Arman Babujyan-hy.pdf"}`}
          className="download-btn pixel-corners"
        >
          <div className="button-content">
            <div className="svg-container">
              <svg
                className="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"></path>
              </svg>
            </div>
            <div className="text-container">
              <div className="text">{homepage?.download} CV</div>
            </div>
          </div>
        </a>
      </div>
      <div className="image">
        <img src={MyImage} alt="myImage" />
      </div>
    </div>
  );
};

export default Home;
