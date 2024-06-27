import React from "react";
import "./home.css";
import MyImage from "../../Images/arm.jpg";
import { Link } from "react-router-dom";
import cv from "../../cv/Arman Babujyan.pdf";

const Home = () => {
  return (
    <div className="homepage pages">
      <div className="description">
        <p className="name">Front-end developer</p>
        <h1>
          Hi, I'm <span className="name">Arman Babujyan</span>
        </h1>
        <p>
          I’m Junior Programmer offering excellent analytical skills and the
          important ability to function well both independently and in
          fast-paced team environments.
        </p>

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
        </div>
        <a href={cv} download="Arman Babujyan.pdf" className="download-btn pixel-corners">
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
              <div className="text">Download CV</div>
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
