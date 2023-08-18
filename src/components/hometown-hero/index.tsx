import React from "react";
import github from "../../img/github.svg";
import figma from "../../img/figma.svg";
import downArrow from "../../img/arrow.svg";
import "./index.scss";

const HomeTownHero = () => {
  return (
    <div className="hometown-hero-wrapper">
      {/* <div className="bg-image" /> */}
      <div className="content">
        <div className="intro">
          <h1>👋 I'm Morgan Ramsey</h1>
          <span className="sub">Designer &amp; Developer</span>
          <p>
            With over 15 years of experience in UI/UX design and front-end
            development, I've honed a strategy that creates designs for systems,
            fostering remarkable habits.
          </p>
          <div className="hero-cta">
            <a
              href="https://www.figma.com/file/QrWS2IzbvhpbYfAqBIDOUd/portfolio?type=design&node-id=204%3A335&t=j0p3I0sqg3mSyXbw-1"
              className="button primary"
              target="_blank"
              rel="noreferrer"
            >
              <img src={figma} alt="Morgan Ramsey Figma Portfolio" /> View this
              site in Figma
            </a>
            <a
              href="https://github.com/morganramsey08/portfolio"
              className="button primary"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Morgan Ramsey Github Portfolio" /> View
              this site on GitHub
            </a>
          </div>
        </div>
      </div>
      <img
        src={downArrow}
        alt="arrow leading to portfolio"
        className="down-arrow"
      />
    </div>
  );
};

export default HomeTownHero;
