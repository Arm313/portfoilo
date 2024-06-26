import React from "react";
import "./skills.css";
import hmtlImg from "../../Images/html.svg";
import cssImg from "../../Images/css.svg";
import jsImg from "../../Images/javascript.svg";
import reactImg from "../../Images/react.svg";
import reduxImg from "../../Images/redux.svg";
import gitImg from "../../Images/git.svg";
import githubImg from "../../Images/github.svg";

const Skills = () => {
  return (
    <div className="skills pages">
      <h1>Skills</h1>

      <div className="skills-list">
        <div className="skills-item">
          <div className="skill-image">
            <img src={hmtlImg} alt="html" />
          </div>
          <h2>HTML</h2>
        </div>
        <div className="skills-item">
          <div className="skill-image">
            <img src={cssImg} alt="css" />
          </div>
          <h2>CSS</h2>
        </div>
        <div className="skills-item">
          <div className="skill-image">
            <img src={gitImg} alt="git" />
          </div>
          <h2>GIT</h2>
        </div>
        <div className="skills-item">
          <div className="skill-image">
            <img src={githubImg} alt="github" />
          </div>
          <h2>GITHUB</h2>
        </div>
        <div className="skills-item">
          <div className="skill-image">
            <img src={jsImg} alt="javascript" />
          </div>
          <h2>JAVASCRIPT</h2>
        </div>
        <div className="skills-item">
          <div className="skill-image">
            <img src={reactImg} alt="react" />
          </div>
          <h2>REACT</h2>
        </div>
        <div className="skills-item redux">
          <div className="skill-image">
            <img src={reduxImg} alt="redux" />
          </div>
          <h2>
            REDUX
            <br />
            REDUX-TOOLKIT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
