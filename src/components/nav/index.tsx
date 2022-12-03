import React from "react";
import classnames from "classnames";
import "./index.scss";

const NavBar = ({ visible, insideThePage }) => {
  return (
    <div
      className={classnames("nav-wrapper", {
        "hidden": !visible,
        "solid-bg": insideThePage,
      })}
    >
      <div className="nav-container">
        <span className="logo">MR</span>
        <nav>
          <a href="#">work</a>
          <a href="#">about me</a>
          <a href="#">resume</a>
          <a href="#">contact</a>
        </nav>
        <button className="hire-me">hire me</button>
      </div>
    </div>
  );
};

export default NavBar;
