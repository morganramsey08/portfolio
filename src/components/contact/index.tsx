import React from "react";
import PostItNote from "../note/index";
import "./index.scss";

const ContactComponent = () => {
  return (
    <div className="contact-component">
      <div className="contact-wrapper">
        <h2>Want to Hire Me?</h2>
        <span className="subtitle">Salary? Contract? Project?</span>
        <PostItNote
          alignItems="flex-start"
          left="50%"
          noteCopy="I'm open to all of it!"
          rotate="-14deg"
          rotateArrow="30deg"
          top="120px"
          whiteArrow
        />
        <div className="contacts">
          <div className="contact">
            <span>/ Contact</span>
            <a href="tel:+1-214-537-9054">+1 214 537 9054</a>
            <a href="mailto:mr@morganramsey.me">mr@morganramsey.me</a>
          </div>
          <div className="social">
            <span>/ Social</span>
            <a
              href="https://www.linkedin.com/in/morgan-ramsey-405175257/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/morganramsey"
              target="_blank"
              rel="noreferrer"
            >
              BeHance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
