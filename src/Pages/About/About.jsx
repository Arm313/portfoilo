import React from "react";
import { useSelector } from "react-redux";
import { languageData } from "../../Language/language";
import { selectLang } from "../../store/languageSlice";
import "./about.css";

const About = () => {
  const { language } = useSelector(selectLang);
  const { resumepage } = languageData[language];
  const {
    aboutTitle,
    aboutDescription,
    aboutData,
    strengthTitle,
    strengthsData,
    workTitle,
    educationTitle,
    workDescription,
    workData,
    educationData,
  } = resumepage;

  return (
    <div className="about-page">
      <div className="about">
        <h1>{aboutTitle}</h1>
        <p className="about-content">{aboutDescription}</p>

        <div className="about-me">
          {aboutData?.length > 0 &&
            aboutData.map(({ title, value }, index) => {
              return (
                <div className="about-me-item" key={index}>
                  {title} |<span>{value}</span>
                </div>
              );
            })}
        </div>
        <div className="work">
          <h1>{workTitle}</h1>
          <div className="work-content">{workDescription}</div>
          <div className="work-data">
            {workData?.length > 0 &&
              workData.map(({ title, date, company }, index) => {
                return (
                  <div className="work-item" key={index}>
                    <div className="work-item-date">{date}</div>
                    <div className="work-item-title">{title}</div>
                    <div className="work-item-company">{company}</div>
                  </div>
                );
              })}
          </div>
        </div>

       
      </div>
      <div className="work-educate">
      <div className="strengths">
          <h2>{strengthTitle}</h2>
          <div className="strengths-data">
            {strengthsData?.length > 0 &&
              strengthsData.map(({ title }, index) => {
                return (
                  <div className="strengths-item" key={index}>
                    {title}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="educate">
          <h1>{educationTitle}</h1>
          <div className="eduaction-data">
            {educationData?.length > 0 &&
              educationData.map(({ title, date, company }, index) => {
                return (
                  <div className="eduaction-item" key={index}>
                    <div className="eduaction-item-date">{date} </div>
                    <div className="eduaction-item-title">{title}</div>
                    <div className="eduaction-item-company">{company}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
