import React from "react";
import "./index.scss";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <span className="logo">MR</span>
      <nav>
        <a href="#">work</a>
        <a href="#">about me</a>
        <a href="#">resume</a>
        <a href="#">contact</a>
      </nav>
      <button className="hire-me">hire me</button>
    </div>
  );
};

export default NavBar;
