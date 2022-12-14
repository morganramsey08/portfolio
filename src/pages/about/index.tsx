import React from "react";
import NavBar from "../../components/nav/index.tsx";
import PostItNote from "../../components/note/index.tsx";
import ContactComponent from "../../components/contact/index.tsx";
import Hero from "../../components/hero/index.tsx";
import BioComponent from "../../components/bio/index.tsx";
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
