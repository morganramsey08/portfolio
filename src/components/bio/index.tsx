import React from "react";
import Balancer from "react-wrap-balancer";
import FullProfilePic from "../../img/morgan-ramsey-full-profile.jpg";
import "./index.scss";

const BioComponent = () => {
  return (
    <div className="bio-container">
      <div className="bg-image" />
      <div className="bio-section">
        <div className="profile-image">
          <img src={FullProfilePic} alt="Morgan Ramsey" />
        </div>
        <div className="biography">
          <p className="enlarged">
            <Balancer>
              As a skilled Designer, I have been honing my craft for several
              years with a passion for creating intuitive and engaging user
              experiences.
            </Balancer>
          </p>
          <p>
            <Balancer>
              With over 15 years of experience in design and development, I've
              honed my skills with top companies such as iFit, Sony BMG, and
              Flywheel Energy.
            </Balancer>
          </p>
          <p>
            <Balancer>
              My focus on FrontEnd Engineering over the past 5 years has allowed
              me to excel at turning complex problems into easy user flows. I'm
              passionate about delivering clean projects that seamlessly blend
              design and code.
            </Balancer>
          </p>
          <p>
            <Balancer>
              Beyond work, I enjoy outdoor activities like camping, hiking, and
              hunting, as well as playing music to unwind.
            </Balancer>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioComponent;
