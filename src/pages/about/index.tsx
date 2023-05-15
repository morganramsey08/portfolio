import React from "react";
import NavBar from "../../components/nav/index";
import PostItNote from "../../components/note/index";
import ContactComponent from "../../components/contact/index";
import Hero from "../../components/hero/index";
import BioComponent from "../../components/bio/index";
import HeroBg from "../../img/hero-bg-about.jpg";
import "./index.scss";

function AboutPage() {
  return (
    <div className="about-page">
      <NavBar />
      <Hero heroBg={HeroBg}>
        <PostItNote
          alignItems="flex-start"
          noteCopy="this is where I live!"
          left="52%"
          top="260px"
          rotate="-14deg"
          rotateArrow="-30deg"
          whiteArrow
        />
      </Hero>
      <BioComponent />
      <ContactComponent />
    </div>
  );
}
export default AboutPage;
