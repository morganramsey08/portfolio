import React from "react";
import astronaut from "../../img/resume-astronaut.svg";
import PostItNote from "../note/index";
import "./index.scss";

const ResumeHero = () => {
  return (
    <div className="hero-wrapper">
      <div className="bg-image" />
      <div className="content">
        <div className="intro">
          <span>Check out my</span>
          <span className="sub">Resume</span>
          <a href="./morgan-ramsey-resume.pdf" className="button primary">
            download PDF
          </a>
        </div>
        <div className="astronaut">
          <PostItNote
            red
            reverseArrow
            alignItems="flex-end"
            left="-293px"
            noteCopy="Im not an actual astronaut"
            rotate="-14deg"
            rotateArrow="0deg"
            bottom="310px"
          />
          <img src={astronaut} alt="is this rocket surgery?" />
        </div>
      </div>
    </div>
  );
};

export default ResumeHero;
