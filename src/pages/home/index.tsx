import React from "react";
import NavBar from "../../components/nav/index.tsx";
import HomeTownHero from "../../components/hometown-hero/index.tsx";
import CurvedBox from "../../components/curved-box/index.tsx";
import PortfolioWork from "../../components/work/index.tsx";
import ContactComponent from "../../components/contact/index.tsx";
import "./index.scss";

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <HomeTownHero />
      <CurvedBox />
      <PortfolioWork />
      <ContactComponent />
    </div>
  );
}
export default HomePage;
