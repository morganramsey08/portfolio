import React from "react";
import NavBar from "../../components/nav/index";
import HomeTownHero from "../../components/hometown-hero/index";
import CurvedBox from "../../components/curved-box/index";
import PortfolioWork from "../../components/work/index";
import ContactComponent from "../../components/contact/index";
import "./index.scss";

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <HomeTownHero />
      <PortfolioWork />
      <CurvedBox />
      <ContactComponent />
    </div>
  );
}
export default HomePage;
