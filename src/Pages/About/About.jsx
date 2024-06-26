import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about">
        <h1>About Me</h1>
        <p className="about-content">
          I am a junior front end developer with a passion for creating
          beautiful and functional websites.I am a team player and I enjoy
          working collaboratively to create high-quality websites. I am also a
          quick learner and I am always eager to take on new challenges. I am
          excited to put my skills to use and create amazing websites.
        </p>

        <div className="about-me">
          <div className="about-me-item">
            name |<span>Arman Babujyan</span>
          </div>
          <div className="about-me-item">
            birthday | <span>31 - 03 - 1998</span>
          </div>
          <div className="about-me-item">
            city | <span>Etchmiadzin</span>
          </div>
          <div className="about-me-item">
            email | <span>armbabujyan@gmail.com</span>
          </div>
          <div className="about-me-item">
            phone | <span>(+374) 33 313 312</span>
          </div>
          <div className="about-me-item">
            language | <span>Armenian</span>
          </div>
        </div>

        <div className="strengths">
          <h2>My Strengths</h2>
          <div className="strengths-data">
            <div className="strengths-item">Teamwork</div>
            <div className="strengths-item">Flexibility</div>
            <div className="strengths-item">Persistent</div>
            <div className="strengths-item">Efficiency</div>
            <div className="strengths-item">Confident</div>
            <div className="strengths-item">Determination</div>
            <div className="strengths-item">Ability to prioritize</div>
          </div>
        </div>
      </div>
      <div className="work-educate">
        <div className="work">
          <h1>Work</h1>
          <div className="work-content">
            I worked with the team on the website "prozamki.com", which is
            written in React.js. I used Axios to communicate with the backend,
            SCSS for the styles, Swipe.jsr for the slider, and Redux-toolkit to
            manage project state.
          </div>
          <div className="work-data">
            <div className="work-item">
              <div className="work-item-date">2022 - 2023</div>
              <div className="work-item-title">Front End Developer</div>
              <div className="work-item-company">Codium Company</div>
            </div>
            <div className="work-item">
              <div className="work-item-date">2022 - present</div>
              <div className="work-item-title">HTML / CSS tutor</div>
              <div className="work-item-company">Codium Company</div>
            </div>
          </div>
        </div>
        <div className="educate">
          <h1>Educate</h1>
          <div className="eduaction-data">
            <div className="eduaction-item">
              <div className="eduaction-item-date">2024 </div>
              <div className="eduaction-item-title">
                React js Web Development Course
              </div>
              <div className="eduaction-item-company">Smart Code</div>
            </div>
            <div className="eduaction-item">
              <div className="eduaction-item-date">2016 - 2021</div>
              <div className="eduaction-item-title">
                Faculty of Informatics and Applied Mathematics
              </div>
              <div className="eduaction-item-company">
                Yerevan State University
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
