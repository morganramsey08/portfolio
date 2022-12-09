import React from "react";
import "./index.scss";

interface HeroProps {
  heroBg: string;
  children?: React.ReactNode;
}
const Hero = ({ heroBg, children }: HeroProps) => {
  return (
    <div
      className="hero-component"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {children}
    </div>
  );
};

export default Hero;
