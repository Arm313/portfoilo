import React from "react";
import "./home.css";
import MyImage from "../../Images/arm.jpg";
import { Link } from "react-router-dom";

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
      </div>
      <div className="image">
        <img src={MyImage} alt="myImage" />
      </div>
    </div>
  );
};

export default Home;
