import React from "react";
import ProfilePic from "../../img/morgan-ramsey-profile.png";
import "./index.scss";

const CurvedBox = () => {
  return (
    <div className="curved-box-component">
      <div className="content-container">
        <img src={ProfilePic} alt="Morgan Ramsey" />
        <p>I get a real kick out of <span className="bold-blue">simplifying</span> complex tasks and making users feel comfortable with an interface through both <span className="bold-italic">code</span> and <span className="bold-italic">design</span>.</p>
      </div>
    </div>
  );
};

export default CurvedBox;
