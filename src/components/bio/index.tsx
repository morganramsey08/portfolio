import React from "react";
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
            I started doing this when the only job titles were computer
            programmer and website designer.
          </p>
          <p>
            I have had a focus on FrontEnd Engineering for the past five years,
            but I have had a foot in the design world for over fifteen years.
            I’ve honed in my skills with companies like iFit, Sony BMG, and
            Flywheel Energy to name a few. I am passionate about turning complex
            problems into easy user flows and get a real sense of accomplishment
            with wrapping up clean projects in both design and code base.
          </p>
          <p>
            There is nothing worse than trying to write about yourself so I’ll
            keep it short and sweet. I am a huge fan of anything outdoors e.g.
            camping, hiking, hunting. I have been playing music since I was a
            kid and I love anything that will help me unwind and take my eyes
            off the screen.
          </p>
        </div>
      </div>
      <div className="goal">
        <h3>My Goal</h3>
        <p>
          I want to deliver the cleanest designs and code to your customer,
          client, or colleagues. Directing a user’s behavior with the least
          amount of confusion or resistance is the most important part of my
          job. Let me help your business out by guiding your users with ease.
        </p>
      </div>
    </div>
  );
};

export default BioComponent;
