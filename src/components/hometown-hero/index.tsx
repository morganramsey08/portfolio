import React from "react";
import DownArrow from "../down-arrow/index.tsx";
import "./index.scss";

const stats = [
  { number: 17, subtitle: "years experience" },
  { number: "100+", subtitle: "sites" },
  { number: "100+", subtitle: "components" },
  { number: "1,000,000+", subtitle: "cups of coffee" },
];

const HomeTownHero = () => {
  return (
    <div className="hero-wrapper">
      <div className="bg-image" />
      <div className="content">
        <div className="intro">
          <h1>Morgan Ramsey</h1>
          <span className="sub">FrontEnd Devloper & Designer</span>
        </div>
        <div className="stats">
          {stats.map((stat) => (
            <div className="stat">
              <span className="number">{stat.number}</span>
              <span className="title">{stat.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
      <DownArrow />
    </div>
  );
};

export default HomeTownHero;
