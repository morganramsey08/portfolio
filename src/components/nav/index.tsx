import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import github from "../../img/github.svg";
import "./index.scss";

const NavBar = () => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [insideThePage, setInsideThePage] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    if (currentYOffset > 30) {
      setInsideThePage(true);
    }

    if (currentYOffset < 30) {
      setInsideThePage(false);
    }

    setYOffset(currentYOffset);
    setVisible(visible);
  }
  return (
    <div
      className={classnames("nav-wrapper", {
        hidden: !visible,
        "solid-bg": insideThePage,
      })}
    >
      <div className="nav-container">
        <span className="logo">
          <a href="/">
            <img src={logo} alt="Morgan Ramsey Portfolio" />
          </a>
        </span>
        <nav>
          <Link className="nav-link" to="/">
            work
          </Link>
          <Link className="nav-link" to="/about">
            about
          </Link>
          <Link className="nav-link" to="/resume">
            resume
          </Link>
          <Link className="nav-link" to="/contact">
            contact
          </Link>
        </nav>
        <div className="links">
          <a
            href="https://github.com/morganramsey08/portfolio"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Morgan Ramsey Portfolio" />
          </a>
          <a className="button primary hire-me" href="/contact">
            hire me
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
